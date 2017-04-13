import Component from 'inferno-component'
import { browserHistory as history } from '../config/routes'
import Input from './Input'
import Preview from './Preview'
import HelpText from './HelpText'
import * as api from '../api'
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
    const user = this.getUser()

    api.create(this.state.document, user)
      .then(res => {
        const id = res.data.markdown._id
        history.push(`/md/${id}`)
      })
      .catch(err => console.log(err))
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
