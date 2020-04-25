export default class Car {
  name: string
  position = 0

  constructor(name: string) {
    this.name = name
  }
  go() {
    this.position = this.position + 1
  }
}
