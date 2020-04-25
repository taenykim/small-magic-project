import React from 'react'
import { makeCars, makeDistance, makeProcess, getWinner, makeResult } from './racingCar'
import Car from './Car'
import './formValidator'

describe('자동차 생성', () => {
  it('자동차 이름배열 가지고 Car객체배열 생성 확인', () => {
    expect(makeCars(['포드', '페라리'])).toStrictEqual([new Car('포드'), new Car('페라리')])
  })
})

// describe('Processes 엘리먼트 출력', () => {
//   it('자동차 이동 distance 잘 출력하는지 확인', () => {
//     expect(makeDistance(5)).toBe('-----')
//   })
//   it('자동차 이동 Processes 엘리먼트 잘 출력하는지 확인', () => {
//     const _cars = [new Car('자동차1'), new Car('자동차2')]
//     _cars[0].go()
//     _cars[1].go()
//     _cars[1].go()
//     const _result = (
//       <div>
//         <div>{'2'}회차</div>
//         <div style={{ marginTop: '20px' }}>
//           <div key={0}>
//             {'자동차1'}:{'-'}
//           </div>
//           <div key={1}>
//             {'자동차2'}:{'--'}
//           </div>
//         </div>
//       </div>
//     )
//     expect(makeProcess(1, _cars)).toStrictEqual(_result)
//   })
// })

// describe('Result 엘리먼트 출력', () => {
//   it('한대의 우승 자동차 잘 출력하는지 확인', () => {
//     const _cars = [new Car('자동차1'), new Car('자동차2')]
//     _cars[0].go()
//     _cars[1].go()
//     _cars[1].go()
//     expect(getWinner(_cars)).toBe('자동차2')
//   })
//   it('여러대의 우승 자동차를 잘 출력하는지 확인', () => {
//     const _cars = [new Car('자동차1'), new Car('자동차2')]
//     _cars[0].go()
//     _cars[0].go()
//     _cars[1].go()
//     _cars[1].go()
//     expect(getWinner(_cars)).toBe('자동차1,자동차2')
//   })
//   it('우승자 result  엘리먼트 잘 출력하는지 확인', () => {
//     const _cars = [new Car('자동차1'), new Car('자동차2')]
//     _cars[0].go()
//     _cars[1].go()
//     _cars[1].go()
//     const _result = (
//       <div style={{ marginTop: '20px', fontWeight: 'bold' }}>{'자동차2'}가 최종 우승했습니다.</div>
//     )
//     expect(makeResult(_cars)).toStrictEqual(_result)
//   })
// })
