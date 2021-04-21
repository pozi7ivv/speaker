import React from 'react'
import * as data from '../Speech/data.json'
import Game from "../Speech/Exercise/Game";


export default function Test(){
    return <div> <Game pairs={data.es.pairs} langA={data.es.langA} langB={data.es.langB}/></div>
}