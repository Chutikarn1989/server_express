const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('Root Page')
})

app.listen(8000,() => {
    console.log('ready on http://localhost:8000')
})