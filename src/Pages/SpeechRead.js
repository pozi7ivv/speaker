import React,{Fragment} from 'react'
import ReadText from "../Speech/Exercise/ReadText";
import * as data from "../Speech/data.json";

const SpeechRead=({language})=>{

    const returnLanguage=()=>{
        switch(language){
            case 'es': return(
                <div> <ReadText pairs={data.es.pairs} langA={data.es.langA} langB={data.es.langB}/></div>
            )
                break
            case 'fr': return(
                <div> <ReadText pairs={data.fr.pairs} langA={data.fr.langA} langB={data.fr.langB}/></div>
            )
                break
            default: return <div><h1>This language so bad!</h1></div>
                break

        }
    }
    return returnLanguage
}
export default SpeechRead

