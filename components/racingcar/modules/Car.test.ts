import Car from './Car'

describe('Car객체', () => {
  const car = new Car('페라리')
  it('Car객체 생성자 작동확인', () => {
    expect(car.name).toBe('페라리')
  })
  it('Car객체 go()메소드 작동확인', () => {
    car.go()
    car.go()
    expect(car.position).toBe(2)
  })
})
