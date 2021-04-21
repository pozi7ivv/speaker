import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import {useState} from 'react'

function useInputValue(defaultValue=''){
    const [value,setValue]=useState(defaultValue)
    return {
        bind:{
            value,
            onChange: event=>setValue(event.target.value)
        },
        clear:()=>setValue(''),
        value:()=>value
    }
}

function submitHandler(event){
    event.preventDefault()
}

function SpeechText(){

    let {transcript, resetTranscript} = useSpeechRecognition()

    const synth = React.useRef(window.speechSynthesis)

    const input=useInputValue()

    function sayHello(){
        const say=new SpeechSynthesisUtterance(input.value())
        say.rate=1.5
        synth.current.speak(say)
    }

    function startRecord(){
       return SpeechRecognition.startListening
    }

    function stopRecord(){
       return SpeechRecognition.stopListening
    }

    return(
        <div className="container 1div">

        <div>
                <form onSubmit={submitHandler}>
                    <h2>Say something...</h2>
                    <button onClick={startRecord()}>Start listening</button>
                    <button onClick={stopRecord()}>Stop listening</button>
                    <br/><br/>
                    <input className={"input-group-text"} value={transcript}></input>
                </form>
            <br/>
        </div>
                <h2>Enter something...</h2>
                <input className={"input-group-text"} {...input.bind} placeholder={"Enter text..."}/>
                <br/>
                <button className={"btn-sm btnn"} onClick={sayHello}>Say</button>

        </div>
    )
}

export default SpeechText