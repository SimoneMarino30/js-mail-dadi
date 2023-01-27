// TRACCIA
// MAIL
// Chiedi all'utente la sua email,
// controllo che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.


// CREO UNA LISTA DI EMAIL
// CHIEDO ALL' UTENTE IL SUO INDIRIZZO EMAIL
// CREO UNA VARIABILE FALSA PER L'ACCESSO
// CONFRONTO LA MAIL UTENTE CON QUELLE DELLA LISTA CON UN CICLO FOR ()
// IN CASO DI QUESTE CONDIZIONI, ACCESSO E' VERO
// SE LA MAIL UTENTE E' UGUALE A UNA DELLA LISTA
// PUO' ACCEDERE
// SE LA MAIL UTENTE NON E' UGUALE A UNA DELLA LISTA
// NON PUO' ACCEDERE

// const button = document.getElementById("myBtn");
// CREO UNA LISTA DI EMAIL

let lista = ["primamail@gmail.it", "secondamail@yahoo.it", "terzamail@yahoo.com", "quartamail@outlook.it"];
console.log(lista);

// CHIEDO ALL' UTENTE IL SUO INDIRIZZO EMAIL
let richiestaEmail = prompt('Qual è il tuo indirizzo e-mail?');
// console.log(richiestaEmail);

// CREO UNA VARIABILE FALSA PER L'ACCESSO
let accesso = false;

// CONFRONTO LA MAIL UTENTE CON QUELLE DELLA LISTA CON UN CICLO FOR ()
for (i = 0; i <= lista.length; i++) {
    // IN CASO DI QUESTE CONDIZIONI, ACCESSO E' VERO
    accesso = true;
    console.log(i)
}

// SE LA MAIL UTENTE E' UGUALE A UNA DELLA LISTA

// SE LA MAIL UTENTE E' UGUALE A UNA DELLA LISTA
if (accesso = true) {
    // PUO' ACCEDERE
    alert("PUOI ACCEDERE");
    // SE LA MAIL UTENTE NON E' UGUALE A UNA DELLA LISTA
} else {
    // NON PUO' ACCEDERE
    alert("NON PUOI ACCEDERE");
}

