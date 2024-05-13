
export type TOption = {
    name: string
    coord: {

        lon: number
        lat: number
    }
}

export type TForecast = {
  
  
    name: string
    sunrise: number
    sunset: number

            dt:number
            main: {
                feels_like: number
                humidity: number
                pressure: number
                temp: number
                temp_max: number
                temp_min: number
            }
            weather: [{
                main: string
                icon: string
                description: string
            }]
        
    wind: {
        speed: number
        deg: number
        gust: number
    }
    clouds:{
        all: number
    }
    visibility:number
    pop:number
  }

// export default class Weather {
    
// }