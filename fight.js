// import dinoVeloceraptor from "./fighters.js";


// function fight(enemy) {
//   enemy.life -= this.attack;
//   console.log(`${this.name} fight ${enemy.name}`);
//   console.log(`${this.name}-life: ${this.life}`);
//   console.log(`${enemy.name}-life: ${enemy.life}`);
// };



function fight(enemy) {
  for (let i = 0; i < 10; i++) {
    console.log(`\n\n---------------- Runde ${i+1} ----------------\n`);
    if (this.life < 1 ){
      console.log(`${this.name} was killed by ${enemy.name}`);
      break;
    } else {
        enemy.life -= this.attack;
        console.log(`${this.name} fight ${enemy.name}`);
        console.log(`${this.name}-life: ${this.life}`);
        console.log(`${enemy.name}-life: ${enemy.life}`);
    }
  }
}


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


fighter1.fight(fighter2);