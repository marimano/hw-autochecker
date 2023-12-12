const hasNonStrictEquality = code => (/[^=!]([!=]=)[^=]+/gm).test(code)
const getNotReassignedLets = code => {
  const lets = [...code.matchAll(/let\s+(\w+)\s*=/gms)].map(([, letName]) => letName)
  return lets.filter(letName => {
    const reassignCheckRegex = new RegExp('[^(let )]\\W*' + letName + '\\s*(([\\+\\-\\*/%(\\*\\*%\\^&)]?=[^=])|(\\+\\+)|(\\-\\-))', 'gms')
    const reassignCheckRegex2 = new RegExp('((\\+\\+)|(\\-\\-))\s*' + letName, 'gms')
    return !reassignCheckRegex.test(code) && !reassignCheckRegex2.test(code)
  })
}

export {
  hasNonStrictEquality,
  getNotReassignedLets
}