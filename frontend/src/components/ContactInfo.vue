<template>
    <div class="contact-info">
      <h2>Contact Information</h2>
  
      <div class="info-item">
        <span class="label">Phone:</span>
        <span class="value">123-456-7890</span>
      </div>
  
      <div class="info-item">
        <span class="label">Email:</span>
        <span class="value">info@example.com</span>
      </div>
  
      <div class="info-item">
        <span class="label">Address:</span>
        <span class="value">123 Main St, Cityville</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactInfo',
  };
  </script>
  
  <style scoped>
  .contact-info {
    text-align: center;
    margin-top: 30px;
  }
  
  .info-item {
    margin-bottom: 10px;
  }
  
  .label {
    font-weight: bold;
    margin-right: 5px;
  }
  
  /* Add additional styles as needed */
  </style>
  