import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("success","Converted to Uppercase");
    }

    const handleLowClick = () => {
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("success","Converted to Lowercase");

    }

    const handleClearClick = () => {
        console.log("Clear text was clicked " + text);
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("onchange clicked");
        setText(event.target.value);
    }

    const handleCopy = () => {
        console.log("copy clicked");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("success","text copied!!");

    }

    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }

    
    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UPPERCASE</button>
                <button disabled={text.length===0} type="submit" className="btn btn-primary mx-3 my-1" onClick={handleLowClick}>lowercase</button>
                {/* <button disabled={text.length===0} type="submit" className="btn btn-primary mx-3" onClick={handleLowClick}>Download text</button> */}
                <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            <div className='my-4' style={{color:props.mode==='dark'?'white':'black'}}>
                <h3>Your text summary</h3>
                <p>You have typed {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0? text:"Nothing to preview "}</p>
            </div>
        </>
    )
}
