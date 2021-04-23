export const objectToQueryString = <T>(params?: T): string => {
  if (!params) return ''
  return (
    '?' +
    Object.entries(params)
      .map((e) => `${e[0]}=${e[1]}`)
      .join('=')
  )
}
