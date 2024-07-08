import React, { useState } from 'react'

export default function TextForm() {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        console.log("handleUpClick");
        setText(text.toUpperCase());
        // setText("You have clicked Up case butn");
    }
    const handleOnChange = (event) => {
        console.log("handleOnChange");
        setText(event.target.value);

    }
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h3 className='my-3'>Write Freely: </h3>
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" placeholder="Enter text here..." ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Capitalize All</button>
            </div>
            <div className="container">
                <h3 className='my-3'>Your Text Summary: </h3>

                <div className="card ">
                    <div class="card-body"><p> <strong>{text.split(' ').length} </strong>words   <strong>{text.length} </strong>characters <strong>{0.008 * text.split(' ').length} </strong>WPM </p></div>
                </div>
            </div>
        </>
    )
}
