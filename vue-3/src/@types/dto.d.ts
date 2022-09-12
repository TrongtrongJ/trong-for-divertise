declare type DtoOf<T extends Record<string, Exclude<any, Function>>> = {
  [key in keyof T]: T[key] | ((...args: any[]) => T[key]);
};
