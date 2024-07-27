import React, { useState } from 'react'

export default function About(props) {
  let myStyle = {
    color : props.mode === 'dark'?'white':'black',
    backgroundColor : props.mode === 'dark'?'rgb(78 88 99 )':'white',
  }
  // const [myStyle, setmyStyle] = useState({
  //   color: 'white',
  //   backgroundColor: 'black'
  // })
  // const [btnText, setbtnText] = useState("Enable Dark Mode")
  
  // const toggleTheme = () =>{
  //   if(myStyle.color === 'white' ){
  //     setmyStyle({color: 'black',
  //       backgroundColor: 'white'})
  //       setbtnText("Enable Dark Mode");
  //   }
  //   else{
  //     setmyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border : '1px solid white'
  //     })
  //     setbtnText("Enable Light Mode");

  //   }

  // } 
  return (
    <div className='container my-3' >
      <h1 style = {{ color: props.mode === 'dark'?'white':'black'}}>About US</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <strong>What is this website?</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Purpose is to create a word couter website </strong>
               it is a text counter website provides excellent feautures to convert text toggle case, remove extra space, clear text, copy text, also allows to set dark mode.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>What technologies are used in creating it?</strong> 
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>React JS</strong> is used to design this Single page application.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong> Any Updates Coming?</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Pull Requests are accepted.</strong> If you want to collaborate on this project to practice your skills, go ahead.
            </div>
          </div>
        </div>
      </div>
      {/* <div className=' my-3'>
        <button className='btn btn-primary' onClick={toggleTheme}>
          {btnText}
        </button>
      </div> */}

    </div>
  )
}
