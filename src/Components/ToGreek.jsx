import React,{useState} from 'react'
import '../App.css'
import Hoc from '../HOC/Hoc'
function ToGreek(props) {

  const [text,setText] = useState('')
  const [LanguageCode,setLanguageCode] = useState('el')
  let {final,ConvertToMotherLang} = props

  return (
    <div className="Style">
    <input
      type="text"
      value={text}
      placeholder="Convert To Greek"
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
      To Greek
    </button>
  </div>
  )
}

export default Hoc(ToGreek);

// const res = await fetch("https://libretranslate.de/translate", {
// 	method: "POST",
// 	body: JSON.stringify({
// 		q: "go",
// 		source: "en",
// 		target: "hi",
// 		format: "text"
// 	}),
// 	headers: { "Content-Type": "application/json" }
// });

// console.log(await res.json());