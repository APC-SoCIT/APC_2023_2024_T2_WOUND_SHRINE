<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="childName">Child's Name:</label>
        <input type="text" id="childName" v-model="formData.childName" required>
      </div>
      <div>
        <label for="fatherName">Father's Name:</label>
        <input type="text" id="fatherName" v-model="formData.fatherName" required>
      </div>
      <div>
        <label for="motherName">Mother's Name:</label>
        <input type="text" id="motherName" v-model="formData.motherName" required>
      </div>
      <div>
        <label for="kuyaName">Kuya Name:</label>
        <input type="text" id="kuyaName" v-model="formData.kuyaName" required>
      </div>
      <!-- Add more fields specific to the baptism form -->
      <q-btn type="submit" label="Submit Baptism Request" size="lg" class="custom-btn" />
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          childName: '',
          fatherName: '',
          motherName: '',
          kuyaName: '',
          // Add more fields as needed
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic specific to the baptism form
        console.log('Baptism form submitted with data:', this.formData);
          // Emit an event to notify the parent component (Services.vue) about the form submission
         this.$emit('formSubmitted');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Button styling */
  .custom-btn {
    margin-top: 20px; /* Adjust the margin as needed */
    width: 30%; /* Set the width to 100% */
    background-color: #ffaa2b; /* Set the button color */
    color: white; /* Set the text color */
  }
  </style>
  