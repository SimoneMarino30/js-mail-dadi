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

const lista = ["primamail@gmail.it", "secondamail@yahoo.it", "terzamail@yahoo.com", "quartamail@outlook.it"]
console.log(lista);

lista.length;
console.log(lista.length);
// CHIEDO ALL' UTENTE IL SUO INDIRIZZO EMAIL

let richiestaEmail = prompt('Qual è il tuo indirizzo e-mail?');
console.log(richiestaEmail);

// CONFRONTO LA MAIL UTENTE CON QUELLE DELLA LISTA CON UN CICLO FOR ()

for (i = 0; i <= lista.length; i++);
// SE LA MAIL UTENTE E' UGUALE A UNA DELLA LISTA
if (richiestaEmail == lista[i]) {
    // PUO' ACCEDERE
    alert("OK");
    // SE LA MAIL UTENTE NON E' UGUALE A UNA DELLA LISTA
} else {
    // NON PUO' ACCEDERE
    alert("NO")
}






