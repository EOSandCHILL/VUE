<template>
  <li>
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
  </li>
</template>

<script>
export default {
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
};
</script>
