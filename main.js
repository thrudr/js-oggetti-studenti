//1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome, età e peso.

let studente = {
    nome: "Josoeldo",
    cognome: "Pereira",
    età: "20",
    peso: "80 kg"
};

//2. Stampare in console attraverso un ciclo for-in tutte le proprietà dell'oggetto con anche i relativi valori.

for (let key in studente){
    console.log(studente[key])
};

//3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).

