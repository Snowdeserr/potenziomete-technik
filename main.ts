let Lichtstatus = 0
input.onPinPressed(TouchPin.P0, function () {
    if (Lichtstatus) {
        Lichtstatus = 1
    } else {
        Lichtstatus = 0
    }
})
basic.forever(function () {
    if (Lichtstatus == 1) {
        pins.analogWritePin(AnalogPin.P2, pins.analogReadPin(AnalogPin.P1))
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
