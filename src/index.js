import {BrowserRouter} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyCzna1-v6ZbfCdHh_EYXsHhqwjVIUYFM7Y",
  authDomain: "myecommerce-07.firebaseapp.com",
  projectId: "myecommerce-07",
  storageBucket: "myecommerce-07.appspot.com",
  messagingSenderId: "91009792561",
  appId: "1:91009792561:web:9fe87659d2f130a6147310"
};



initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
   <BrowserRouter>
    <App />
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
