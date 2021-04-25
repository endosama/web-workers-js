import { fetchData } from "./fetch"

const t0 = performance.now()

const setElementContent = (i) => {
  const t1 = performance.now()
  console.log(`Received message from worker ${t1 - t0}`)
  console.log("Is element defined:", document.getElementById("content" + i))
  document.getElementById("content" + i).innerHTML = `Computation time: ${
    t1 - t0
  }`
}

function initContent(worker, i, timeout) {
  worker.postMessage({
    type: "start",
    timeout,
  })
  worker.onmessage = (e) => {
    setElementContent(i)
  }
}

function initWithWorkers() {
  const worker = new Worker("./worker.js")
  initContent(worker, 1, 3000)
  const worker2 = new Worker("./worker2.js")
  initContent(worker2, 2, 10000)
}

function initNoWorkers() {
  fetchData(3000).then(() => setElementContent(1))
  fetchData(10000).then(() => setElementContent(2))
}

initWithWorkers()
// initNoWorkers()
