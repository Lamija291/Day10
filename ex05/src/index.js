var school = {
    name: "Arena",
    location: "Sarajevo",
    eshablished: "2020"
};

function myFunction(name) {
    school.name = name;
    return school;
};

console.log(myFunction("Paragon"));
module.exports = { school, myFunction };
