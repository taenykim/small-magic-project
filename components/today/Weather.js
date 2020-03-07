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
    const url =
      'http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=5a852cca928001166e0c28dca72c5987'
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(json => {
        setTemp(Math.round(json.main.temp - 273.15))
        setHumidity(json.main.humidity)
        setWeather(json.weather[0].main)
        setWeatherIcon(json.weather[0].icon)
        setCountry(json.sys.country)
        setCity(json.name)
        setCloud(json.clouds.all + '%')
      })
  }

  return (
    <>
      <div
        style={{
          marginTop: '4px',
          fontFamily: 'escore8',
          fontSize: '16px',
          textShadow: '2px 2px #ccc'
        }}
      >
        {weather}
      </div>
      <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} />
      <div
        style={{
          fontSize: '10px',
          fontFamily: 'escore9'
        }}
      >
        {country}, {city},
      </div>
      <div style={{ marginTop: '20px', fontSize: '14px' }}>현재온도 : {temp}℃</div>
      <div style={{ marginTop: '10px', fontSize: '14px' }}>현재습도 : {humidity}%</div>
      <div style={{ marginTop: '10px', fontSize: '14px' }}>
        구 &nbsp; &nbsp; &nbsp; 름 : {cloud}
      </div>
    </>
  )
}

export default Weather
