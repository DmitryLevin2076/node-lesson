// File System
const fs = require('fs')
const path = require('path')

/** Создание папок **/
// // fs.mkdirSync() - синхронный метод
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     }
//
//     console.log('Папка создана!')
// })

/** Запись файлов **/
// const filePath = path.join(__dirname, 'test', 'text.txt')
//
// // fs.writeFileSync() - синхронный метод
// fs.writeFile(filePath, 'Hello NodeJS!', (err) => {
//     if (err) {
//         throw err
//     }
//
//     console.log('Файл создан!')
//
//     // .writeFile - Перетирает существующий файл
//     // fs.writeFile(filePath, '\nHello Again!', (err) => {
//     fs.appendFile(filePath, '\nHello Again!', (err) => {
//         if (err) {
//             throw err
//         }
//
//         console.log('Файл обновлен!')
//     })
// })


/** Чтение файлов **/

const filePath = path.join(__dirname, 'test', 'text.txt')

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }

    console.log('Content: ', content)

    // const data = Buffer.from(content)
    // console.log('Content: ', data.toString())


})
