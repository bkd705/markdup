const MarkdownController = require('./controllers/MarkdownController')
const DefaultMiddleware = require('./middleware/DefaultMiddleware')

module.exports = (router) => {
  router.post('/api/v1/markdowns', DefaultMiddleware, MarkdownController.create)
  router.get('/api/v1/markdowns/:id', DefaultMiddleware, MarkdownController.find)
  router.put('/api/v1/markdowns/:id', DefaultMiddleware, MarkdownController.update)
  router.delete('/api/v1/markdowns/:id', DefaultMiddleware, MarkdownController.destroy)
}
