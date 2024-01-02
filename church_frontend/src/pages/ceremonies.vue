<template>
    <div class="services">
       <h1>Services</h1>
       <div class="box" v-for="service in services" :key="service" @click="selectedService = service">
         {{ service }}
       </div>
       <div v-if="selectedService">
         <h2>Selected Service</h2>
         <p>{{ selectedService }}</p>
       </div>
    </div>
   </template>
   
   <script>
   export default {
    name: 'Services',
    data() {
       return {
         services: [
           'Wedding',
           'Baptism',
           'Ceremonies Reservation',
           'Confession',
           'Confirmation',
           'Counseling',
           'House Blessing',
           'Anointing of the Sick'
         ],
         selectedService: ''
       }
    }
   }
   </script>
   
   <style scoped>
   .services {
    text-align: center;
   }
   
   .box {
    background-color: #f8f9fa;
    padding: 20px;
    margin: 20px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    width: 250px; /* increase the width */
    cursor: pointer;
    display: inline-block; /* display them in a line */
   }
   
   .box:hover {
    background-color: #e2e6ea;
   }
   
   .box-container { /* add this container */
    width: 80%; /* adjust the width */
    margin: 0 auto; /* center it */
   }
   </style>