// this is where the questions stored
//category 1 of questions (general questions)
let fraga1 = "Who was the Ancient Greek God of the Sun?"; // appol , hermis, zose
let fraga2 = "What artist has the most streams on Spotify?"; // drake, the weekend, ariana grande
let fraga3 = "What sports car company manufactures the 911?"; // porsche, ferrari, BMW
let fraga4 = "In what country is the Chernobyl nuclear plant located?"; //Ukraine, russia, serbia
//category 2 of questions (math questions)
let fraga5 = "How many minutes are in a full week?"; // 10,080 , 17,000 , 8960
let fraga6 = "121 Divided by 11 is?"; // 11 , 21 , 12
let fraga7 = "What is the Next Prime Number after 7?"; // 11
//category 3 of questions (media questions)
let fraga8 = "who is this person?"; // rober downey jr, iron man, your uncel steve
let fraga9 = "whats this rappers name?"; //kendrick lamar, k-dot, kung fu kenny, the goat, all the above
let fraga10 = "what was this movies name?"; //the titanic, titanic, jack and rose story

let fragorBoxGen = [fraga1, fraga2, fraga3, fraga4];
let fragorBoxMath = [fraga5, fraga6, fraga7];
let fragorBoxMed = [fraga8, fraga9, fraga10];

let fragoGrupper = [fragorBoxGen, fragorBoxMath, fragorBoxMed]


// typing document essentials

let playerName = '';

// generate random number between 0-2 and 0-3
let randomNumber0 = Math.floor(Math.random() * 3);
let randomNumber1 = Math.floor(Math.random() * 4);


// choose a random qwestiongroup
let randomQwestionGroup = fragoGrupper[randomNumber0];


// choose a random qwestion from the random qwestion groups that have only 3 catagories in them
let randomQwestion1 = randomQwestionGroup[randomNumber0];
// choose a random qwestion from the random qwestion group that has 4 catagories in it
let randomQwestion0 = randomQwestionGroup[randomNumber1];

console.log(randomQwestion1);

//a condition to display random qwestions from the biggist group 
// if (randomQwestionGroup === fragorBoxGen) {
//     console.log(randomQwestion1);
// }else {
//     console.log(randomQwestion0);
// }





// runing the first code to start the quiz
document.querySelector("#start-btn").addEventListener("click", startQuiz);

/*first function that stores the input and makes it look professional,
runs the alert to welcome the player and add the hidden property to the div
then runs the second funtion firststep.*/
function startQuiz() {
    playerName = document.getElementById("playerName").value;

    let slicedPlayerName = playerName.slice(0,1);
    slicedPlayerName = slicedPlayerName.toLocaleUpperCase();

    let restOfPlayerName = playerName.slice(1,playerName.length);
    restOfPlayerName = restOfPlayerName.toLocaleLowerCase();

    let newPlayerName = slicedPlayerName + restOfPlayerName;

    alert("hi " + newPlayerName + ", Good luck with ur game");

    document.querySelector(".start").classList.add("goaway");

    firstStep();
}
/*second function that removs the hidden property from the second div to 
show the first qwestion, then choose a random question from a random qwestionbox
and show 3 random anweres*/
function firstStep() {

    document.querySelector(".firststep").classList.remove("goaway");

    document.querySelector("#questionNumber").textContent = "Bitch1";

    // document.querySelector("#qestion").textContent = 
}