import React from 'react';

import './App.css';
import WeatherComponent from './components/WeatherComponent';
import SearchComponent from './components/SearchComponent';
import style from '../src/components/weathercss.module.css'



function App() {
  return (
    <div className={style.mainBKG}>
      <WeatherComponent />
      
    </div>
  );
}

export default App;
