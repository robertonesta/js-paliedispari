/*Palidroma
Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma*/

/*function Palindrome(userWord) {
   
const userWordSplit = userWord.split('');
console.log(userWordSplit);
const reverseUserWordSplit = userWordSplit.reverse();
console.log(reverseUserWordSplit);
const reverseUserWord = reverseUserWordSplit.join('');
console.log(reverseUserWord);

console.log(userWord)

if (userWord == reverseUserWord) {
    alert(`palindrome`)
} else{
    alert(`not a palindrome`)
}
}
const userWord = prompt("type a word to see if it's a palindrome")
const value = Palindrome(userWord) //call the function/*


/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/

// far scegliere pari o dispari all'utente

let evenOdds = prompt("choose between even and odds")

function even_odds(evenOdds){
    if (evenOdds == 'even'){ 
        console.log(`even`)
    } else if (evenOdds == 'odds'){
        console.log(`odds`)
    } else {
        alert(`you can only choose between even and odds`)
        evenOdds = prompt("choose between even and odds")
    }
}
even_odds(evenOdds);
let userchoice = even_odds(evenOdds);

// far scegliere all'utente un numero da 1 a 5

let usernumber = Number(prompt("now choose a number between 1 and 5"))

function user_number(usernumber){
    if ( usernumber <= 5 && usernumber >=1 ){
        console.log(usernumber)
    } else {
        alert(`you can only choose a number between 1 and 5`)
        usernumber = Number(prompt("now choose a number between 1 and 5"))
    }
}
user_number(usernumber);

// generare un numero random per il pc

const pcRandomNumber = Math.round((Math.random() * 4) + 1)
console.log(pcRandomNumber)

// sommare il numero dell'utente e il numero del pc

const sum = usernumber + pcRandomNumber
// se la somma è uguale al pari o dispari scelto dall'utente, quest'ultimo ha vinto, altrimenti ha vinto il computer

let even;

if (sum % 2 == 0){
    even = true
} else {
    even = false
}
// e il vincitore è...

if (userchoice == even) {
    console.log(`you won`)    
} else {
    console.log(`pc won`)
}







