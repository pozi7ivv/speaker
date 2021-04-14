import React, {useContext} from 'react'

import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from "./Pages/Home"
import {SimpleSpeak} from "./Pages/SimpleSpeak"
import {NavBar} from "./Components/NavBar"
import {About} from "./Pages/About"
import SpeechGame from "./Pages/SpeechGame"
import Test from "./Pages/Test"
import Context from "./Speech/language/languageContext";
import SpeechRead from "./Pages/SpeechRead";



function App() {

    const {state}=useContext(Context)
    let language=state.value

    return (
      <BrowserRouter>
          <NavBar />
               <div className='container pt-4 '>

                   <Switch>

                       <Route path={'/'} exact component={Home}/>
                       <Route path={'/simple'} component={SimpleSpeak}/>
                       <Route path={'/game'} component={SpeechGame({language})}/>
                       <Route path={'/read'} component={SpeechRead({language})}/>
                       <Route path={'/about'} component={About}/>
                       <Route path={'/test'} component={Test}/>
                   </Switch>
               </div>
      </BrowserRouter>
  )
}

export default App
