// Sets radio to 1
let pressure_sensor = 0
radio.setGroup(1)
basic.forever(function () {
    pressure_sensor = pins.analogReadPin(AnalogPin.P0)
    pins.setAudioPin(AnalogPin.P1)
    // Asks if the pressure sensor is pressed
    if (pressure_sensor > 0) {
        radio.sendString("Burglar")
        for (let index = 0; index < 1e+308; index++) {
            music.playMelody("C5 C5 C C C C5 C5 C5 ", 9999999999999)
        }
    }
})
