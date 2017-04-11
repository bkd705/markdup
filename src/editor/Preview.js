import marked from 'marked'

const Preview = ({ body }) => (
  <div className="editor__preview">
    <h2 className="subtitle">Preview</h2>
    <div className="body content" dangerouslySetInnerHTML={ { __html: marked(body, { sanitize: true }) }}></div>
  </div>
)

export default Preview
