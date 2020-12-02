radio.onReceivedNumber(function (receivedNumber) {
    Bubble_tracker = radio.receivedPacket(RadioPacketProperty.SerialNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.setTransmitSerialNumber(true)
    radio.sendNumber(radio.receivedPacket(RadioPacketProperty.SerialNumber))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("This is your Temperature Checker.")
    basic.showString("Please place the Micro:Bit to your forehead.")
    if (input.temperature() >= 40) {
        basic.showString("Your body temperature is higher than usual. Consider staying home.")
    } else if (input.temperature() < 36) {
        basic.showString("Your body temperature is lower than usual. Consider staying home.")
    } else {
        basic.showString("Your temperature is average. You may resume regular activities.")
    }
})
radio.onReceivedValue(function (name, value) {
	
})
let Message = 0
let Bubble_tracker = 0
radio.setGroup(1)
let Bubble = 1
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
    if (radio.receivedPacket(RadioPacketProperty.SerialNumber) != Bubble_tracker) {
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
