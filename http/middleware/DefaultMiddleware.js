// Import node modules
const jwt = require('jsonwebtoken')

// Import utilities
const SendError = require('../util/SendError')

module.exports = async (ctx, next) => {
  try {
    const authorization = ctx.headers.authorization

    // Verify the authorization is present
    if (!authorization) {
      ctx.state.user = { error: 'No authorization header provided' }
      await next()
      return
    }

    // Verify the authorization is in the correct format
    const token = authorization.split(' ')[1]
    if (!token || token.length == 0) {
      ctx.state.user = { error: 'Invalid authorization token' }
      await next()
      return
    }

    // Verify and decode the token
    let payload = null
    try {
      payload = jwt.verify(token, process.env.AUTH0_CLIENT_SECRET)
    } catch (ex) {
      let error = 'An unhandled error has ocurred'

      if (ex.name === 'TokenExpiredError') {
        error = 'Token provided has expired'
      } else if (ex.name === 'JsonWebTokenError' && ex.message === 'invalid signature') {
        error = 'Invalid token'
      }

      ctx.state.user = { error: error }
      await next()
      return
    }

    ctx.state.user = payload
    await next()
  } catch (err) {
    console.log(err)
  }
}
