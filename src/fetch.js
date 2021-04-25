export const fetchData = (timeout) => {
  return fetch(`http://localhost:3000/${timeout}`).then(async (res) => {
    const json = await res.json()
    return json
  })
}
