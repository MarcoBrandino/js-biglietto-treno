// Chiedere all'utente il numero di chilometri che vuole percorrere
const chilometriDaPercorrere = parseInt(prompt("Quanti chilomenti vuoi percorrere?"));
console.log("Vuoi percorrere:", chilometriDaPercorrere, "chilometri");

// Chiedere all'utente l'età del passeggero
const eta = parseInt(prompt("Quanti anni hai?"));
console.log("Hai", eta, "anni");

let prezzoBiglietto = chilometriDaPercorrere * 0.21;
console.log("Il prezzo del biglietto intero è:", prezzoBiglietto, "€");

if (eta < 18) {
    const sconto = prezzoBiglietto * 20 / 100;
    prezzoBiglietto = prezzoBiglietto - sconto;
    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    console.log("Hai meno di 18 anni e hai diritto a uno sconto del 20% uguale a ", sconto, "€")
    console.log("Il prezzo del biglietto è di:", prezzoBiglietto, "€")
}
else if (eta >= 65) {
    const sconto = prezzoBiglietto * 40 / 100;
    prezzoBiglietto = prezzoBiglietto - sconto;
    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    console.log("Hai 65 anni o più e hai diritto a uno sconto del 40% uguale a ", sconto, "€")
    console.log("Il prezzo del biglietto è di:", prezzoBiglietto, "€")
}
else {
    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    console.log("Il prezzo del biglietto è:", prezzoBiglietto, "€");
}