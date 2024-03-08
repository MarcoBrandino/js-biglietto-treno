// Chiedere all'utente il numero di chilometri che vuole percorrere
const chilometriDaPercorrere = parseInt(prompt("Quanti chilomenti vuoi percorrere?"));
console.log("Vuoi percorrere:", chilometriDaPercorrere, "chilometri");

// Chiedere all'utente l'età del passeggero
const eta = parseInt(prompt("Quanti anni hai?"));
console.log("Hai", eta, "anni");

let prezzoBiglietto = chilometriDaPercorrere * 0.21;
console.log("Il prezzo del biglietto intero è:", prezzoBiglietto, "€");

// Se l'età è inferiore a 18 anni applica uno sconto del 20%
if (eta < 18) {
    const sconto = prezzoBiglietto * 20 / 100;
    prezzoBiglietto = prezzoBiglietto - sconto;
    console.log("Hai meno di 18 anni e hai diritto a uno sconto del 20% uguale a ", sconto, "€");
    console.log("Il prezzo del biglietto con tutti i decimali è:", prezzoBiglietto, "€");
    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    console.log("Il prezzo del biglietto è di:", prezzoBiglietto, "€");
}
// ALTRIMENTI SE l'età è maggiore a 65 anni applica uno sconto del 40%
else if (eta > 65) {
    const sconto = prezzoBiglietto * 40 / 100;
    prezzoBiglietto = prezzoBiglietto - sconto;
    console.log("Hai 65 anni o più e hai diritto a uno sconto del 40% uguale a ", sconto, "€");
    console.log("Il prezzo del biglietto con tutti i decimali è:", prezzoBiglietto, "€");
    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    console.log("Il prezzo del biglietto è di:", prezzoBiglietto, "€");
}
// ALTRIMENTI biglietto intero
else {
    console.log("Il prezzo del biglietto con tutti i decimali è:", prezzoBiglietto, "€");
    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    console.log("Il prezzo del biglietto è:", prezzoBiglietto, "€");
}