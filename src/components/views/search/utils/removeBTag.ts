const removeBTag = (input: string): string => {
  const withoutBTag = input.replace(/<b\b[^>]*>(.*?)<\/b>/gi, '$1')

  return withoutBTag.replace(/<\/?[^>]+(>|$)/g, '')
}

export default removeBTag
