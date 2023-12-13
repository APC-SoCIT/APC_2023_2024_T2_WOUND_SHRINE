<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="register">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="registerData.username" required />
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="registerData.password" required />
  
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        registerData: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      register() {
        // Handle registration logic (e.g., send data to the server)
        console.log('Registration data:', this.registerData);
      },
    },
  };
  </script>