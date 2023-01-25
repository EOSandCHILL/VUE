const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      nameConfirmed: "",
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    addName(event) {
      this.name = event.target.value;
    },
    signUp() {
      // event.preventDefault();
      alert("Submitted!");
    },
    confirmation() {
      this.nameConfirmed = this.name;
    },
  },
});

app.mount("#events");
