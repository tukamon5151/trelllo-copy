export const nextPublicUrl = (url: string): string => {
  if (!(process.env.NODE_ENV === 'development')) return url
  return url.replace(/^public\//, '')
}
