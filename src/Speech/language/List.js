import React, {useContext} from "react"

import Context from "./languageContext"

const List=()=>{
    const {state}=useContext(Context)

    return state.value
}
export default List