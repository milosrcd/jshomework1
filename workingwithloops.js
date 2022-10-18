const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let quote = "There are times in life when people must know when not to let go. Balloons are designed to teach small children this.";
const superheroes = [
    {
        name: 'Bruce Wayne',
        alias: 'Batman',
        powerLevel: 50,
    },
    {
        name: 'Wade Wilson',
        alias: 'Deadpool',
        powerLevel: 90,
    },
    {
        name: 'Peter Parker',
        alias: 'Spiderman',
        powerLevel: 70,
    },
    {
        name: 'Kristin Wells',
        alias: 'Superwoman',
        powerLevel: 99,
    },
    {
        name: 'Barry Allen',
        alias: 'The Flash',
        powerLevel: 80,

    },
    {
        name: 'Diana Prince',
        alias: 'Wonder Woman',
        powerLevel: 90,
    },
    {
        name: 'Ororo Munroe',
        alias: 'Storm',
        powerLevel: 85,
    },
    {
        name: 'Helen Parr',
        alias: 'Elastigirl',
        powerLevel: 70,
    },
];


//1. Log in console the numbers from 0 to 15 using for loop
console.log("1. Log in console the numbers from 0 to 15 using for loop");
for (let i = 0; i < 15; i++) {
    console.log(i);
}

//2. Print the numbers from 12 to 24 using while loop
console.log("2. Print the numbers from 12 to 24 using while loop");
let i = 12;
let j = 24
while (i <= j) {
    console.log(i);
    i++;
}

//3. Log in console the ODD numbers from numDaysInMonth array
console.log("3. Log in console the ODD numbers from numDaysInMonth array");
const odds = [];
for (const num of numDaysInMonth) {
    if (num % 2 != 0) {
        odds.push(num);
    }
}
console.log(odds)

//4. Log in console  the EVEN numbers from 10 to -20
console.log("4. Log in console  the EVEN numbers from 10 to -20");
for (let i = -20; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//5. Log in console all the elements of the daysInWeek   array
console.log("5. Log in console all the elements of the daysInWeek   array");
for (let i = 0; i < daysInWeek.length; i++) {
    console.log(daysInWeek[i]);
}

//6. Calculate the sum of all the numbers in the numDaysInMonth array and log it in console
console.log("6. Calculate the sum of all the numbers in the numDaysInMonth array and log it in console");
let sum = 0;
for (let i = 0; i < numDaysInMonth.length; i++) {
    sum += numDaysInMonth[i];
}
console.log(sum);

//7. Find in super hero object list s how many super heroes have power level higher than  90
console.log("7. Find in super hero object list s how many super heroes have power level higher than  90");
let powerLvl = superheroes.filter(superheroe => superheroe.powerLevel > 90);
console.log(powerLvl);


//8. Write javascript program to check what day of the week is today.
console.log("8. Write javascript program to check what day of the week is today.");
const d = new Date();
let day = daysInWeek[d.getDay()];
console.log(day);

//9. Find and log in console how many letters “e” are in the next quote:
console.log("9. Find and log in console how many letters “e” are in the next quote:");
console.log(quote.replace(/[^a]/g, "").length);