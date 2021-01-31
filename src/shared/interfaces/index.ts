export interface LocationState {
  hash: string
  key: string
  pathname: string
  search: string
  success?: boolean
}

export interface PropsAlert {
  msg: string
  type: keyof { error: string; success: string; info: string }
}
