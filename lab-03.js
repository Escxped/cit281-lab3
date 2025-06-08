const { reverseString, concatenateString } = require("./lab-03-module");

let car = {
    make: "Ford",
    model: "Mustang",
    vin: "4S3BMHB68B3286050",
    color: "Red",
    year: 2019,
    mileage: 1234,
    used: true,
    owners: [
        { last: "Last1", first: "First1" },
        { last: "Last2", first: "First2" }
    ]
};

// const make = car.make;
// const model = car.model;
const { make, model } = car;

function getCarMakeModel(car) {
    return car.make + " " + car.model;
}
console.log(0, getCarMakeModel(car));

const getCarMakeModelImplicit = car => `${car.make} ${car.model}`;
console.log(1, getCarMakeModelImplicit(car));

const getCarMakeModelExplicit = (car) => {
    return `${car.make} ${car.model}`;
};
console.log(2, getCarMakeModelExplicit(car));

const getCarMakeModelDestructure = ({ make, model }) => {
    return `${make} ${model}`;
};
console.log(3, getCarMakeModelDestructure(car));

for (let prop in car) {
    if (car.hasOwnProperty(prop)) {
        console.log(prop);
    }
}

const primes = [2, 3, 5, 7, 11];
// for (let index = 0; index < primes.length; index++) {
//     console.log(primes[index]);
// }
for (const prime of primes) {
    console.log(prime);
}

console.log(concatenateString(reverseString("abc"), reverseString("abc")));
