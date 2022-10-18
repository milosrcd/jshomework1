
//1. Given the user input make all letters uppersase and log it to console.
function upperStringFunc() {
    let userString = prompt("Enter some Text");
    let upperString = userString.toUpperCase();
    document.getElementById("upperString").innerHTML = upperString;
}

//2. Given the user inptu make all letters in lowercase format.
function lowerStringFunc() {
    let userString = prompt("Enter some Text");
    let lowerString = userString.toLowerCase();
    document.getElementById("lowerString").innerHTML = lowerString;
}

//3. Given the user input make every first letter of new word capitilized.
function firstWordCaptFunc() {

    let userString = prompt("Enter some Text");

    let firstWordCapt = userString.split(" ");
    for (let i = 0; i < firstWordCapt.length; i++) {
        firstWordCapt[i] = firstWordCapt[i].charAt(0).toUpperCase() + firstWordCapt[i].slice(1);
    }
    let str = firstWordCapt.join(" ");
    document.getElementById("firstWordCapt").innerHTML = str;
}

//4. Given the user input as sentence longer then 5 words, find longest word in sentence.
function longestWord(){
    let userString = prompt("Enter sentence longer than 5 words");
    userString = userString.match(/[a-zA-Z0-9]+/gi);
    let longest = "";
    for (let i = 0; i < userString.length; i++) {
        if(userString[i].length > longest.length){
            longest = userString[i];
        }        
    }
    document.getElementById("longestWord").innerHTML = longest;
}

//5. Given the user input reverse it and log it to console.
function reverseString(){
    let userString = prompt("Enter some string");
    let newString = userString.split('').reverse().join('');
    document.getElementById("reverseString").innerHTML = newString;
}



