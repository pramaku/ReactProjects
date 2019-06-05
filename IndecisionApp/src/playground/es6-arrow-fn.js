const square = function(x) {
    return x * x;
}
console.log(square(10)); // 100

const squareArrow = (x) => {
    return x * x;
}
console.log(squareArrow(10)); // 100

const sqArrowMini = x => x * x;
console.log(sqArrowMini(10)); // 100


const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};
console.log(getFirstName('Eddard Stark')); // Eddard

const getFirstNameMini = fullName => fullName.split(' ')[0];
console.log(getFirstNameMini('Eddard Stark')); // Eddard