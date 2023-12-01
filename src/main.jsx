import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//Para que funcione React BS tenemos que importar el estilo a main: 
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
