export default class Sound {
  sound = null // HTMLAuioElement
  name = ''
  constructor(src) {
    this.sound = document.querySelector('audio')
    this.name = src
    this.sound.src = src
  }
  play() {
    this.sound.play()
  }
  stop() {
    this.sound.pause()
  }
}
