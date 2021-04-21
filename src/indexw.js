const t0 = performance.now()

function initContent(i) {
  const worker = new Worker("./worker/worker.js")
  worker.postMessage("Start")
  worker.onmessage = (e) => {
    const t1 = performance.now()
    console.log(`Received message from worker ${t1 - t0}`)
    console.log("Is element defined:", document.getElementById("content" + i))
    document.getElementById("content" + i).innerHTML = `Computation time: ${
      t1 - t0
    }`
  }
}

function init() {
  initContent(1)
  initContent(2)
}

init()
