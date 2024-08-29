import PropTypes from "prop-types";
import { useState } from "react";



export default function TextForm(props){

    const handleUpClick = () => {
        console.log("upper case was clicked" +" " +":" +  text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log("upper case was clicked" +" " +":" +  text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
    const[text,setText] = useState('');
    return(
        <>
        <div className="container">
            <h1>{props.heading}</h1>
             <div className="mb-3">
              
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            
             </div>
             <button className="btn-btn-success mx-3" onClick={handleUpClick}>convert to the uppercase</button>
             <button className="btn-btn-success mx-3" onClick={handleLoClick}>convert to the Lowercase</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summery</h1>
            <p>{text.split("").length} words and {text.length} charchters</p>
            <p>{0.08*text.split("").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

TextForm.PropType = {
    heading : PropTypes.string.isRequired
};