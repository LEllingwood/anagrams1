const destination = document.getElementById("results");

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}
document.getElementById("findButton").onclick = function () {
    destination.textContent = "";
    let typedText = document.getElementById("input").value;

    let alphabetizedTypedWord = alphabetize(typedText);

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        const alphabetizedCurrentWord = alphabetize(currentWord);
        if (alphabetizedCurrentWord === alphabetizedTypedWord) {

            // TODO: if i words.length - 1 (to be used to get rid of the extra comma)
            const newOutput = document.createTextNode(currentWord + ", ");
            destination.appendChild(newOutput);

        }
    }
    if (destination.textContent.length === 0) {

        const newOutput = document.createTextNode("you're stupid");
        destination.appendChild(newOutput); 
    }
}

const compDestination = document.getElementById("compResults");
document.getElementById("findNewButton").onclick = function () {

let list = {}

for (let i = 0; i < words.length; i++) {
    // if (list[alphabetize(words[i])])
    let alphaWord = alphabetize(words[i]);
    if (list[alphaWord]) {
        list[alphaWord].push(words[i])
    }
    else {
        list[alphaWord] = [words[i]]
    }
}
// console.log(list);
// console.log("hello")

for (let key in list) {
    let entry = list[key]
    // console.log("in 1");
    if (entry.length >= 5) {
        console.log(entry);
        const compOutput = document.createTextNode(entry.join(", "));
        const paragraph = document.createElement("p");
        paragraph.appendChild(compOutput);
        compDestination.appendChild(paragraph);
        // compDestination.appendChild(compOutput);
        // const breakdiv = document.createElement("br");
        // compDestination.appendChild(breakdiv);
    }
}



}

// let list = {}

// for (i = 0; i < words.length; i++) {
//     // if (List[alphabetize(words[i])]) {
//     const alphaWord = alphabetize(words[i])
//     if (list[alphaWord]) {
//         list[alphaWord].push(words[i])
//     }
//     else {
//         list[alphaWord] = [words[i]]
//     }
// }
// for (let key in list){
//     if (list[key].length >= 5) {
//     const longAList = document.createTextNode(list[key]);
//     compDestination.appendChild(longAList); 
//     const breakdiv = document.createElement("br")
//     compDestination.appendChild(breakdiv);
// }
// }
