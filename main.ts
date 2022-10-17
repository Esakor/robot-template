function Turn_Right () {
    pins.servoSetPulse(AnalogPin.P8, 0)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
function Sensor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    if (distance < 5) {
        pins.servoSetPulse(AnalogPin.P8, 0)
        pins.servoSetPulse(AnalogPin.P13, 0)
    }
}
function Forward () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
function Backward2 () {
	
}
input.onButtonPressed(Button.A, function () {
    Forward()
})
function Turn_Left () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 0)
    control.waitMicros(20000)
}
input.onButtonPressed(Button.AB, function () {
    Forward2()
    Turn_Right()
})
function Forward2 () {
	
}
input.onButtonPressed(Button.B, function () {
    Backward2()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    Turn_Left()
    Forward()
})
function Backward () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
let distance = 0
basic.showIcon(IconNames.Ghost)
distance = 0
basic.forever(function () {
    Sensor()
    basic.showNumber(distance)
})
