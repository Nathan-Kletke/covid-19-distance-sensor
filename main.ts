input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.forever(function () {
    basic.pause(600000)
    basic.showString("Remember to socially distance!")
    music.playMelody("C E G C5 B G E C ", 120)
})
basic.forever(function () {
    radio.setGroup(1)
    radio.setTransmitPower(0.2)
    radio.sendValue("name", 0)
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) <= -81) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -81) {
        basic.clearScreen()
    }
})
