// this is where the questions stored

//category 1 of questions (general questions)
const fraga1 = "Who was the Ancient Greek God of the Sun?"; // appol
const fraga2 = "What artist has the most streams on Spotify?"; // drake
const fraga3 = "What sports car company manufactures the 911?"; // porsche
const fraga4 = "In what country is the Chernobyl nuclear plant located?"; //Ukraine
//category 2 of questions (math questions)
const fraga5 = "How many minutes are in a full week?"; // 10,080
const fraga6 = "121 Divided by 11 is?"; // 11 , 21 , 12
const fraga7 = "What is the Next Prime Number after 7?"; // 11
//category 3 of questions (media questions)
const fraga8 = "who is this person?"; // rober downey jr, iron man, your uncel steve
const fraga9 = "whats this rappers name?"; //kendrick lamar, k-dot, kung fu kenny, the goat, all the above
const fraga10 = "what was this movies name?"; //the titanic, titanic, jack and rose story

let fragorBoxGen = [fraga1, fraga2, fraga3, fraga4];
let fragorBoxMath = [fraga5, fraga6, fraga7];
let fragorBoxMed = [fraga8, fraga9, fraga10];

//this is where the answeres are stored

//category1 of answeres (general answeres)
const answere1ToFraga1 = "appolo";
const answere2ToFraga1 = "hermis";
const answere3ToFraga1 = "zoes";

let answereBox1 = [answere1ToFraga1, answere2ToFraga1, answere3ToFraga1]

const answere1ToFraga2 = "drake";
const answere2ToFraga2 = "the weekend";
const answere3ToFraga2 = "ariana grande";

let answereBox2 = [answere1ToFraga2, answere2ToFraga2, answere3ToFraga2]

const answere1ToFraga3 = "porche";
const answere2ToFraga3 = "ferrari";
const answere3ToFraga3 = "BMW";

let answereBox3 = [answere1ToFraga3, answere2ToFraga3, answere3ToFraga3]

const answere1ToFraga4 = "ukraine";
const answere2ToFraga4 = "russia";
const answere3ToFraga4 = "serbia";

let answereBox4 = [answere1ToFraga4, answere2ToFraga4, answere3ToFraga4]

//category1 of answeres (math answeres)
const answere1ToFraga5 = 10.080;
const answere2ToFraga5 = 17.000;
const answere3ToFraga5 = 8.960;

let answereBox5 = [answere1ToFraga5, answere2ToFraga5, answere3ToFraga5]

const answere1ToFraga6 = 11;
const answere2ToFraga6 = 21;
const answere3ToFraga6 = 12;

let answereBox6 = [answere1ToFraga6, answere2ToFraga6, answere3ToFraga6]

const answere1ToFraga7 = 11;
const answere2ToFraga7 = 10;
const answere3ToFraga7 = 14;

let answereBox7 = [answere1ToFraga7, answere2ToFraga7, answere3ToFraga7]

//category1 of answeres (med answeres)
const answere1ToFraga8 = "appolo";
const answere2ToFraga8 = "hermis";
const answere3ToFraga8 = "zoes";

let answereBox8 = [answere1ToFraga8, answere2ToFraga8, answere3ToFraga8]

const answere1ToFraga9 = "drake";
const answere2ToFraga9 = "the weekend";
const answere3ToFraga9 = "ariana grande";

let answereBox9 = [answere1ToFraga9, answere2ToFraga9, answere3ToFraga9]

const answere1ToFraga10 = "porche";
const answere2ToFraga10 = "ferrari";
const answere3ToFraga10 = "BMW";

let answereBox10 = [answere1ToFraga10, answere2ToFraga10, answere3ToFraga10]

// let fragoGrupper = [fragorBoxGen, fragorBoxMath, fragorBoxMed]


// typing document essentials

let playerName = '';

// generate random number between 0-2 and 0-3
let randomNumber0 = Math.floor(Math.random() * 3);
let randomNumber1 = Math.floor(Math.random() * 4);


// choose a random qwestiongroup
// let randomQwestionGroup = fragoGrupper[randomNumber0];


// choose a random qwestion from Math box
let randomQwestion0 = fragorBoxMath[randomNumber0];

// choose a random qwestion from Media box
let randomQwestion1 = fragorBoxMed[randomNumber0];

// choose a random qwestion from General box
let randomQwestion2 = fragorBoxGen[randomNumber1];


console.log(randomQwestion2);

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

    document.querySelector("#questionNumber").textContent = "Qwestion1";
    document.querySelector("#question").innerHTML = randomQwestion0;
    document.querySelector("#ans1").innerHTML = answere1ToFraga2;


    // document.querySelector("#qestion").textContent = 
}