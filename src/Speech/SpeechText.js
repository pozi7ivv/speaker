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
        //input.bind.value=transcript
       return SpeechRecognition.stopListening
        input.bind.value=transcript
    }

    return(
        <div className="container 1div">


                <form onSubmit={submitHandler}>
                    <button onClick={startRecord()}>Start listening</button>
                    <button onClick={stopRecord()}>Stop listening</button>



                <input className={"input-group-text"} {...input.bind} placeholder={"Enter text..."}/>
                <button className={"btn-sm btnn"} onClick={sayHello}>Say</button>
                </form>
        </div>
    )
}

export default SpeechText