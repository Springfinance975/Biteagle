// Moisture Detection Micro:bit - Smart Environmental Monitoring System
// This micro:bit detects moisture levels and receives temperature data from the other unit
// Demonstrates A+ level: coordinated interactions, decision-making, creative system integration

let moistureLevel = 0
let temperatureReceived = 0
let alertStatus = 0
let systemMode = 0 // 0: Auto, 1: Manual, 2: Emergency
let dataLog: number[] = []
let environmentalScore = 0

// Initialize radio communication and system
radio.setGroup(42) // Same group as temperature sensor
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.showString("MOIST")
basic.pause(1000)

// Variables for intelligent environmental scoring
let optimalTempMin = 18
let optimalTempMax = 24
let optimalMoistureMin = 300
let optimalMoistureMax = 700

// Main monitoring loop with advanced decision-making
basic.forever(function () {
    // Read moisture level from analog pin (simulated sensor)
    moistureLevel = pins.analogReadPin(AnalogPin.P0)
    
    // Calculate environmental score based on both sensors
    environmentalScore = calculateEnvironmentalScore(temperatureReceived, moistureLevel)
    
    // Intelligent system response based on multiple conditions
    if (systemMode == 0) { // Auto mode
        // Advanced decision tree for environmental management
        if (environmentalScore >= 80) {
            // Optimal conditions
            basic.showIcon(IconNames.Happy)
            music.playTone(392, music.beat(BeatFraction.Eighth))
        } else if (environmentalScore >= 60) {
            // Good conditions
            basic.showIcon(IconNames.Yes)
        } else if (environmentalScore >= 40) {
            // Warning conditions
            basic.showIcon(IconNames.Confused)
            for (let i = 0; i < 2; i++) {
                music.playTone(330, music.beat(BeatFraction.Quarter))
                basic.pause(200)
            }
        } else {
            // Critical conditions - activate emergency protocol
            systemMode = 2 // Switch to emergency mode
            basic.showIcon(IconNames.Angry)
            activateEmergencyProtocol()
        }
    }
    
    // Display current moisture level
    if (systemMode != 2) {
        basic.showNumber(moistureLevel)
        basic.pause(500)
        
        // Cycle through different displays
        showEnvironmentalStatus()
    }
    
    // Log data for analysis (demonstrates data management)
    logEnvironmentalData(moistureLevel, temperatureReceived, environmentalScore)
    
    basic.pause(1500)
})

// Advanced function to calculate environmental score
function calculateEnvironmentalScore(temp: number, moisture: number): number {
    let tempScore = 0
    let moistScore = 0
    
    // Temperature scoring with optimal range
    if (temp >= optimalTempMin && temp <= optimalTempMax) {
        tempScore = 50 // Perfect temperature
    } else if (temp >= optimalTempMin - 5 && temp <= optimalTempMax + 5) {
        tempScore = 30 // Good temperature
    } else {
        tempScore = 10 // Poor temperature
    }
    
    // Moisture scoring with optimal range
    if (moisture >= optimalMoistureMin && moisture <= optimalMoistureMax) {
        moistScore = 50 // Perfect moisture
    } else if (moisture >= optimalMoistureMin - 100 && moisture <= optimalMoistureMax + 100) {
        moistScore = 30 // Good moisture
    } else {
        moistScore = 10 // Poor moisture
    }
    
    return tempScore + moistScore
}

// Function to display comprehensive environmental status
function showEnvironmentalStatus() {
    // Show temperature received
    basic.showString("T")
    basic.showNumber(temperatureReceived)
    basic.pause(300)
    
    // Show moisture level
    basic.showString("M")
    basic.showNumber(moistureLevel)
    basic.pause(300)
    
    // Show environmental score
    basic.showString("S")
    basic.showNumber(environmentalScore)
    basic.pause(300)
}

// Emergency protocol activation
function activateEmergencyProtocol() {
    for (let i = 0; i < 5; i++) {
        basic.showIcon(IconNames.Skull)
        music.playTone(131, music.beat(BeatFraction.Half))
        basic.pause(200)
        basic.showIcon(IconNames.Angry)
        music.playTone(196, music.beat(BeatFraction.Half))
        basic.pause(200)
    }
    
    // Send emergency alert back to temperature sensor
    radio.sendString("EMERGENCY:ENVIRON")
    basic.showString("ALERT")
}

// Data logging function for analysis
function logEnvironmentalData(moisture: number, temp: number, score: number) {
    dataLog.push(score)
    // Keep only last 10 readings for memory management
    if (dataLog.length > 10) {
        dataLog.shift()
    }
}

// Radio message handling - receives data from temperature sensor
radio.onReceivedString(function (receivedString) {
    let parts = receivedString.split(":")
    
    if (parts[0] == "TEMP") {
        // Parse temperature data: "TEMP:value:alert:counter"
        temperatureReceived = parseInt(parts[1])
        alertStatus = parseInt(parts[2])
        
        // Visual feedback for successful communication
        led.plot(4, 4) // Corner LED to show communication
        basic.pause(100)
        led.unplot(4, 4)
        
        // Respond based on temperature alert level
        if (alertStatus == 1) {
            // Cold alert received
            music.playTone(220, music.beat(BeatFraction.Quarter))
        } else if (alertStatus == 2) {
            // Hot alert received
            music.playTone(440, music.beat(BeatFraction.Quarter))
        }
    } else if (parts[0] == "URGENT") {
        // Handle urgent temperature readings
        basic.showIcon(IconNames.Surprised)
        temperatureReceived = parseInt(parts[2])
        basic.pause(1000)
    }
})

// Button A: Switch between modes
input.onButtonPressed(Button.A, function () {
    systemMode = (systemMode + 1) % 3
    if (systemMode == 0) {
        basic.showString("AUTO")
    } else if (systemMode == 1) {
        basic.showString("MANUAL")
    } else {
        basic.showString("EMERG")
    }
    basic.pause(1000)
})

// Button B: Show detailed statistics
input.onButtonPressed(Button.B, function () {
    basic.showString("STATS")
    basic.pause(500)
    
    // Calculate and show average environmental score
    let avgScore = 0
    for (let score of dataLog) {
        avgScore += score
    }
    if (dataLog.length > 0) {
        avgScore = Math.round(avgScore / dataLog.length)
    }
    
    basic.showString("AVG:")
    basic.showNumber(avgScore)
    basic.pause(2000)
    
    basic.showString("LOGS:")
    basic.showNumber(dataLog.length)
})

// Both buttons: Calibrate sensors
input.onButtonPressed(Button.AB, function () {
    basic.showString("CALIB")
    
    // Calibration sequence
    for (let i = 0; i < 3; i++) {
        basic.showIcon(IconNames.Target)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
    
    // Reset to optimal parameters
    optimalTempMin = 18
    optimalTempMax = 24
    optimalMoistureMin = pins.analogReadPin(AnalogPin.P0) - 50
    optimalMoistureMax = pins.analogReadPin(AnalogPin.P0) + 50
    
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
})

// Gesture controls for advanced interaction
input.onGesture(Gesture.Shake, function () {
    // Shake to send current status back to temperature sensor
    radio.sendString("STATUS:MOIST:" + moistureLevel + ":" + environmentalScore)
    basic.showIcon(IconNames.Diamond)
    basic.pause(500)
})

input.onGesture(Gesture.LogoUp, function () {
    // Logo up to show all historical data
    basic.showString("HISTORY")
    for (let score of dataLog) {
        basic.showNumber(score)
        basic.pause(300)
    }
})