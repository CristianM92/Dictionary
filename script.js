let addedWords = [];
function checkWords() {
    let word = document.getElementById("checkWord").value;
    if (addedWords.includes(word)) {
        message.innerHTML = "The word was already added. Please enter another word!";
        document.getElementById("checkWord").value = "";
    } else {
        message.innerHTML = "Word can be added in the dictionary!";
        document.getElementById("checkWord").value = "";
    }
}

function addWords() {
    let word = document.getElementById("addedWord").value;
    if (addedWords.includes(word)) {
        message.innerHTML = "The word was already added. Please insert another word!";
        document.getElementById("addedWord").value = "";
    } else {
        message.innerHTML = "Word was added successfully!";
        addedWords.push(word);
        document.getElementById("addedWord").value = "";
    }
}
