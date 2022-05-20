import React,{useState} from 'react'
import '../App.css'
import Hoc from '../HOC/Hoc'
 function ToHindi(props) {

  const [text,setText] = useState('')
  const [LanguageCode,setLanguageCode] = useState('hi')
  let {final,ConvertToMotherLang} = props

  return (
    <div className="Style">
    <input
      type="text"
      value={text}
      placeholder="Convert To Hindi"
      onChange={(e) => {
        setText(e.target.value);
      }}
    />
    <p>{final.translatedText}</p>
    <button
      onClick={() => {
        ConvertToMotherLang(text,LanguageCode);
      }}
    >
      To Hindi
    </button>
  </div>
  )
}


export default Hoc(ToHindi);
