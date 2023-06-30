import "../style/general.css";
import "../style/main.css";
import React from "react";
function Main() {
  let [Text, setText] = React.useState("ALYSSA JOY FLORES IS MY BEBE LOVES AND I LOVE THIS PERSON VERY VERY MUCH UGH.");

  function handleInputChange(event) {
    setText(event.target.value);

  }
  let [uppercase, setUppercase] = React.useState(false);
  let [lowercase, setLowercase] = React.useState(false);
  let [italic, setItalic] = React.useState(false);
  let [bold, setBold] = React.useState(false);
  function UpperCase() {
    setUppercase((preval) => !preval);
  }
  function Italic() {
    setItalic((preval) => !preval);
  }
  function Bold() {
    setBold((preval) => !preval);
  }
  function Lowercase() {
    setLowercase((preval) => !preval);
  }
  function Clear() {
    setText("");
  }
  function ApplyFormating() {
    let formatteTxt = Text;
    formatteTxt = uppercase ? formatteTxt.toUpperCase() : formatteTxt;
    formatteTxt = lowercase ? formatteTxt.toLowerCase() : formatteTxt;
    formatteTxt = bold ? <b>{formatteTxt}</b> : formatteTxt;
    formatteTxt = italic ? <i>{formatteTxt}</i> : formatteTxt;

    return formatteTxt;
  }
  const formatteTxt =  ApplyFormating()

  return (
    <main className="main-container">
      
      <div className="main-item-1">
      <div className="btn-container">
        <button className={italic ? 'active' :  ''} onClick={Italic}>
            <i className="fa-solid fa-italic"></i>
          </button>
          <button className={bold ? 'active' :  ''} onClick={Bold}>
            <i className="fa-solid fa-bold"></i>
          </button>
          <button className={lowercase ? 'active' :  ''} onClick={Lowercase}>
          <i className="fa-solid fa-up-long fa-rotate-180"></i> T
          </button>
          <button className={uppercase ? 'active' :  ''} onClick={UpperCase}>
          <i className="fa-solid fa-up-long"></i> T
          </button>
          <button onClick={ Clear}>
          <i className="fa-solid fa-c"></i>
          </button>
        </div>
        <textarea
          placeholder="Type Anything"
          onChange={handleInputChange}
        ></textarea>
        <div>
         
        </div>
      </div>
      <div className="main-item-2">
        <p> {formatteTxt}</p>
      </div>
    </main>
  );
}

export default Main;
