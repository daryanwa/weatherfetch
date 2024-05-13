import React, {ChangeEvent, useState, useEffect} from 'react'
import style from './weathercss.module.css'
import { TOption } from '../module/Weather'
import SearchComponent from './SearchComponent'
import useForecast from '../hooks/useForecast'





function WeatherComponent() {

    const  {option, forecast, value, inputChange, getForeCast, handlePressKey, city, optionSelect} = useForecast()

  return (
    <div onKeyDown={handlePressKey} >
        <div  >
           <div className={style.infoWrapper}><span className={style.Left}>Weather in </span> <br/>
           <input 
           className={style.inputCity}
           type='text' 
           value={value}
           onChange={inputChange}
           >
           </input> 
            <ul className={style.ulList}>
              {option.map((opt:TOption, index:number) => (
                opt.name ? (

                  <li key={opt.name + '-' + index} >
                <button className={style.liButton} tabIndex={0}  onClick={() => optionSelect(option[index])}>{opt.name}</button>

                </li>
                ) : null
              )
              )}
            </ul>
           </div>
           {
            forecast ? <SearchComponent forecast={forecast}     /> 
            :  ''}
        </div>
    </div>
  )
}

export default WeatherComponent