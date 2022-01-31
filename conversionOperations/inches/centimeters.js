const centimeters = (inches) => {
    // return (centimeters*0.3937) + centimeters
    return "The length of " + inches + " inches is " + (inches/0.3937).toFixed(2) + " centimeters."
}

module.exports = centimeters