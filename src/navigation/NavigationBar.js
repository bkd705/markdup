import Component from 'inferno-component'
import WithAuth from '../auth/WithAuth'
import './styles.css'

class NavigationBar extends Component {
  render() {
    const { loggedIn, logout, loginGithub } = this.props
    let navRight = (
      <div className="nav-right nav-menu">
        <a onClick={loginGithub} className="nav-item is-tab">Login</a>
      </div>
    )

    if (loggedIn) {
      navRight = (
        <div className="nav-right nav-menu">
          <a className="nav-item is-tab">My Markdowns</a>
          <a onClick={logout} className="nav-item is-tab">Logout</a>
        </div>
      )
    }

    return (
      <nav className="nav">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <h1>Mark'd Up</h1>
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

export default WithAuth(NavigationBar)
