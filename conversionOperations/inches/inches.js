const inches = (centimeters) => {
    // return (centimeters*0.3937) + centimeters
    return "The length of " + centimeters + " centimeters is " + (centimeters*0.3937).toFixed(2) + " inches."
}

module.exports = inches