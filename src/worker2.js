import { fetchData } from "./fetch"

onmessage = async function (e) {
  const { timeout } = e.data
  const res = await fetchData(timeout)
  postMessage(res)
}
