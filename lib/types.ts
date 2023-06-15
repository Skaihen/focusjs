export type helperType = {
  tag: string
  props: helperPropsType | null
  children: (string | helperType[])[]
}

export type helperPropsType = {
  class?: string
  href?: string
  src?: string
  style?: string
}

export type vnodeType = {
  tag: string
  props: helperPropsType
  children: helperType[]
  el?: HTMLElement
}
