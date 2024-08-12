let umildade = 0
basic.showIcon(IconNames.Silly)
datalogger.setColumnTitles("umildade da terra")
robotbit.Servo(robotbit.Servos.S1, 50)
basic.forever(function () {
    umildade = pins.analogReadPin(AnalogPin.P1)
    datalogger.log(datalogger.createCV("umildade da terra", pins.analogReadPin(AnalogPin.P0)))
    if (umildade > 1000) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (umildade > 800) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        robotbit.Servo(robotbit.Servos.S1, 50)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        robotbit.Servo(robotbit.Servos.S1, 50)
        basic.pause(5000)
    }
})
