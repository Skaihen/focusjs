function h(tag, props, ...children) {
  return {
    tag,
    props,
    children
  }
}

function mount(vnode, container) {
  const el = (vnode.el = document.createElement(vnode.tag))
  for (const key in vnode.props) {
    el.setAttribute(key, vnode.props[key])
  }

  if (typeof vnode.children === "string") {
    el.textContent = vnode.children
  } else {
    vnode.children.forEach((child) => {
      mount(child, el)
    })
  }
  container.appendChild(el)
}
