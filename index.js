const express = require('express'), app = express()

app.use(express.static('./site'))

app.get('/', function (req, res) {
    res.sendFile('./index.html')
})

app.listen(process.env.PORT || 3000)