import { useEffect, useState, ChangeEvent } from "react"
import style from './weathercss.module.css'
import { TForecast, TOption } from '../module/Weather'



 const useForecast = () => {
    let [value, setValue] = useState<string>('')
    let [city, setCity] = useState<TOption | null>(null)
    let [option, setOption] = useState<any[]>([])
    let [forecast, setForecast] =useState<TForecast | null > (null)

    const apikey = 'cccbfcdb7018879340e2af02ff369380'

    const inputChange = (e:ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.trim()
        setValue(term)
        if(term === '') return
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${apikey}`)
        .then(res => res.json())
        .then(data => setOption([data]))
    }

    const optionSelect = (opt: TOption) => {
      setCity(opt)
    }
   

useEffect(() =>{
  if(city){
    setValue(city?.name)
    setOption([])
  }
} , [city])


const getForeCast = (city: TOption) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.coord.lat}&lon=${city.coord.lon}&units=metric&appid=${apikey}`)
  .then(res => res.json())
  .then(data => 
    setForecast(data))
    
  
}

const handlePressKey: React.KeyboardEventHandler<HTMLElement> = (e) => {

  if (!city || !value) return;
  if (e.key === 'Enter') {
    e.preventDefault();
    getForeCast(city);

  }
};
return {
    option, forecast, value, inputChange, getForeCast, handlePressKey, city, optionSelect
}
}

export default useForecast