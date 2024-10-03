class Dictionary {
    constructor() {
        this.words = [];
    }
    addWord(word) {
        this.words.push(word);
        console.log(`The word ${word} has been added to the dictionary`);
    }
    findWord(word) {
        if (this.words.includes(word)) {
            console.log(`The word ${word} was found in the dictionary`);
        } else {
            console.log(`The word ${word} was not found in the dictionary`);
        }
    }
}
(function () {
    let myDictionary = new Dictionary();

    document.getElementById("saveWord").addEventListener("click", function () {
        let word = document.getElementById("addedWord").value.trim();
        if (word !== "") {
            myDictionary.addWord(word);
            document.getElementById("addedWord").value = "";
        } else {
            console.log(`Please enter a valid word!`);
            document.getElementById("addedWord").value = "";
        }
    });

    document.getElementById("searchWord").addEventListener("click", function () {
        let word = document.getElementById("wordEntered").value.trim();
        if (word !== "") {
            myDictionary.findWord(word);
            document.getElementById("wordEntered").value = "";
        } else {
            console.log(`Please enter a valid word!`);
            document.getElementById("wordEntered").value = "";
        }
    });
})();
