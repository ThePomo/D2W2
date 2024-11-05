/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 5
let numero2 = 11

let maggiore = (numero1, numero2);
console.log("Il numero maggiore è:", maggiore);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero3 = 3
let numero4 = 5
if (numero4 == numero3) { console.log("equal"); }
else { console.log("not equal"); }


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero5 = 25
if (numero5 / 5)
  console.log("divisibile per 5");
else {
 console.log (" il numero non è divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero6 = 6
let numero7 = 2
if (numero6 + numero7) { console.log("8") };
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 40;
const spedizione = 10;
let cart;

if (totalShoppingCart <= 50) {
  totalShoppingCart = totalShoppingCart + spedizione;
}
{
  console.log('Il totale della spedizione è: ' + totalShoppingCart);
}



/* Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 10;
let b = 6;
let c = 8;
let primo, secondo, terzo;

if (a >= b && a >= c) {
  primo = a;
  if (b >= c) {
    secondo = b;
    terzo = c;
  } else {
    secondo = c;
    terzo = b;
  }
} else if (b >= a && b >= c) {
  primo = b;
  if (a >= c) {
    secondo = a;
    terzo = c;
  } else {
    secondo = c;
    terzo = a;
  }
} else {
  primo = c;
  if (a >= b) {
    secondo = a;
    terzo = b;
  } else {
    secondo = b;
    terzo = a;
  }
}

console.log("Ordinati dal più alto al più basso:", primo, secondo, terzo);
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let = 10; {
  if (typeof 10 === "number") {
    console.log("è un numero");
  }
  else {
    console.log("non è un numero")
  }

}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let pari = 10;
if (pari % 2 === 0) {
  console.log("Il numero è pari");
}
else {
  console.log("è un numero dispari")
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5"); l'errore penso sia qui 
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
if (val < 10) {
  console.log("Meno di 5");
} else if (val < 5) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let primoArray = [] /*vuoto*/
let ilMioArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(ilMioArray)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let SecondoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100]
console.log(SecondoArray)
