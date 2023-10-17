Brickcell.init()
basic.forever(function () {
    serial.writeNumber(Brickcell.distance())
    serial.writeString("" + ("\r\n"))
    basic.pause(1000)
})
