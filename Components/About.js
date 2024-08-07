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
            <strong>Accordion Item #1</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Accordion Item #2 </strong> 
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong> Accordion Item #3 </strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
