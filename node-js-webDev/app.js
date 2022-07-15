/** События **/

const Logger = require('./log')
const logger = new Logger()

logger.on('some_event', (args) => {
    const { id, text } = args
    console.log(text)
})

logger.log('User Logged!')

/** Буфер и потоки **/

const fs = require('fs')
const zlib = require("zlib");

const readStream = fs.createReadStream('./docs/text.txt')
const writeStream = fs.createWriteStream('./docs/new-text.txt')
const compressStream = zlib.createGzip() // Сжатие

// readStream.on('data', (chunk) => {
//     writeStream.write(`\n---CHUNK START---\n`)
//     writeStream.write(chunk)
//     writeStream.write(`\n---CHUNK END---\n`)
// })

const handleError = () => {
    console.log('Error')
    readStream.destroy()
    writeStream.end('Finished with error...')
}

readStream
    .on('error', handleError)
    .pipe(compressStream) // Сжатие
    .pipe(writeStream)
    .on('error', handleError)


/** Создание сервера **/

// const http = require('http')
//
// const PORT = 3000
//
// const server = http.createServer((req, res) => {
//     console.log('Server request')
//     console.log(req.url, req.method)
//
//     res.setHeader('Content-type', 'text/html')
//
//     res.write('<head><link rel="stylesheet" href="styles.css"></head>')
//
//     res.write('<h1>Hello Dimasic!</h1>')
//     res.write('<p>Perviy paragraph!</p>')
//     res.write('<p>Vtoroy paragraph!</p>')
//     res.end()
// })
//
// server.listen(PORT, 'localhost', (error) => {
//     error ? console.log(error) : console.log(`listening port ${PORT}`)
// })

// ####
// Возврат JSON
// ####


const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
    console.log('Server request')
    console.log(req.url, req.method)

    res.setHeader('Content-Type', 'application/json')

    const data = JSON.stringify([
        {name: 'Tommy', age: 35},
        {name: 'KakoitoChuvak', age: 40}
    ])

    res.end(data)
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

// ####

// const http2 = require('http'),
//     fs2 = require('fs'),
//     PORT2 = 3000
//
// fs2.readFile('./index.html', (err, html) => {
//     if (err) {
//         throw err
//     }
//
//     const server = http2.createServer((request, response) => {
//         console.log('Server request')
//         console.log(request.url, response.method)
//
//         response.setHeader('Content-type', 'text/html')
//         response.write(html)
//         response.end()
//     })
//
//     server.listen(PORT2, 'localhost', (error) => {
//         error ? console.log(error) : console.log(`listening port ${PORT2}`)
//     })
// })
