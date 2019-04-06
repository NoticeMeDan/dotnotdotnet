const five = require("johnny-five")
const board = new five.Board();

board.on("ready", function() {

    const temperature = new five.Thermometer({
        controller: "TMP102"
    });

    temperature.on("data", function() {
        console.log("celsius: %d", this.C);
        console.log("fahrenheit: %d", this.F);
        console.log("kelvin: %d", this.K);
    });
});
