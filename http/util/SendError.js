const JRes = require('./JResponse')

module.exports = (response, status, error, data = null) => {
  response.status = status

  if (!data) {
    response.body = JRes.failure(error)
  } else {
    response.body = JRes.failure(error, data)
  }
}
