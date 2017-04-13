export function create(doc, user) {
  const headers = {}
  // Set authorization header, if available
  if (user) {
    headers['Authorization'] = 'Bearer ' + user.stsTokenManager.accessToken
  }

  // Set content type header
  headers['Content-Type'] = 'application/json'

  // Send request
  return fetch('http://localhost:8080/api/v1/markdowns', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ content: doc })
  })
  .then(res => res.json())
  .then(body => body)
}

export function show(id) {
  return fetch(`http://localhost:8080/api/v1/markdowns/${id}`)
    .then(res => res.json())
    .then(body => body)
}
