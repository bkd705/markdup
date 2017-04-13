import Component from 'inferno-component'
import Preview from '../editor/Preview'
import * as api from '../api'
import './viewer.css'

class Viewer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markdown: {},
      isLoading: true
    }
  }

  componentDidMount() {
    if(this.props.params.id) {
      api.show(this.props.params.id)
        .then(res => {
          this.setState({
            markdown: res.data.markdown,
            isLoading: false
          })
        })
        .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <div className="container">
        <div className="viewer">
          { this.state.isLoading || <Preview body={this.state.markdown.content} /> }
        </div>
      </div>
    )
  }
}

export default Viewer
