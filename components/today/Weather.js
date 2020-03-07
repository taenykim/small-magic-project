import React, { useState, useEffect } from 'react'

const Weather = () => {
  const [temp, setTemp] = useState('')
  const [humidity, setHumidity] = useState('')
  const [weather, setWeather] = useState('')
  const [weatherIcon, setWeatherIcon] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [cloud, setCloud] = useState('')

  useEffect(() => {
    weather_clock()
  })

  const weather_clock = () => {
    // const url =
    //     'http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=5a852cca928001166e0c28dca72c5987'
    //   fetch(url)
    //     .then(res => {
    //       return res.json()
    //     })
    //     .then(json => {
    //       setTemp(json.main.temp - 273.15)
    //       setHumidity(json.main.humidity)
    //       setWeather(json.weather[0].main)
    //       setWeatherIcon(json.weather[0].icon)
    //       setCountry(json.sys.country)
    //       setCity(json.name)
    //       setCloud(json.clouds.all + '%')
    //     })
  }

  return (
    <>
      <div style={{ marginTop: '10px', fontSize: '10px' }}>
        현재온도 : {temp}, 현재습도 : {humidity}, 날씨 : {weather}, {country}, {city}, 구름 :{' '}
        {cloud}
      </div>
      <div style={{ marginTop: '10px', fontSize: '10px' }}>현재 날씨 API error code : 429</div>
    </>
  )
}

export default Weather
