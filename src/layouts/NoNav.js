import Component from 'inferno-component'
import { Link } from 'inferno-router'
import './layouts.css'

class NoNav extends Component {
  render() {
    return (
      <div className="app">
        <div className="body-container">
          <div className="container meta-container">
            <p>
              Posted using <Link to="/">Mark'd Up</Link>
              <div className="is-pulled-right">
                <button className="button">Share</button>
              </div>
            </p>
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default NoNav
