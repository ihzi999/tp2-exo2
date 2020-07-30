input.onButtonPressed(Button.A, function () {
    led.unplot(led1, 4)
    led1 += -1
    led.plot(led1, 4)
    if (led1 <= -1) {
        led.unplot(led1, 4)
        led1 = 0
        led.plot(led1, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(led1, 4)
    led1 += 1
    led.plot(led1, 4)
    if (led1 >= 5) {
        led.unplot(led1, 4)
        led1 = 4
        led.plot(led1, 4)
    }
})
let led2 = 0
let led1 = 0
let score = 0
led1 = 2
led.plot(led1, 4)
basic.forever(function () {
    led.plot(led1, 4)
    led2 = randint(0, 4)
    led.plotBrightness(led2, 0, 255)
    basic.pause(500)
    led.unplot(led2, 0)
    led.plotBrightness(led2, 1, 255)
    basic.pause(500)
    led.unplot(led2, 1)
    led.plotBrightness(led2, 2, 255)
    basic.pause(500)
    led.unplot(led2, 2)
    led.plotBrightness(led2, 3, 255)
    basic.pause(500)
    led.unplot(led2, 3)
    led.plotBrightness(led2, 4, 255)
    basic.pause(500)
    led.unplot(led2, 4)
    if (led.pointBrightness(led1, 4) == led.pointBrightness(led2, 4)) {
        score += 1
    } else if (led.pointBrightness(led1, 4) != led.pointBrightness(led2, 4)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("score")
        basic.showNumber(score)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
    }
})
