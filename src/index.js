import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import languageState from "./Speech/language/languageState";
import Context from "./Speech/language/languageContext";

const Index=()=>{
    const store=languageState()
    return(
        <Context.Provider value={store}>
            <App />
        </Context.Provider>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
