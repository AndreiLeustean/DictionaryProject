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

let myDictionary = new Dictionary();

function showMessage(word, elementSearchID, number) {
    if (word !== "") {
        if (number === 1) {
            myDictionary.addWord(word);
        } else {
            myDictionary.findWord(word);
        }
        document.getElementById(elementSearchID).value = "";
    } else {
        console.log(`Please enter a valid word!`);
        document.getElementById(elementSearchID).value = "";
    }
}

document.getElementById("saveWord").addEventListener("click", function () {
    let word = document.getElementById("addedWord").value.trim();
    let elementAddID = "addedWord";
    showMessage(word, elementAddID, 1);
});

document.getElementById("searchWord").addEventListener("click", function () {
    let word = document.getElementById("wordEntered").value.trim();
    let elementSearchID = "wordEntered";
    showMessage(word, elementSearchID, 2);
});

