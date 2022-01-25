//First input is weight in kg, 2nd input is height in meters.
const bmi = (weightInKg,heightInM) => {
    let cal = (weightInKg/(heightInM*heightInM)) 
    if(cal < 16.0){
        return "Severely Underweight"
    }else if(cal >= 16.0 && cal <= 18.4){
        return "Your BMI is "+ cal.toFixed(2) + ", which is underweight"
    }else if(cal >= 18.5 && cal <= 24.9){
        return "Your BMI is "+ cal.toFixed(2) + ", which is normal"
    }else if(cal >= 25.0 && cal <= 29.9){
        return "Your BMI is "+ cal.toFixed(2) + ", which is overweight"
    }else if(cal >= 30.0 && cal <= 34.9){
        return "Your BMI is "+ cal.toFixed(2) + ", which is moderately obese"
    }else if(cal >= 35.0 && cal <= 39.9){
        return "Your BMI is "+ cal.toFixed(2) + ", which is severely obese"
    }else{
        return "Your BMI is "+ cal.toFixed(2) + ", which is mrbidly obese"
    }
    
}

module.exports = bmi