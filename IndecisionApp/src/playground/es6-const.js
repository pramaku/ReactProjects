var namevar = 'mike';
namevar = 'jane'; // reassigning is allowed for var
var namevar = 'Jon'; // re-definition is allowed for var

let namelet = 'Jonas';
namelet = 'Schimidt'; // reassigning is allowed for let
// let namelet = 'Lily'; // Error, re-definition is not allowed for let

const nameConst = 'Frank';
// nameConst = 'Robin'; // error, reassigning is NOT allowed for const
// const nameConst = 'Ted'; // Error, re-definition is not allowed for const

function getPetName() {
    var catName = 'Ginger';
    let dogName = 'Summer';
    const pigName = 'pupper';
    return catName;
}

getPetName();
// console.log(catName); // Error, var variables are function scoped
// console.log(dogName); // Error, let variables are also function scoped
// console.log(pigName); // Error, const  variables are also function scoped


// Block scoping
var fullName = 'Eddard Stark';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName); // var variables are function scoped, so accesible here.

if (fullName) {
    const firstNameConst = fullName.split(' ')[0];
    console.log(firstNameConst);
}
//console.log(firstNameConst); // Error, const variables are block scoped, so no accesible here out side the block.

if (fullName) {
    let firstNameLet = fullName.split(' ')[0];
    console.log(firstNameLet);
}
//console.log(firstNameLet); // Error, let variables are block scoped, so no accesible here out side the block.
