basic.forever(function () {
    makerobo.Servo(makerobo.Servos.S1, 0)
    basic.pause(1000)
    makerobo.Servo(makerobo.Servos.S1, 90)
    basic.pause(1000)
})
