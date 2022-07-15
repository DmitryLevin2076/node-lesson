const express = require('express')
const patch = require('path')

const app = express()

const PORT = 3000

const createPath = (page) => patch.resolve(__dirname, 'views', `${page}.html`)

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(createPath('index'))
})

app.get('/contacts', (req, res) => {
    res.sendFile(createPath('contacts'))
})

app.use((req, res) => {
    // res.statusCode = 404
    res
        .status(404)
        .sendFile(createPath('error'))
})
