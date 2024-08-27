//* KelvinToCelsius conversion:
//* kelvinNum - 273.15
// Function to convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

//* celsiusToKelvin:
//* celsiusNum + 273.15
// Function to convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

//* fahrenheitToCelsius:
//* (fahrenheit - 32) * 5/9
// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

//* celsiusToFahrenheit:
//* (celsius * 9/5) + 32
// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

//* fahrenheitToKelvin:
//* (fahrenheit - 32) * 5/9 + 273.15
// Function to convert Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9 + 273.15;
}

//* kelvinToFahrenheit: 
//* (kelvin - 273.15) * 9/5 + 32
// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
}



let submitBtn = document.getElementById("convertBtn");
let result;

submitBtn.addEventListener("click", () => {
    let inputTemp = document.getElementById("inputTemp").value;
    //console.log(inputTemp);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    //debugger
    //*Function to convert Celsius to Fahrenheit
    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        result = celsiusToFahrenheit(inputTemp);
        //*Function to convert Celsius to Kelvin
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        result = celsiusToKelvin(parseInt(inputTemp));
        //*Function to convert Fahrenheit to Celsius
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        result = fahrenheitToCelsius(inputTemp);
        //*Function to convert Fahrenheit to Kelvin
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        result = fahrenheitToKelvin(inputTemp);
        //*Function to convert Kelvin to Celsius
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        result = kelvinToCelsius(inputTemp);
        //*Function to convert Kelvin to Fahrenheit
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        result = kelvinToFahrenheit(inputTemp);
        //*No conversion needed if units are the same
    } else {
        result = inputTemp;
    }

    document.getElementById("result").innerText = `${fromUnit} to ${toUnit}\n ${parseInt(result).toFixed(2)}°`;
});

let ClearUp = document.getElementById("reset");

ClearUp.addEventListener("click", () => {
    fromUnit.value = "";
    inputTemp.value = "";
    toUnit.value = "";
    document.getElementById("result").innerText = "";
})





