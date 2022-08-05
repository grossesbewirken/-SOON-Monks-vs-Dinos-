function fight(enemy) {
    enemy.life -= this.attack;
    console.log(`${this.name} fight ${enemy.name}(${enemy.life})`);
}

const figure1 = {
    name: 'Doomguy',
    life: 10,
    attack: 2, //faustkampf
    waffe: 5, // X-Waffe 10% Math.Randon <=0.1
    trink: 3, // wenn name.life <= 5 -> trink 
    // "+10hp", //wenn gegner besieht +1 heiltrank 
    fight
};

const figure2 = {
    name: 'Cyberdemon',
    life: 15,
    attack: 1,
    rüstung: 7, //abgezogen 
    fight
};


function kampfSchleife(figure1, figure2){
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


const ergebnis = kampfSchleife(figure1, figure2);
console.log(`Nach dem kampf hat ${ergebnis.name} gewonnen und hat noch ${ergebnis.life} Lebenspunkt${ergebnis.life > 1 ? 'e' : ''} übrig`);



 ______________    _____________    _____________
/              \  /             \  /             \
    {Attacke}         {Parade}       {Ausweichen}
\______________/  \_____________/  \_____________/



{ Attacke }     { Parade }     { Ausweichen }



< Attacke >     < Parade >     < Ausweichen >



===========       ==========       ============== 
- Attacke -       - Parade -       - Ausweichen -
===========       ==========       ==============