// Import node modules
const jwt = require('jsonwebtoken')
const admin = require('firebase-admin')

// Import config
const serviceAccount = require('../config/serviceAccount.json')

// Import utilities
const SendError = require('../util/SendError')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://markdup-7ae77.firebaseio.com/"
})

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

    const payload = await admin.auth().verifyIdToken(token)
    if (!payload) {
      ctx.state.user = { error: 'Invalid payload' }
      await next()
      return
    }

    ctx.state.user = payload
    await next()
  } catch (err) {
    let error = 'INTERNAL_SERVER_ERROR'
    let data = null

    if (err.errors) {
      error = 'VALIDATION_ERROR'

      for (let key in err.errors) {
        let msg = err.errors[key].message
        data = msg.substring(msg.indexOf("Path") + 5)
        break;
      }
    }

    SendError(ctx, 400, error, data)
  }
}
