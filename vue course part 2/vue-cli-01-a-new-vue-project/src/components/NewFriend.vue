<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Age</label>
      <input type="text" v-model="enteredAge" />
    </div>
    <div>
      <label>Occupation</label>
      <input type="text" v-model="enteredOccupation" />
    </div>
    <div>
      <label>Skills</label>
      <input type="text" v-model="enteredSkills" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhoneNumber" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="enteredEmailAddress" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    id: {
      //
    },
  },
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
      enteredOccupation: "",
      enteredSkills: "",
      enteredPhoneNumber: "",
      enteredEmailAddress: "",
    };
  },
  watch: {
    //
  },
  computed: {
    //
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredAge,
        this.enteredOccupation,
        this.enteredSkills,
        this.enteredPhoneNumber,
        this.enteredEmailAddress
      );
    },
  },
};
</script>
