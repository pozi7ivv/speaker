import React from "react"
import random from "../../Utils/Random";

function ReadText({ pairs, langA, langB }){

    const synthRef = React.useRef(window.speechSynthesis);
    const [langAVoices, setLangAVoices] = React.useState([])
    const [langBVoices, setLangBVoices] = React.useState([])
    const [langAVoice, setLangAVoice] = React.useState(null)
    const [langBVoice, setLangBVoice] = React.useState(null)
    const [current, setCurrent] = React.useState(null)
    const [choices, setChoices] = React.useState([])
    const [selected, setSelected] = React.useState({})

    React.useEffect(() => {
        setTimeout(() => {
            const voices = synthRef.current
                .getVoices()
                .filter((voice) => !voice.name.includes("Google"))

            const filteredA = voices.filter(
                (voice) => voice.lang.substr(0, 2) === langA.code
            );
            setLangAVoices(filteredA)
            setLangAVoice(random(filteredA))

            const filteredB = voices.filter(
                (voice) => voice.lang.substr(0, 2) === langB.code
            )
            setLangBVoices(filteredB)
            setLangBVoice(random(filteredB))
        }, 100)
    }, [])

    const isMatch = (valueA, valueB) =>
        pairs.some(
            ([choiceA, choiceB]) =>
                (choiceA === valueA && choiceB === valueB) ||
                (choiceA === valueB && choiceB === valueA)
        )

    function clickSay(){

    }

    return(
        <div>
            <button onClick={clickSay}
            >Say</button>
            <br /><br />
            <form>
            <input type={'text'}/>
            <button type={'onSubmit'}>Yes</button>
            </form>
        </div>
    )
}

export default ReadText