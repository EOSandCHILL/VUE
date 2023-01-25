const app = Vue.createApp({
  data() {
    return {
      userText: "",
      textConfirmed: "",
    };
  },
  methods: {
    showAlert() {
      alert("ALERT! ALERT! ALERT!");
    },
    userInput(event) {
      this.userText = event.target.value;
    },
    inputConfirmation() {
      this.textConfirmed = this.userText;
    },
  },
});
app.mount("#assignment");
