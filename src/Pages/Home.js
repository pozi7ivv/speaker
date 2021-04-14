import React, {Fragment, useContext} from 'react'
import Select from "react-select"
import Context from "../Speech/language/languageContext"


const Home=()=>{

    const opt = [
        { value: 'fr', label: 'French' },
        { value: 'es', label: 'Spanish' }
    ]

    const {state, actions}=useContext(Context)

    class App extends React.Component {
        state = {
            selectedOption: null,
        }
        handleChange = selectedOption => {
            this.setState({ selectedOption })
            actions({type:'setState',payload:{...state, value:selectedOption.value}})
            alert(`Your language: ${selectedOption.label}`)
        }
        render() {
            const { selectedOption } = this.state
            let languageValue='es'
            if(state.value==='es')languageValue='Spanish'; else languageValue='French'
            return (
                <Select
                    value={state.value}
                    onChange={this.handleChange}
                    options={opt}
                    placeholder={languageValue}
                />
            )
        }
    }

    return(
        <Fragment>
            <h1 className={'wrapper'}>Speaker</h1>
            <App />
        </Fragment>
    )
}

export default Home