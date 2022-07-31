function fight(enemy) {
  enemy.life -= this.attack;
  console.log(`${this.name} fight ${enemy.name}(${enemy.life})`);
};


const doomGuy = {
  name: 'Doomguy',
  life: 10,
  attack: 2,
  fight
};

const cyberDemon = {
  name: 'Cyberdemon',
  life: 15,
  attack: 1,
  fight
};

doomGuy.fight(cyberDemon);
