import {useState} from "react"

const LanguageState=()=>{
    const [state, setState]=useState({value: 'es', list:[]})

    const actions=(action)=>{
        const {type,payload}=action
        switch(type){
            case 'setState': return setState(payload)
            default: return state
        }
    }
    return {state,actions}
}

export default LanguageState