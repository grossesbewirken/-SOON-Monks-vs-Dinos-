import doomPlayer from "./player.js";

const getRandom = (arg) => {
  return Math.floor(Math.random() * arg);
};
const runden = 500;
for (let i = 0; i < runden; i++) {
  const thisRandom = getRandom(doomPlayer.length);
  const enemyRandom = getRandom(doomPlayer.length);
  if (doomPlayer[thisRandom].live < 1 || doomPlayer[enemyRandom].live < 1) {
    break;
  } else {
    if (thisRandom !== enemyRandom) {
      doomPlayer[thisRandom].fight(doomPlayer[enemyRandom]);
      console.log("------------------------------------", i);
    }
    if (i % 2 === 0) {
      doomPlayer[enemyRandom].addLive();
    }
  }
}

console.log(doomPlayer);
