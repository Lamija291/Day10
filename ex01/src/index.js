var myPet = {
    species: "Dog",
    name: "Mrvica",
    legs: 4,
    friends: ["Luna", "Lesi"]

};
function myFunction(myObj) {
    return myObj;

}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };
