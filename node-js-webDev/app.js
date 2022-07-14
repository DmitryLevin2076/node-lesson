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

const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
    console.log('Server request')
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})





