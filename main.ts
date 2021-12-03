let pressure_sensor = 0
radio.setGroup(1)
basic.forever(function () {
    pressure_sensor = pins.analogReadPin(AnalogPin.P0)
    pins.setAudioPin(AnalogPin.P1)
    if (pressure_sensor > 0) {
        radio.sendNumber(1)
        for (let index = 0; index < 50000; index++) {
            music.playMelody("C5 C5 C C C C5 C5 C5 ", 9999999999999)
        }
    }
})
