basic.forever(function () {
    radio.setGroup(1)
    radio.setTransmitPower(0.2)
    radio.sendValue("name", 0)
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) <= -81) {
        basic.showIcon(IconNames.No)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -81) {
        control.reset()
    }
})
