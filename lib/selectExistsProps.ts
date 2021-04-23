export const selectExistsProps = <T>(props: T) =>
  Object.entries(props).reduce(
    (prev, props) =>
      props[1] !== undefined ? { ...prev, [props[0]]: props[1] } : prev,
    {},
  )
