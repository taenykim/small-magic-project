import React from 'react'
import Car from './Car'

const makeCars = (carNames: string[]) => {
  const _cars = []
  for (let i = 0; i < carNames.length; i++) {
    _cars.push(new Car(carNames[i]))
  }
  return _cars
}

const moveCars = (cars: Car[]) => {
  cars.forEach((car) => {
    moveCar(car)
  })
}

// jsx 생성함수
const makeProcess = (index: number, cars: Car[]) => {
  return (
    <>
      <div
        style={{
          margin: '20px 0px 20px 0px',
          padding: '5px 0px 5px 0px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '20px',
          background: 'yellow',
        }}
      >
        {index + 1}회차
      </div>
      <div style={{ marginTop: '20px' }}>
        {cars.map((car, i) => (
          <div key={i}>
            {car.name}:{makeDistance(car.position)}
          </div>
        ))}
      </div>
    </>
  )
}

// jsx 생성함수
const makeResult = (cars: Car[]) => {
  return (
    <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
      {getWinner(cars)}가 최종 우승했습니다.
    </div>
  )
}

const moveCar = (car: Car) => {
  if (checkMoveCarCondition()) {
    car.go()
  }
}

const checkMoveCarCondition = () => {
  const MOVE_CAR_CONDITION = 4
  const RANDOM_NUMBER_RANGE = 9
  return Math.floor(Math.random() * RANDOM_NUMBER_RANGE) >= MOVE_CAR_CONDITION ? true : false
}

const makeDistance = (num: number) => {
  let _str = ''
  for (let i = 0; i < num; i++) {
    _str += '-'
  }
  return _str
}

const getWinner = (cars: Car[]) => {
  let max = 0
  let winner: string[] = []

  cars.forEach((car) => {
    if (car.position > max) max = car.position
  })

  cars.forEach((car) => {
    if (max === car.position) winner.push(car.name)
  })

  return winner.join()
}

export { makeCars, moveCars, makeProcess, makeResult }

export { makeDistance, getWinner }
