let Message = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
radio.onReceivedValue(function (name, value) {
	
})
basic.forever(function () {
    Message = 0
    basic.pause(300000)
    Message = randint(1, 3)
    if (Message == 1) {
        basic.showString("Remember to socially distance!")
        music.playMelody("C E G C5 B G E C ", 120)
    } else if (Message == 2) {
        basic.showString("Wear a mask!")
        music.playMelody("C E G C5 B G E C ", 120)
    } else if (Message == 3) {
        basic.showString("If you feel sick, stay home!")
        music.playMelody("C E G C5 B G E C ", 120)
    }
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
        basic.clearScreen()
    }
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -81) {
        basic.clearScreen()
        basic.pause(1000)
    }
})
