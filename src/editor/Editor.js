import Component from 'inferno-component'
import Input from './Input'
import Preview from './Preview'
import HelpText from './HelpText'
import './editor.css'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      document: ''
    }
  }

  componentDidMount() {
    this.setState({
      document: HelpText.text
    })
  }

  onInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  createDocument = () => {
    const headers = {}
    const user = this.getUser()

    // Set authorization header, if available
    if (user) {
      headers['Authorization'] = 'Bearer ' + user.stsTokenManager.accessToken
    }

    // Set content type header
    headers['Content-Type'] = 'application/json'

    // Send request
    fetch('http://localhost:8080/api/v1/markdowns', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ content: this.state.document })
    })
    .then(res => res.json())
    .then(body => {
      console.log(body)
    })
    .catch(error => {
      console.log(error)
    })
  }

  shareDocument = () => {
    console.log(this.state)
  }

  getUser() {
    let userObj = null
    for (let key in localStorage) {
      if (key.indexOf('[DEFAULT]') > -1) {
        userObj = JSON.parse(localStorage.getItem(key))
        break;
      }
    }

    return userObj
  }

  render() {
    const { document } = this.state
    return (
      <div className="editor-container">
        <div className="button-bar">
          <a onClick={this.createDocument} className="button">Save</a>
          <a onClick={this.shareDocument} className="button">Share</a>
        </div>

        <div className="editor">
          <Input onInput={this.onInput} value={document} />
          <Preview body={document} />
        </div>
      </div>
    )
  }
}

export default Editor
