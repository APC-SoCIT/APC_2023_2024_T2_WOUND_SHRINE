<template>
  <div id="app">
    <nav>
      <ul>
      <router-link to="/">Home Page </router-link>
      <router-link to="/about">About Page </router-link>
      <router-link to="/ServicesComponent">Services Component </router-link>
      <router-link to="/contact">Contact </router-link>
    </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
  /* Your styling goes here */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #760e0e;
  }

  nav {
    background-color: #ffaa2b;
    overflow: hidden;
    height: 2em;
    display:flex;
    justify-content:center;
    color: black;
  }

  ul {
    color: black;
    margin: auto;
    width:80%;
    display:flex;
    justify-content:space-between;
  }

  router-link {
    display: inline-block;
    color: black;
    color: rgb(0, 0, 0);
    text-decoration: none;
    display:flex;
    
  }

  router-link:hover {
    background-color: #000000;
    color: rgb(0, 0, 0);
  }
</style>
