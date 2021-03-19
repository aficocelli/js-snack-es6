/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

var teams = [

  {
    nome: "Roma",
    punti: 0,
    falli: 0
  },
  {
    nome: "juventus",
    punti: 0,
    falli: 0
  },
  {
    nome: "Napoli",
    punti: 0,
    falli: 0
  }

];

function numeroRandom (min, max) {
  let numeroRandom = Math.floor(Math.random() * (max - min)) + min;
  return numeroRandom;
}




for (var i = 0; i < teams.length; i++){

  teams[i].punti = numeroRandom(1, 100);

  teams[i].falli = numeroRandom(0, 10);


}

var teamsUpdate = [];


for (var i = 0; i < teams.length; i++){

  const{nome, punti, falli} = teams[i];

  teamsUpdate.push({
    nome: nome,
    falli: falli
  });

}

console.log(teamsUpdate);
