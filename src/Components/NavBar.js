import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import Context from "../Speech/language/languageContext";
import Select from "react-select";


export const NavBar=()=> {

    const opt = [
        {value: 'fr', label: 'French'},
        {value: 'es', label: 'Spain'}
    ]

    const {state, actions} = useContext(Context)

    class App extends React.Component {
        state = {
            selectedOption: null,
        }
        handleChange = selectedOption => {
            this.setState({selectedOption})
            actions({type: 'setState', payload: {...state, value: selectedOption.value}})

            alert(`Your language: ${selectedOption.label}`)

        }

        render() {
            const {selectedOption} = this.state

            return (
                <Select
                    className={'select'}
                    value={state.value}
                    onChange={this.handleChange}
                    options={opt}
                    placeholder={state.value}
                />
            )
        }
    }
    return(
    <nav className={"navbar navbar-dark navbar-expand-lg bg-primary"}>
        <div className="container-fluid">
            <a className="navbar-brand nav" href="/">Speaker</a>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/simple">SimpleSpeak</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/game">Game</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/read">ReadText</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/test">Test</NavLink>
                    </li>

                </ul>
            </div>
            <div>
                <App/>
            </div>

        </div>
    </nav>)
}