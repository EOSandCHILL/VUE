const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finished the course and learned VUE",
      vueLink: "https://vuejs.org",
    };
  },
});

app.mount("#user-goal");
