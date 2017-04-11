import Component from 'inferno-component'
import './styles.css'

class NavigationBar extends Component {
  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <h1>{"Mark'd Up"}</h1>
            </a>
            <a className="nav-item is-tab is-hidden-mobile is-active">Home</a>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-tab">My Markdowns</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavigationBar
