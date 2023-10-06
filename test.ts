Brickcell.init()
basic.forever(() => {
    serial.writeNumber(Brickcell.distance())
    serial.writeString("\r\n")
    basic.pause(1000);
})