declare namespace TypeUtil {
  type Dispatchers<T extends ReturnDispatchers> = valueOf<
    Pick<ReturnType<T>, 'dispatchers'>
  >
  type Selectors<T extends ReturnSelectors> = valueOf<
    Pick<ReturnType<T>, 'selectors'>
  >
  type ReturnDispatchers = (args: unknown) => { dispatchers: unknown }
  type ReturnSelectors = (args: unknown) => { selectors: unknown }
  type valueOf<T> = T[keyof T]
  type RequireOne<T, K extends keyof T = keyof T> = K extends keyof T
    ? PartialRequire<T, K>
    : never
  type PartialRequire<O, K extends keyof O> = {
    [P in K]-?: O[P]
  } &
    O
}
