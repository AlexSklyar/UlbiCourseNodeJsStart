const os = require('os');
const cluster = require('cluster')
const cpus = os.cpus()
// console.log(os.cpus().length)

if(cluster.isMaster){
for(i=0; i<cpus.length-2; i++){
    cluster.fork()
    }
cluster.on('exit', (worker, code, signal)=>{
    console.log(`Worker with pid= ${worker.process.pid} was killed`)
    if(code){
        cluster.fork()
    } else{
        console.log('Worker was dead...')
    }
})
}
else{
console.log(`Worker with pid= ${process.pid} was started`)
setInterval(()=>{
    console.log(`Worker with pid= ${process.pid} still worked`)
},5000)
}
