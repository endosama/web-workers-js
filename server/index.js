const express = require("express")
const app = express()
const port = 3000

app.get("/:timeout", (req, res) => {
  const { timeout } = req.params
  res.header("Access-Control-Allow-Origin", "*")
  setTimeout(
    () =>
      res.json({
        response: "Hello",
      }),
    timeout
  )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
