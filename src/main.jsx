import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./Data.js"
import {MainProduct} from "./App.jsx"


ReactDOM.createRoot(document.getElementById("main")).render(
  <React.StrictMode>
    <MainProduct />
  </React.StrictMode>
);
