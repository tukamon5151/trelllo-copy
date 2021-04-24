declare namespace TypeUtil {
  type Dispatchers<T extends ReturnDispatchers> = valueOf<
    Pick<ReturnType<T>, 'dispatchers'>
  >
  type ReturnDispatchers = (args: unknown) => { dispatchers: unknown }
  type valueOf<T> = T[keyof T]
}
