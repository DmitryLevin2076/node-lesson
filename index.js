const http = require('http')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const filePath = path.join(__dirname, 'public', 'index.html')

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err) {
    //             throw err
    //         }
    //
    //         res.writeHead(200, {
    //             // 'Content-Type' : 'text/plain'
    //             'Content-Type': 'text/html'
    //         })
    //         res.end(data)
    //     })
    // } else if (req.url === '/contact') {
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
    //         if (err) {
    //             throw err
    //         }
    //
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         res.end(data)
    //     })
    // }

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = "text/javascript"
            break
        default:
            contentType = 'text/html'
            break
    }

    if (!ext) {
        filePath += '.html'
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content)
        }
    })

    console.log('Текущий url', req.url)
})

const PORT = process.env.PORT || 3000
gitl
server.listen(PORT, () => {
    console.log(`Server has been started on ${chalk.blue(PORT)}...`)
})

