function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// since we have the same formula for calculating a random number at attack monster and attack player wwe can get rid of the redundancy and create a single function that we can use in both functions. We can use a regualr JS function and not a Vue method because this will be a function thaat we would only call incside of our javascript code which will not use any Vue controlled data properties and it will not be called inside of our template/HTML code. If you dont need access to vue controlled properties, youre not calling the function from inside HTML, and youre only using it from inside the JS code then you can write and use a regular javascript function.

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  watch: {
    //
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    specialAttackAvailable() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
  },
});
app.mount("#game");
