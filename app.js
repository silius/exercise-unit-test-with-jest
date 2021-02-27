// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollars) => {
    let toEuro= dollars / oneEuroIs.USD
    return (toEuro * oneEuroIs.JPY)
}

const fromEuroToDollar = (euro) => {
    return (euro * oneEuroIs.USD)
}
const fromYentoPound = (yen) => {
    let toEuro= yen / oneEuroIs.JPY
    return toEuro * oneEuroIs.GBP
}

// just a console log for ourselves.
console.log(fromDollarToYen(3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromYentoPound , fromDollarToYen};