import { compute } from "./compute"

const t0 = performance.now()

function initContent(i, timeout) {
  compute(5)
  const t1 = performance.now()
  console.log(`Setting the content ${t1 - t0}`)
  console.log("Is the element defined:", document.getElementById("content" + i))
  document.getElementById("content" + i).innerHTML = "Loaded"
}
function init() {
  initContent(1, 10000)
  initContent(2, 2000)
}

init()
