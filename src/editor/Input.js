const Input = ({ onInput, value }) => (
  <div className="editor__input">
    <textarea
      name="document"
      value={value}
      onInput={onInput}
    >{value}</textarea>
  </div>
)

export default Input
