radio.onReceivedNumber(function (receivedNumber) {
    receivedNumber1 = 0
})
function Radio_Input () {
    if (receivedNumber1 == 7) {
        maqueen.motorStop(maqueen.Motors.All)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        music.rest(music.beat(BeatFraction.Sixteenth))
        basic.pause(10000)
    }
}
radio.onReceivedString(function (receivedString) {
    let receivedNumber = 0
    receivedNumber1 = receivedNumber
})
function ICE () {
    if (huskylens.isLearned(1)) {
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 14)
                radio.sendNumber(8)
                basic.pause(10000)
            }
        }
    }
}
let receivedNumber1 = 0
radio.setGroup(7)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
basic.forever(function () {
    ICE()
    Radio_Input()
})
basic.forever(function () {
    huskylens.request()
})
