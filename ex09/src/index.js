var myObj = {
    title: "TItanic",
    song: "My Heart Will Go On",
    genre: "drama"

};

function myFunction(myObj, checkProp) {

    var answer = "blank answer";
    if (myObj.hasOwnProperty(checkProp)) {
        answer = myObj[checkProp]

    } else {
        answer = "Not Found";
    }
    return answer;
}
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "title");
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "song");
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "genre");
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "actor");

console.log(myFunction("title"));
module.exports = myFunction;