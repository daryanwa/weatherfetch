import React, { ChangeEvent } from 'react'
import { TForecast, TOption } from '../module/Weather'
import style from './searchinfo.module.css'
import icon  from '../icons/50d.png'
import t from '../icons/t.png'
import pressure from '../icons/pressure.png'
interface IWeatherProps {
    forecast: TForecast
}


function SearchComponent({forecast}: IWeatherProps) {
    



console.log(forecast)

  return (
    <div>
        <div className={style.blockWrapper} >
         {forecast.weather.map(t => 
            <div >
                <div className={style.blockContainer}>
                    <img style={{width: 100}} src={`http://openweathermap.org/img/w/${t.icon}.png`} alt='icon' /> <br />
                    {t.main} <br />
                    {t.description} <br />
                </div>
                
            </div>
          )}
          <div className={style.blockContainer}>
            <img style={{width: 80, marginBottom: 15, marginTop: 5}} src={t} /> <br />
           Feels Like:  {forecast.main.feels_like}° <br/>
           Temp: {forecast.main.temp}° <br />
           Max Temp: {forecast.main.temp_max}° <br />
           Min Temp: {forecast.main.temp_min}° <br />
           {/* Pressure: {forecast.main.pressure}Pa <br /> */}

          </div>
          <div className={style.blockContainer}>
            <img src={icon} /> <br />
           Gust:  {forecast.wind.gust} <br/>
           Speed: {forecast.wind.speed} <br />
           Degree: {forecast.wind.deg}
       

          </div>
          <div className={style.blockContainer}>
          <img style={{width: 130, marginTop: 10, marginBottom: 15}} src={pressure} /> <br/>
           Pressure: {forecast.main.pressure}Pa <br />

          </div>
            
      
        </div>
    </div>
  )
}

export default SearchComponent