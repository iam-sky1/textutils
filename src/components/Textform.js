import React, {useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState('');
    const handleUpClick = ()=>{
        //console.log("uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowClick = ()=>{
        //console.log("uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handlerevClick = ()=>{
        //console.log("uppercase was clicked"+ text);
        let newText=text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Reversed the string","success");
    }
   
    const handleOnChange = (event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
    const handleExtraSpaces=()=> {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed!","success");
    }
    const handleCopy =()=> {
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Content copied successfully!","success");
    }
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handlerevClick}>reverse the string</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove extra spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>copy the text</button>
    </div>
    <div className="container my-4"style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p> {text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008*text.split(' ').length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something in the text box to preview it here"}</p>
    </div>
    </>
  )
}
