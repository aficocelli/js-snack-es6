/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/


let bike = [
  {
    nome: "Atala",
    peso: 800
  },
  {
    nome: "Santa Cruz",
    peso: 1200
  },
  {
    nome: "Kona",
    peso: 1800
  }
];

let peso = bike[0].peso;



for (var i = 0; i < bike.length; i++){

  if (peso < bike[i].peso == false){

    var {nome} = bike[i];

    peso = bike[i].peso;

  }

}

console.log( `La bici più leggera è ${nome}, con un peso di: ${peso}`);
