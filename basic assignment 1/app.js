const app = Vue.createApp({
  data() {
    return {
      myName: "Jerry Mack",
      myAge: 30,
      headShot: "jerryheadshot.jpg",
    };
  },

  methods: {
    ageInFiveYears() {
      return this.myAge + 5;
    },
    myFavoriteRandomNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});
app.mount("#assignment");
