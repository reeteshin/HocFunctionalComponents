import React, { useEffect, useState } from "react";
import "../App.css";
import Hoc from "../HOC/Hoc";
function ToFrench(props) {
  
  const [text,setText] = useState('')
  const [LanguageCode,setLanguageCode] = useState('fr')
  let {final,ConvertToMotherLang} = props
  return (
    <div className="Style">
      <input
        type="text"
        value={text}
        placeholder="Convert To French"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>{final.translatedText}</p>
      <button
        onClick={() => {
          // this is Hoc Function We Are getting this through Props
          ConvertToMotherLang(text,LanguageCode);
        }}
      >
        To French
      </button>
    </div>
  );
}
 
export default Hoc(ToFrench);
