import { Ref, ComputedRef, unref } from "vue";

import { isPrimitive, removeWhiteSpaces } from "../primitive";

export type BaseRecordType<V = any> = Record<string, V>;

export type BaseClassType<T extends Function = any> = new (...args: any[]) => T;

export type RecordOrClass = BaseRecordType | BaseClassType;

export function deepClone<T extends BaseRecordType>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

function deriveProcessedValue(v: any) {
  return isPrimitive(v) ? v : typeof v === "function" ? v() : deepClone(v);
}

export function cloneAndSync<T extends BaseRecordType>(obj: T) {
  return Object.keys(obj).reduce((acc, cur) => {
    const currentValue = obj[cur];
    return {
      ...acc,
      [cur]: deriveProcessedValue(currentValue),
    };
  }, {}) as {
    [key in keyof T]: T[key] extends Function
      ? Exclude<ReturnType<T[key]>, Function>
      : Exclude<T[key], Function>;
  };
}

export function syncKeyValues<T extends BaseRecordType, U extends T>(
  toObj: T,
  fromObj: U,
  specifiedKeys?: (keyof T)[]
): void {
  const keysToSync = specifiedKeys || Object.keys(toObj);
  const keysToSyncMap = keysToSync.reduce((acc, cur) => {
    const fromObjValue = fromObj[cur];
    return {
      ...acc,
      [cur]: deriveProcessedValue(fromObjValue),
    };
  }, {});
  Object.assign(toObj, keysToSyncMap);
}

export function resetAllKeysTo<T extends BaseRecordType>(
  obj: T,
  toVal: primitive | Function
): void {
  const keyMap = Object.keys(obj).reduce((acc, cur) => {
    return { [cur]: typeof toVal === "function" ? toVal() : toVal, ...acc };
  }, {});
  Object.assign(obj, keyMap);
}

export function deriveKeysValidity(
  reactiveObj: Record<string, boolean | Ref<boolean> | ComputedRef<boolean>>
): boolean {
  return Object.keys(reactiveObj).every((k) => unref(reactiveObj[k]));
}

export function extractObjectDtoFromRecordOrClass<T extends BaseRecordType>(
  objectDto: DtoOf<BaseRecordType>,
  objectFrom: RecordOrClass
) {
  return Object.keys(objectDto).reduce((acc, cur) => {
    const currentValue = objectDto[cur];
    return {
      ...acc,
      [cur]:
        typeof currentValue === "function"
          ? currentValue(objectFrom)
          : objectFrom[cur],
    };
  }, {}) as {
    [key in keyof T]: T[key] extends (...args: any[]) => infer R
      ? R
      : Exclude<T[key], Function>;
  };
}

export function getAllKeysOfClass<T extends BaseClassType>(c: T): (keyof T)[] {
  return Object.keys(c) as (keyof T)[];
}

function copyRecordWithoutWhiteSpaces<R extends BaseRecordType>(r: R): R {
  return Object.keys(r).reduce((acc, cur) => {
    const currentKeyValue = r[cur];
    return {
      ...acc,
      [cur]:
        typeof currentKeyValue === "string"
          ? removeWhiteSpaces(currentKeyValue)
          : currentKeyValue,
    };
  }, {}) as R;
}

export function areRecordsDifferent(
  rec1: BaseRecordType,
  rec2: BaseRecordType,
  ignoreWhiteSpace: boolean = false
): boolean {
  ignoreWhiteSpace &&
    (rec1 = copyRecordWithoutWhiteSpaces(rec1)) &&
    (rec2 = copyRecordWithoutWhiteSpaces(rec2));

  return JSON.stringify(rec1) !== JSON.stringify(rec2);
}
