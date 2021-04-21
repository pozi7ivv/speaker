import React from 'react'
import * as data from '../Speech/data.json'
import Game from "../Speech/Exercise/Game"

function SpeechGame({language}){

    const returnLanguage=()=>{
        switch(language){
            case 'es': return(
                <div> <Game pairs={data.es.pairs} langA={data.es.langA} langB={data.es.langB}/></div>
            )
                break
            case 'fr': return(
                <div> <Game pairs={data.fr.pairs} langA={data.fr.langA} langB={data.fr.langB}/></div>
            )
                break
            default: return <div><h1>This language so bad!</h1></div>
                break

        }
    }
    return returnLanguage
}
export default SpeechGame

