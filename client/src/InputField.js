import React, {useState} from 'react'

function InputField(props) {
  const [input, setInput] = useState('')
  handleInput = (e) =>{
    const data = this.inputData.current.value
  }
  return (
    <div>
      <div>{this.getLatestBlock().data}</div>
      <input
        type="text"
        required
        value={input}
        onChange={(e) => setInput(e.target.value)}
         />
      <button onClick={this.handleInput}>Add Block</button>
    </div>
  );
}

export default InputField;
