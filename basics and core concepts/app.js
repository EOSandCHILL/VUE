const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finished the course and learned Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
app.mount("#user-goal");
