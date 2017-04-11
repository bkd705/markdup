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
    console.log(this.state)
  }

  render() {
    const { document } = this.state
    return (
      <div className="editor-container">
        <button onClick={this.createDocument}>Save</button>
        <div className="editor">
          <Input onInput={this.onInput} value={document} />
          <Preview body={document} />
        </div>
      </div>
    )
  }
}

export default Editor
