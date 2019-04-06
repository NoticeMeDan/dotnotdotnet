const five = require("johnny-five")
const board = new five.Board();

board.on("ready", function() {

    const temperature = new five.Thermometer({
        controller: "TMP102"
    });

    temperature.on("data", data => {
        console.log("celsius: %d", data.C);
        console.log("fahrenheit: %d", data.F);
        console.log("kelvin: %d", data.K);
    });

    const sensor = new five.Sensor("A0");

    // Scale the sensor's data from 0-1023 to 0-10 and log changes
    sensor.on("change", scaleTo => {
        console.log(scaleTo(0, 10));
    });
});
