import React, { useState } from "react"

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("uppercase function has been clicked." + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted in uppercase successfully.", "success");
  }
  const handleLowClick = () => {
    // console.log("uppercase function has been clicked." + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted in lowercase successfully.", "success");
  }
  const handleClearClick = () => {
    // console.log("uppercase function has been clicked." + text);
    let newText = "";
    setText(newText);
    props.showAlert("Textarea is cleared.", "warning");
  }
  const handleOnChange = (event) => {
    // console.log("handelOnChange method.");
    setText(event.target.value)
  }

  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard successfully.", "info");
  }

  const handleRESClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState('')
  return (
    <>
      <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="my-3">
          <h3>{props.heading}</h3>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="5"></textarea>
        </div>
        <div className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</div>
        <div className="btn btn-info mx-2" onClick={handleLowClick}>Convert to Lowercase</div>
        <div className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</div>
        <div className="btn btn-dark mx-2" onClick={handleCopyClick}>Copy Text</div>
        <div className="btn btn-warning mx-2" onClick={handleRESClick}>Remove Extra Spaces</div>

        <div className="my-3">
          <h3>Text Summary</h3>
          <p><b>{text.split(" ").length} Words</b>  <b>{text.length} Characters</b></p>
          <p>{0.008 * text.split(" ").length} Minutes to read</p>

          <h3>Textarea Preview</h3>
          <p>{text.length > 0 ? text : 'Enter text to see the preview'}</p>
        </div>
      </div>
    </>
  )
}