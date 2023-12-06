<template>
  <div id="app">

    <nav>
      <router-link to="/">Home Page</router-link>
      <router-link to="/about">About Page</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <header>
      <h1>Church Request Management System</h1>
    </header>

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

  header {
    background-color: #ffaa2b;
    color: #fff;
    padding: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin-top: auto;
  
  }

  nav {
    background-color: #ffaa2b;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }

  router-link {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  router-link:hover {
    background-color: #ddd;
    color: black;
  }
</style>
