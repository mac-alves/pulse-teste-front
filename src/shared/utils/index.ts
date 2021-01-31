export interface Params {
  [key: string]: any
}

export const queryParamsToJson = (query: string): Params => {
  if (query.trim().length > 0) {
    const arr = query.replace('?', '').split('&')
    return arr.reduce((final, current) => {
      const obj = current.split('=')
      return {
        ...final,
        [obj[0]]: obj[1]
      }
    }, {})
  }

  return {}
}

export const strToBool = (str: string): boolean => {
  return str === 'true'
}
