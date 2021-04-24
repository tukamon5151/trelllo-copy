export type NotEmptyString<T extends string> = '' extends T ? never : T

export const isNotEmptyString = (x: string): x is NotEmptyString<string> => {
  return typeof x === 'string' && x !== ''
}
