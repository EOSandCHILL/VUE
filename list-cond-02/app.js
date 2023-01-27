const app = Vue.createApp({
  data() {
    return {
      task: [],
      submittedTask: "",
    };
  },
  watch: {
    //
  },
  computed: {
    //
  },
  methods: {
    addTask() {
      this.task.push(this.submittedTask);
    },
    removeTask(idx) {
      this.task.splice(idx, 1);
    },
  },
});

app.mount("#assignment");
