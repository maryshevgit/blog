import React from "react";
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter/AppRouter";
import './scss/index.scss'

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
