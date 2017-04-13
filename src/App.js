import Component from 'inferno-component'

import NavigationBar from './navigation/NavigationBar'

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <NavigationBar /> */}

        <div className="body-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
