function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },

        002: {
            artist: "Helem Nejse",
            title: "Lagana Zadava",
            id: 1,
            release_year: 2020,
            formats: {
                1: "ALAC",
                2: "Cassette",
                3: "LS"
            }
        }

    };
    return myMusic;
}
myFunction()[2];
console.log(myFunction()[2]);
module.exports = myFunction;