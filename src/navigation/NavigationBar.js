import Component from 'inferno-component'
import './styles.css'

import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDQ7i1zTwVSJKIslqP4shLTXJCavFQFK0A",
  authDomain: "markdup-7ae77.firebaseapp.com",
  databaseURL: "https://markdup-7ae77.firebaseio.com",
  projectId: "markdup-7ae77",
  storageBucket: "markdup-7ae77.appspot.com",
  messagingSenderId: "939023654647"
}

class NavigationBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
      user: null
    }
  }

  componentDidMount() {
    firebase.initializeApp(config);

    // Get firebase localStorage
    let userObj = null
    for (let key in localStorage) {
      if (key.indexOf('[DEFAULT]') > -1) {
        userObj = localStorage.getItem(key)
        break;
      }
    }

    // Update state
    if (userObj) {
      this.setState({
        loggedIn: true,
        user: userObj
      })
    }
  }

  loginGithub = () => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        this.setState({
          loggedIn: true
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  logout = () => {
    firebase.auth().signOut()
      .then(() => {
        this.setState({
          loggedIn: false
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    let navRight = (
      <div className="nav-right nav-menu">
        <a onClick={this.loginGithub} className="nav-item is-tab">Login</a>
      </div>
    )

    if (this.state.loggedIn) {
      navRight = (
        <div className="nav-right nav-menu">
          <a className="nav-item is-tab">My Markdowns</a>
          <a onClick={this.logout} className="nav-item is-tab">Logout</a>
        </div>
      )
    }

    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <h1>{"Mark'd Up"}</h1>
            </a>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          {navRight}
        </div>
      </nav>
    )
  }
}

export default NavigationBar
