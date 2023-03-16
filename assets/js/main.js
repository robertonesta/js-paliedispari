/*Palidroma
Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma*/

function Palindrome(userWord) {
   
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
const value = Palindrome(userWord) //call the function


/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/

// far scegliere pari o dispari all'utente

let evenOdds = prompt("choose between even and odds")
console.log(evenOdds)

function even_odds (){
    if (evenOdds == 'even'){ 
        console.log(`even`)
    } else if (evenOdds == 'odds'){
        console.log(`odds`)
    } else {
        console.log(`you cane only choose between even and odds`)
    }
}


// far scegliere all'utente un numero da 1 a 5
// generare un numero random per il pc
// sommare il numero dell'utente e il numero del pc
// se la somma è uguale al pari o dispari scelto dall'utente, quest'ultimo ha vinto, altrimenti ha vinto il computer






