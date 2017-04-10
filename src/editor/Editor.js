import Component from 'inferno-component'
import Input from './Input'
import Preview from './Preview'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      document: ''
    }
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
      <div className="editor">
        <button onClick={this.createDocument}>Save</button>
        <Input onInput={this.onInput} value={document} />
        <Preview body={document} />
      </div>
    )
  }
}

export default Editor
