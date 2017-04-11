const dotenv = require('dotenv')
const path = require('path')
const http = require('http')

const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const koaRouter = require('koa-router')
const serve = require('koa-static')
const sendFile = require('koa-sendfile')

dotenv.config()

// Instantiate koa and koa-router
const app = new koa()
const router = koaRouter()

app.use(serve(path.join(__dirname, '../build')))

// Enable bodyparser and router
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

// Serve routes
require('./routes')(router)

app.use(async function (ctx, next) {
  await sendFile(ctx, path.join(__dirname, '../build/index.html'))
  await next()
})

const port = process.env.PORT || process.env.SERVER_PORT

app.listen(port, () => {
  console.log(`Available on http://localhost${ port }`)
})
