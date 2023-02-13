const PORT = process.env.PORT || 5000
const Aplication = require('./framework/Aplication')
const Router = require('./framework/Router')


const app = new Aplication()

const router = new Router()

router.get('/users', (req,res)=>res.end('You send request to /users')
)
router.get('/posts', (req,res)=>res.end('You send request to /posts')
)

app.addRouter(router)

app.listen(PORT, ()=>console.log(`Server was runing on ${PORT} port...`))