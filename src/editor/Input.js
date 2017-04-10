const Input = ({ onInput, value }) => (
  <div className="editor__input">
    <h2 className="subtitle">Editor</h2>
    <textarea
      name="document"
      value={value}
      onInput={onInput}
      placeholder="Enter your text..."
      autoFocus
    >{value}</textarea>
  </div>
)

export default Input
