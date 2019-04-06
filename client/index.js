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
});
