import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import App from './App.js';
import RouteElement, {formNames, NoPage} from './views/Route/HandleRutes.js';

import "bootstrap/dist/css/bootstrap.min.css";
import './style/utiles.css';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App/>}/>
          {formNames.map(form => {
            console.log(form)
            return <Route key={form + "-id"} path={form} element={<RouteElement formName={form}/>}/>
          })}
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
