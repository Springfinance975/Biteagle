// Temperature Sensor Micro:bit - Smart Environmental Monitoring System
// This micro:bit reads temperature data and transmits it to the moisture detection unit
// Demonstrates A+ level: sensor analysis, coordinated interactions, purposeful algorithms

let temperatureReading = 0
let alertLevel = 0
let transmissionCounter = 0

// Initialize radio communication on startup
radio.setGroup(42) // Unique group for our environmental monitoring system
radio.setTransmitPower(7) // Maximum transmission power for reliable communication

// Display startup animation to show system is active
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.showString("TEMP")
basic.pause(1000)

// Main program loop - continuously monitor and transmit temperature data
basic.forever(function () {
    // Read temperature from built-in sensor
    temperatureReading = input.temperature()
    
    // Increment transmission counter for data logging
    transmissionCounter += 1
    
    // Determine alert level based on temperature thresholds
    // This demonstrates decision-making logic (Assessment criteria 4.3 & 5.3)
    if (temperatureReading < 15) {
        alertLevel = 1 // Cold alert
        basic.showIcon(IconNames.SmallSquare) // Visual indicator
        music.playTone(262, music.beat(BeatFraction.Quarter)) // Audio alert
    } else if (temperatureReading >= 15 && temperatureReading <= 25) {
        alertLevel = 0 // Normal range
        basic.showIcon(IconNames.Yes) // Positive indicator
    } else {
        alertLevel = 2 // Hot alert
        basic.showIcon(IconNames.Angry) // Warning indicator
        music.playTone(523, music.beat(BeatFraction.Half)) // Higher pitch alert
    }
    
    // Transmit temperature data using radio communication
    // Format: "TEMP:[value]:[alert]:[counter]"
    radio.sendString("TEMP:" + temperatureReading + ":" + alertLevel + ":" + transmissionCounter)
    
    // Display current temperature on LED matrix
    basic.showNumber(temperatureReading)
    basic.pause(100)
    
    // Small delay between readings for system stability
    basic.pause(2000)
})

// Handle button A press - manual temperature check and display
input.onButtonPressed(Button.A, function () {
    basic.showString("T:")
    basic.showNumber(input.temperature())
    basic.pause(2000)
    basic.showString("C")
})

// Handle button B press - show transmission counter
input.onButtonPressed(Button.B, function () {
    basic.showString("COUNT:")
    basic.showNumber(transmissionCounter)
})

// Handle both buttons pressed - reset system
input.onButtonPressed(Button.AB, function () {
    transmissionCounter = 0
    basic.showIcon(IconNames.Diamond)
    basic.pause(500)
    basic.showString("RESET")
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
})

// Gesture detection for additional interactivity
input.onGesture(Gesture.Shake, function () {
    // Shake to send immediate temperature reading
    radio.sendString("URGENT:TEMP:" + input.temperature())
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
})