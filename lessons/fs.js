const fs = require('fs')
// const crossEnv = require('cross-env')
const path = require('path')
const { start } = require('repl')
console.log('START!')
// fs.mkdir(path.resolve(__dirname, 'dir'), (err)=>{

//     if(err){
//         console.log(err)
//         throw err
//     }
//     else{
//         console.log('Dir was created!')}
//     })
//     console.log('Finish!')

// fs.rmdir(path.resolve(__dirname, 'dir'), (err)=>{
//     if(err){
//         console.log(err)
//         throw err
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'dir.txt'), '1 2 3 4 5 SDASJKDJKA ' , (err)=>{
// if(err){
//     throw err
// }
// console.log('File was created!')
// fs.appendFile(path.resolve(__dirname, 'dir.txt'), 'Add new string', (err)=>{
//     if(err){
//         throw err
//     }
//     console.log('Added new string!')
// fs.appendFile(path.resolve(__dirname, 'dir.txt'), 'Add new string', (err)=>{
//     if(err){
//         throw err
//     }
//     console.log('Added one more string!')
// })
// })
// })
const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve()
        })
    })
}
const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve()
        })
    })
}
const readFileAsync = async (path) => {
    return new Promise((resolve, reject) =>
        fs.readFile(path, { encoding: 'utf-8' }, (err, string) => {
            if (err) {
                return reject(err.message)
            }
            resolve(string)
        })
    )
}
const rmFileAsync = async (path) => {
    return new Promise((resolve, reject) =>
        fs.rm(path, err => {
            if (err) {
                return reject(err.message)
            }
            resolve()
        })
    )
}


// writeFileAsync(path.resolve(__dirname, 'text.txt'), '12 3 4 5 6 ')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '123'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '345'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '678'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then(data => console.log(data))
//     .then(() => rmFileAsync(path.resolve(__dirname, 'text.txt')))
//     .catch(err => console.log(err))

// process.env.TEXT = "Alex Sklyar 1 2 3 4 5644 koko shanel Ambi5geak["

// const text = process.env.TEXT || '';



// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
// .then(()=>readFileAsync(path.resolve(__dirname, 'text.txt')))
// .then(data =>data.split(' ').length)
// .then(count=>writeFileAsync(path.resolve(__dirname, 'count.txt'), `Count of words is ${count}`))
// .then(()=>rmFileAsync(path.resolve(__dirname, 'text.txt')))

// console.log(process.env.TEXT)
