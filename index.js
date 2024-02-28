const app = require('express')()
const qrcode = require("qrcode")
app.get("/:text", async (req, res) => {
  let params = req.params
  let qr = await qrcode.toDataURL(params.text).catch(err => {})
  res.send({base64:qr})
})
app.listen(3000,() => {
  console.log("Hello World")
})