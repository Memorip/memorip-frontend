const removeBTag = (input: string): string => {
  return input.replace(/<\/?b>/g, '')
}

export default removeBTag
