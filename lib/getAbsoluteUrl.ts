export const getAbsoluteUrl = (path?: string): string =>
  `${process.env.NEXT_PUBLIC_WEBAPP_URL}${path || ''}`
