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

console.log("value")



