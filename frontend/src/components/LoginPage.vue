<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="loginData.username" required />
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="loginData.password" required />
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loginData: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      login() {
        // Handle login logic (e.g., send data to the server)
        console.log('Login data:', this.loginData);
      },
    },
  };
  </script>
  