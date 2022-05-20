import React, { useEffect, useState } from "react";

function Hoc(OrignalCompo, data) 
{
    function Hoc(props){
      const [final, SetFinalData] = useState([]);
    
      async function ConvertToMotherLang(text,LanguageCode) {
        const res = await fetch("https://libretranslate.de/translate", {
          method: "POST",
          body: JSON.stringify({
            q: `${text}`,
            source: "en",
            target: `${LanguageCode}`,
            format: "text",
          }),
          headers: { "Content-Type": "application/json" },
        });
    
        SetFinalData(await res.json());
      }  
   

      // What ever chenges the HOC Doing we through it`s functionality 
      // We have to pass these changes to caller function
     

      return <OrignalCompo final={final} ConvertToMotherLang={ConvertToMotherLang} />
    }
  
    return Hoc
 
  
}
export default Hoc;
