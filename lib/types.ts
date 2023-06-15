export type helperType = {
  tag: string
  props: helperPropsType | null
  children: (string | helperChildrenType[])[]
}

export type helperPropsType = {
  class?: string
  href?: string
  src?: string
  style?: string
}

export type helperChildrenType = {
  tag: string
  props: helperPropsType
  children: helperChildrenType[]
}

export type vnodeType = {
  tag: string
  props: helperPropsType
  children: helperChildrenType[]
  el?: HTMLElement
}
