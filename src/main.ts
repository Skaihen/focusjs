import { h, mount, patchNode } from "../lib/helper"

// Virtual node 1
const node1 = h("div", { class: "container" }, [
  h("h1", null, "Hello World 🌍"),
  h("p", null, "Thanks for reading the marc.dev blog 😊")
])

// Mount the node to the DOM
mount(node1, document.getElementById("app"))

// Virtual node 2
const node2 = h("div", { class: "container" }, [
  h("h1", null, "Hello Dev 💻"),
  h("p", null, [
    h("span", null, "Thanks for reading the "),
    h("a", { href: "https://marc.dev" }, "marc.dev"),
    h("span", null, " blog")
  ]),
  h(
    "img",
    {
      src: "https://media.giphy.com/media/26gsjCZpPolPr3sBy/giphy.gif",
      style: "width: 350px; border-radius: 0.5rem;"
    },
    []
  )
])

// Patch the new node to the old node
setTimeout(() => {
  patchNode(node1, node2)
}, 3000)
