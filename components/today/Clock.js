import React, { useState, useEffect } from 'react'

const Clock = () => {
  const weekArr = ['일', '월', '화', '수', '목', '금', '토']

  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [week, setWeek] = useState('')

  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  useEffect(() => {
    clock()
    setInterval(clock, 1000)
  })

  const clock = () => {
    const date = new Date()

    // setTodayDate(date)
    setYear(date.getFullYear())
    setMonth(date.getMonth())
    setDay(date.getDate())
    setWeek(date.getDay())

    setHours(date.getHours())
    setMinutes(date.getMinutes())
    setSeconds(date.getSeconds())
  }

  return (
    <>
      <div style={{ marginTop: '5px', fontSize: '18px', fontFamily: 'escore7' }}>
        {year}년 {month + 1}월 {day}일 {weekArr[week]}요일
      </div>
      <div style={{ marginTop: '10px', fontSize: '60px', color: 'orange' }}>
        {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </>
  )
}

export default Clock
