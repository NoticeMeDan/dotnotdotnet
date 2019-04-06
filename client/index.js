const five = require("johnny-five")
const board = new five.Board({repl: false})

let logs = []

function logData(temp, moistureLvl) {
    logs.push({ temp, moistureLvl })

    if (logs.length === 5) {
        pushLog(normalizeLogs(logs))
        logs = []
    }
}

function normalizeLogs(arr) {
    return {
        temp: (arr.reduce((acc, log) => log.temp + acc, 0) / logs.length).toFixed(2),
        moistureLvl: arr.reduce((acc, log) => log.moistureLvl + acc, 0) / logs.length
    }
}

function pushLog(log) {
    console.log("Temperature: %d, Moisture: %d", log.temp, log.moistureLvl)
}

board.on("ready", () => {

    const moistureSensor = new five.Sensor("A0")
    const temperature = new five.Thermometer({
        controller: "TMP102"
    })

    setInterval(() => {
        logData(temperature.C, moistureSensor.value)
    }, 200)
})
