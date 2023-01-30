<template>
  <li>
    <h2>{{ fullName }} {{ isFavorite === true ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Age:</strong> {{ currentAge }}</li>
      <li><strong>Occupation:</strong> {{ currentOccupation }}</li>
      <li><strong>Skills:</strong> {{ currentSkills }}</li>
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: [
  //   "fullName",
  //   "currentAge",
  //   "currentOccupation",
  //   "currentSkills",
  //   "phoneNumber",
  //   "emailAddress",
  // ],
  props: {
    id: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    currentAge: {
      type: String,
      required: true,
    },
    currentOccupation: {
      type: String,
      required: true,
    },
    currentSkills: {
      type: String,
      required: false,
      default: "N/A",
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
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
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
