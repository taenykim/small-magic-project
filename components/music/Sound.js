export default class Sound {
  sound
  name
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
