import React from 'react'
/* import ReactDOM from 'react-dom/client'*/
import App from './App'

import { render } from "react-dom";
import './styles/global.css';
/*
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)*/
const root = document.getElementById("root");
render(<App />, root);