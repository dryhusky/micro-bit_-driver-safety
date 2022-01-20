radio.onReceivedNumber(function (receivedNumber) {
    receivedNumber1 = receivedNumber
})
function call_STOP_go () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(7)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(0)
    }
}
let receivedNumber1 = 0
radio.setGroup(7)
basic.forever(function () {
    call_STOP_go()
})
