//1. Using if..else, write the code which gets a number via prompt and then shows in alert:
function myFunction() {

    let x = prompt();

    if (x > 0) {
        alert(1)
    } else if (x < 0) {
        alert(-1)
    } else {
        alert(0)
    }
}

//2. Using if..else, write the code which gets a number via prompt and then shows in alert:

function myFunc() {
    let x = prompt();

    if (x > 1 && x < 3) {
        alert("1-3")
    } else if (x > 3 && x < 5) {
        alert("3-5")
    } else if (x > 5) {
        alert("5-7")
    }
}

//3. Rewrite a code using tenerary operators :

function myTernaryOp() {
    let result;
    let a = 1;
    let b = 2;

    (a + b < 5) ? result = 'Below' : result = 'Over';
    alert(result);
}

//4. Want to find out how old you'll be? Calculate it!
function myAge() {
    let birthYear = 1987;
    let someFutureYear = prompt("Please enter some year in future");
    let fAge = someFutureYear - birthYear;
    if( fAge != null){
        document.getElementById("age").innerHTML = "I will be " + fAge + " in " + someFutureYear;
    }
}

//5. Give user the info!

function myQuestions(){
    let age = prompt("What is your age?");
    let name = prompt("What is your name?");
    let proffesion = prompt("what do you do for a living?");

    alert("Username is" + name + " age is " + age + " and he is doing " + proffesion);
}


