const path = require('path');

// console.log(path.join(__dirname,'first', 'second', 'third'));
// console.log(path.resolve('first', 'second', 'third'))

const fullpath = path.resolve('first', 'second', 'third');
// console.log(path.parse(fullpath))
const siteURL = 'https://www.youtube.com/watch?v=243pQXC5Ebs'

const url = new URL(siteURL)

console.log(url.host)

