import App from './App'
import NoNav from './NoNav'

export default (props) => {
  console.log(window.location.pathname)
  if(window.location.pathname.match(/\/md\/[A-Za-z0-9]/)) {
    return <NoNav {...props} />
  } else {
    return <App {...props} />
  }
}
