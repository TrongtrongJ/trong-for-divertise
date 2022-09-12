const nonPrimitiveTypes = ["object", "function"];

export function isNullish(val: any): boolean {
  return val == null;
}

export function isPrimitive(val: any): boolean {
  return isNullish(val) || !nonPrimitiveTypes.includes(typeof val);
}
