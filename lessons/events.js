const Emitter = require('events');

const emitter = new Emitter();

emitter.on('message', (data, second, third)=>{
    console.log(`U send a message: ` + data)
    console.log(`second agrh: ` + second)
})
// process.env.MESSAGE = "Hello NodeJs!"
const MESSAGE = process.env.MESSAGE || '';

if(MESSAGE){
    emitter.emit('message', MESSAGE, 123)
} else{
    emitter.emit('message', 'U don`t enter the message')
}