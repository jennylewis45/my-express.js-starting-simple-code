const express = require('express')
const path=require('path')
const app = express()
const port = 3000

// const harrMiddleware=(req,res,next)=>{
//   console.log(res)
//next() next ka function is liye use hota h k isky badd waala middleware run hojaye.
// } personal middleware.

app.use(express.static(path.join(__dirname,'public')))
// app.use(harrMiddleware)personal middleware.

//how to send different params see in line 15.
app.get('/hello/:name', (req, res) => {
  res.send('Hello World!'+req.params.name)
}) 
app.get('/about', (req, res) => {
  //res.send('about')
res.sendFile(path.join(__dirname,'./index.html'))
// res.status(500)
res.json({"javeriya":20})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})