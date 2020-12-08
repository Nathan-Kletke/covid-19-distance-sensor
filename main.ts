input.onButtonPressed(Button.A, function () {
    Bubble = 2
})
input.onButtonPressed(Button.AB, function () {
    Bubble = 1
})
input.onButtonPressed(Button.B, function () {
    Bubble = 2
    if (input.temperature() >= 40) {
        basic.showString("Body temp high.")
    } else if (input.temperature() < 36) {
        basic.showString("Body temp low")
    } else {
        basic.showString("Body temp avg.")
    }
    Bubble = 1
})
radio.onReceivedValue(function (name, value) {
	
})
let Message = 0
let Bubble = 0
radio.setGroup(1)
let Bubble_tracker = 1
Bubble = 1
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
    radio.setTransmitPower(0.2)
    radio.sendValue("name", 0)
    if (Bubble == 1) {
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) <= -81) {
            basic.showIcon(IconNames.No)
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.clearScreen()
        }
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -81) {
            basic.clearScreen()
            basic.pause(1000)
        }
    }
})
