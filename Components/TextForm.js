import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        console.log("handleOnChange fires when the text is being entered into the text box and sets value for current text");
        setText(event.target.value);

    }
    const handleToggleCase = () => {
        console.log("handleToggleCase");
        if (text) {
            setText(text === text.toLowerCase() ? text.toUpperCase() : text.toLowerCase());
            props.showAlert('Text Toggled!', 'success');
        }
        else {
            props.showAlert('No Text to Toggle!', 'warning');
        }
    }
    const handleCopy = () => {
        console.log("handleCopy");
        // let tex = document.getElementById('myBox');
        if (text) {
            // text.select();
            navigator.clipboard.writeText(text); //tex.value instead of text
            document.getSelection().removeAllRanges();
            props.showAlert('Text Copied!', 'success');
        } else {
            props.showAlert('No Text to Copy!', 'warning');
        }
    }
    const handleClearText = () => {
        console.log("handleClearText");
        if (text) {
            setText('');
            props.showAlert('Text Cleared!', 'success');
        } else {
            props.showAlert('No Text to Clear!', 'warning');
        }
    }
    const removeExtraSpaces = () => {
        if (text) {
            let newtx = text.split(/[ ]+/);
            setText(newtx.join(" "))
            props.showAlert('Extra Spaces Removed!', 'success');
        } else {
            props.showAlert('No Text!', 'warning');
        }
    }

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h3 className='my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Write Freely: </h3>
                    <textarea className="form-control" onChange={handleOnChange} value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#8080804f', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="8" placeholder="Enter text here..." ></textarea>
                </div>
                <div className="container">
                    <button className="btn btn-primary mx-2 my-1" onClick={handleToggleCase}>Toggle Case</button>
                    <button className="btn btn-primary mx-2 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-secondary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-warning mx-2 my-1" onClick={handleClearText}>Clear Text</button>
                </div>

            </div>
            <div className="container">
                <h3 className='my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Your Text Summary: </h3>

                <div className="card " style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}>
                    <div class="card-body"><p> <strong>{text.split(' ').filter((element) => { return element.length !== 0 }).length} </strong>words   <strong>{text.length} </strong>characters <strong>{0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} </strong>WPM </p></div>
                </div>
            </div>
        </>
    )
}
