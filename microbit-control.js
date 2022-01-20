function SCHOOLZONEWARNING () {
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P11,
    PingUnit.Centimeters
    ) < 8) {
        radio.sendNumber(1)
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.analogWritePin(AnalogPin.P0, 1023)
        basic.pause(100)
        radio.sendNumber(0)
    } else if (receivedNumber1 == 8) {
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, 0)
        pins.analogWritePin(AnalogPin.P4, 255)
    } else if (receivedNumber1 == 7) {
        pins.analogWritePin(AnalogPin.P2, 255)
        pins.analogWritePin(AnalogPin.P3, 0)
        pins.analogWritePin(AnalogPin.P4, 0)
    } else if (receivedNumber1 == 0) {
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, 0)
        pins.analogWritePin(AnalogPin.P4, 0)
    }
}
radio.onReceivedString(function (receivedString) {
    let receivedNumber = 0
    receivedNumber1 = receivedNumber
})
let receivedNumber1 = 0
radio.setGroup(7)
pins.analogWritePin(AnalogPin.P2, 0)
pins.analogWritePin(AnalogPin.P3, 255)
pins.analogWritePin(AnalogPin.P4, 0)
basic.forever(function () {
    SCHOOLZONEWARNING()
})
