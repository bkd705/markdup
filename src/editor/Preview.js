import marked from 'marked'

const Preview = ({ body }) => (
  <div className="editor__preview">
    <div className="body content" dangerouslySetInnerHTML={ { __html: marked(body, { sanitize: true }) }}></div>
  </div>
)

export default Preview
