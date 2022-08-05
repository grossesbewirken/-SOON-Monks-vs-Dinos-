 // import dinoVeloceraptor from "./fighters.js";


function fight(enemy) {
  enemy.life -= this.attack;
  console.log(`${this.name} fight ${enemy.name}`);
  console.log(`${this.name}-life: ${this.life}`);
  console.log(`${enemy.name}-life: ${enemy.life}`);
}


function round(figure1, figure2){
  while(figure1.life > 0 && figure2.life > 0) { // ende wenn bedingung erfüllt 
      let rnd = Math.random(); //rnd = random: 0-1 0,1 0,2 0,3... 0,9 rnd = ->
      if(rnd < 0.5) {
      figure2.fight(figure1);
      } else {
      figure1.fight(figure2);
      }
  }
  if(figure1.life <= 0) {
      return figure2;//rnd = random: 0-1 0,1 0,2 0,3... 0,9 rnd = ->
  } else {
      return figure1;
  }
}




// function round(f1, f2) {
//   // console.log(`\n\n---------------- Runde ${i+1} ----------------\n`);
//   while(f1.life > 0 && f2.life > 0) { // ende wenn bedingung erfüllt 
//     let rnd = Math.random(); //rnd = random: 0-1 0,1 0,2 0,3... 0,9 rnd = ->
//     if(rnd < 0.5) {
//     f2.fight(f1);
//     } else {
//     f1.fight(f2);
//     }
//     if(f1.life <= 0) {
//       return f2;//rnd = random: 0-1 0,1 0,2 0,3... 0,9 rnd = ->
//   } else {
//       return f1;
//   }
//     }
//   }



  // for (let i = 0; i < 10; i++) {
  //   console.log(`\n\n---------------- Runde ${i+1} ----------------\n`);
  //   if (this.life < 1 ){
  //     console.log(`${this.name} was killed by ${enemy.name}`);
  //     break;
  //   } else {
  //       enemy.life -= this.attack;
  //       console.log(`${this.name} fight ${enemy.name}`);
  //       console.log(`${this.name}-life: ${this.life}`);
  //       console.log(`${enemy.name}-life: ${enemy.life}`);
  //   }


const fighter1 = {
  name: 'fighter1',
  life: 10,
  attack: 2,
  fight
};

const fighter2 = {
  name: 'fighter2',
  life: 15,
  attack: 1,
  fight
};


const ergebnis = round(fighter1, fighter2);
console.log(`Nach dem kampf hat ${ergebnis.name} gewonnen und hat noch ${ergebnis.life} Lebenspunkt${ergebnis.life > 1 ? 'e' : ''} übrig`);