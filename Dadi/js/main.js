// GIOCO DEI DADI
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// GENERO UN NUMERO RANDOM PER IL GIOCATORE
// GENERO UN NUMERO RANDOM PER IL COMPUTER
// CONFRONTO I DUE NUMERI
// STABILISCO IL VINCITORE

// GENERO UN NUMERO RANDOM PER IL GIOCATORE
let myNumber = Math.floor(Math.random() * 6 + 1);
console.log(myNumber);
document.getElementById('my_number').innerHTML;

// GENERO UN NUMERO RANDOM PER IL COMPUTER
let pcNumber = Math.floor(Math.random() * 6 + 1);
console.log(pcNumber);


if (myNumber > pcNumber) {

    alert('HAI VINTO');
} else if (myNumber < pcNumber) {
    alert('HAI PERSO');
} else {
    alert('PAREGGIO');
}



