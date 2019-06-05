// arguments objects is not existint for arrow function.
const add = (a, b) => {
    //console.log(arguments); // Error, arguments is not defined.
    return a + b;
};
console.log(add(10, 20));

// 'this' keyword is no longer bound.

const user = {
    name: 'Eddard Stark',
    cities: ['NY', 'SF'],
    printPlacesLived : function() {
        this.cities.forEach( (city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();

const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy : 25,
    multiply() {
        return this.numbers.map((cur) => cur * this.multiplyBy);
    }
};

console.log(multiplier.numbers);
console.log(multiplier.multiply());
