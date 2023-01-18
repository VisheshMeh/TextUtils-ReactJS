import React, {useState} from "react"
export default function Textform(props) 
{

    const handleUpClick = ()=>{
        //console.log("Upper Case Was Clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case" , "success");
    }
    const handleLowClick = ()=>{
        //console.log("Upper Case Was Clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case" , "success");
    }
        const handleOnChange = (event)=>{
            //console.log("On Change");
            setText(event.target.value)
    }
    const[text,setText] = useState('');
    //setText("new text")

    return (
        <>
        <div className="container"  style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
        </div>
        <div className="container"  style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
</>
    )
}
