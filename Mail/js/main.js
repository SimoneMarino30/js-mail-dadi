// TRACCIA
// MAIL
// Chiedi all'utente la sua email,
// controllo che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.


// CREO UNA LISTA DI EMAIL
// CHIEDO ALL' UTENTE IL SUO INDIRIZZO EMAIL
// CONFRONTO LA MAIL UTENTE CON QUELLE DELLA LISTA CON UN CICLO FOR ()
// SE LA MAIL UTENTE E' UGUALE A UNA DELLA LISTA
// PUO' ACCEDERE
// SE LA MAIL UTENTE NON E' UGUALE A UNA DELLA LISTA
// NON PUO' ACCEDERE


// CREO UNA LISTA DI EMAIL

const lista = ["primamail@gmail.it", "secondamail@yahoo.it", "terzamail@yahoo.com", "quartamail@outlook.it"];
console.log(lista);

// CHIEDO ALL' UTENTE IL SUO INDIRIZZO EMAIL
let richiestaEmail = prompt('Qual è il tuo indirizzo e-mail?');
console.log(richiestaEmail);

// const button = document.getElementById("myBtn");



// CONFRONTO LA MAIL UTENTE CON QUELLE DELLA LISTA CON UN CICLO FOR ()

for (i = 0; i >= lista.length; i++) { }



if (richiestaEmail == lista[i]) {
    alert("PUOI ACCEDERE")
} else {
    alert("NON PUOI ACCEDERE")
}


// document.getElementById('pippo').value;
