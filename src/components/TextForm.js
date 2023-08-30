import React, { useState } from "react"; //useState is a Hook which is used to make state variable

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase has clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoClick = ()=>{
    // console.log("Lowercase has clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleClearClick = ()=>{
    // console.log("clear text");
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!", "success");
  }
  const handleSpeak = ()=>{
    // console.log("speak text");
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toggle = document.getElementById('toggle')
    if(toggle.textContent === "Speak"){
      toggle.innerHTML = "Stop"
    } else {
      toggle.innerHTML = "Speak"
      if(toggle.innerHTML){
        window.speechSynthesis.cancel();
      }
    }
  }
  const handleCopy = () => {
    //console.log("copy the text")
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value); //only for desktop
    setcpyText("Copied");
    props.showAlert("Copied to Clipboard!", "success");
    
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); //regex
    setText(newText.join(" "));
    props.showAlert("Extra space removed from the text!", "success");
  }
  

  const handelOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value); //user can write in textarea
    setcpyText("Copy");
  }

  //state variable //function to update text //default value
  const [text, setText] = useState(''); //array destructuring syntax(using text variable and updating from setText function)
  // setText("new value of text"); //correct way to change the state
  // text = "new text"; //wrong way to change the state

  const [cpyText, setcpyText] = useState("Copy");

  return (
    <>
        <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white' }}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'rgb(123 110 110)', color: props.mode === 'light' ? 'black' : 'white'
         }} id="myBox" placeholder="Enter text here" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" id="toggle" onClick={handleSpeak}>Speak</button>
      <button className="btn btn-primary mx-2" onChange={handelOnChange} onClick={handleCopy}>{cpyText}</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      
    </div>
    <div className="container my-3"style={{color: props.mode === 'light' ? 'black' : 'white' }}>
      <h2>Your text summary</h2>
      <p></p>
      <p>{text.trim() === ""?0:text.trim().split(" ").length} words and {text.length} characters</p>
      {/* time to read text. 0.008 min is the time to read one word */}
      <p>{text.trim() === ""?0:text.trim().split(" ").length * 0.008} Minutes read</p>
      <h2>Preview</h2> 
      <p>{text.length>0?text: "Enter your text above to preview here"}</p>
    </div>
    </>
  
  );
}

//Advantages of Hooks and states is JS works without reloading the page.
