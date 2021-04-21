import { compute } from "../compute"

onmessage = function (e) {
  const res = compute(5)
  postMessage(res)
}
