const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  watch: {
    //
  },
  computed: {
    //
  },
});

app.component("friend-contact", {
  template: `<li>
  <h2>{{ friend.name }}</h2>
  <button @click="toggleDetails">
    {{ detailsAreVisible ? "Hide" : "Show" }} Details
  </button>
  <ul v-if="detailsAreVisible">
  <li><strong>Age:</strong> {{ friend.age }}</li>
  <li><strong>Occupation:</strong> {{ friend.occupation }}</li>
  <li><strong>Tech Stack:</strong> {{ friend.stack }}</li>
    <li><strong>Phone:</strong> {{ friend.phone }}</li>
    <li><strong>Email:</strong> {{ friend.email }}</li>
  </ul>
</li>`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "jerry",
        name: "mackintech.eth",
        age: 30,
        occupation: "Software Engineer",
        stack: "Vue.JS, React.JS, Java, Node.JS, SQL, Docker, AWS",
        phone: "803-703-3353",
        email: "mackintechofficial@gmail.com",
      },
    };
  },
  watch: {
    //
  },
  computed: {
    //
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
