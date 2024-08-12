import React, {useState} from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked + text");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success")
  }
  
    const handleLiClick = () => {
      //console.log("Uppercase was clicked + text");
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase!","success")
    }

    const handleClearClick = () => {
       // console.log("Uppercase was clicked + text");
        let newText =  "";
        setText(newText)
        props.showAlert("Your text is cleared!","success")
      }

      const handleCopy = () => {
        navigator.clipboard.writeText(text)
          .then(() => {
            console.log('Text copied to clipboard');
          })
          .catch(err => {
            console.error('Failed to copy text: ', err);
          });
          props.showAlert("Your text is copy on Clipboard!","success")
      };
     
      const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Converted to remove extra spaces!","success")
      }

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter text here2'); 

 return (
    <>
    <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? 'gray' : 'white'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-secondary mx-2" onClick={handleLiClick}>Convert to Lowercase</button>
      <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-warning mx-2" onClick={handleCopy}>Copy to Clip Board</button>
      <button className="btn btn-dark mx-2" onClick={handleClearClick}>Clear Text</button>
          
    </div>
    <div classNme="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
       <h2>Your text summary</h2>
       <p>{text.split ("") .length} words and {text.length} chracters </p>
       <p>{0.008 * text.split ("").length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text}</p>
    </div>
    </>
  );
} 