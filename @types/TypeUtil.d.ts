declare namespace TypeUtil {
  type valueOf<T> = T[keyof T]

  type StateManagementModule<State> = (
    initialState?: Partial<State>,
  ) => {
    state: State
    actions: Record<string, (args: unknown) => void>
  }

  type Dispatchers<T extends StateManagementModule> = valueOf<
    Pick<ReturnType<T>>,
    'actions'
  >
}
