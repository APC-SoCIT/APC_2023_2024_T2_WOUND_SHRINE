<template>
  <div class="services">
    <!-- Display header only if no service is selected -->
    <h2 v-if="!selectedService && !formSubmitted">SERVICES</h2>

    <!-- List of Services -->
    <div v-if="!selectedService && !showRequestForm && !formSubmitted">
      <div class="box" v-for="service in services" :key="service.name" @click="showServiceDetails(service)">
        {{ service.name }}
      </div>
    </div>

    <!-- Display selected service details -->
    <div v-if="selectedService && !showRequestForm && !formSubmitted">
      <h2>Details for {{ selectedService.name }}</h2>
      <div>
        <!-- Left side: FAQ & Process -->
        <div class="details-left">
          <h3>FAQ & Process</h3>
          <ul>
            <li v-for="(step, index) in selectedService.process" :key="index">{{ step }}</li>
          </ul>
        </div>
        <!-- Right side: Requirements -->
        <div class="details-right">
          <h3>Requirements</h3>
          <ul>
            <li v-for="(requirement, index) in selectedService.requirements" :key="index">{{ requirement }}</li>
          </ul>
        </div>
      </div>
      <!-- Go Back button -->
      <button class="back-button" @click="selectedService = null">
        <q-icon name="arrow_back" color="#ffaa2b"></q-icon>Go Back
      </button>
      <!-- Title of the form -->
      <h3>{{ selectedService.name }} Form</h3>
      <!-- Integrated request form here -->
      <component :is="selectedServiceFormComponent" @formSubmitted="handleFormSubmitted" />
    </div>

    <!-- Message after submitting the form -->
    <div v-if="formSubmitted" class="message">
      <h3>Your request has been submitted.</h3>
      <p>Please wait for our confirmation through your email address!</p>
      <!-- Button to review the reservation form -->
      <button class="review-button" @click="reviewReservation">Review Reservation</button>
      <!-- Button to exit and go back to services -->
      <button class="exit-button" @click="exitReservation">Exit</button>
    </div>
  </div>
</template>

<script>
import BaptismForm from "./form/BaptismForm.vue";
// Import other service form components here

export default {
  name: "Services",
  components: {
    BaptismForm
    // Register other service form components here
  },
  data() {
    return {
      services: [
        {
          name: 'Baptism',
          process: [
            'Contact the church.',
            'Schedule the baptism.'
          ],
          requirements: [
            'Birth certificate',
            'Godparents'
          ],
          formComponent: 'BaptismForm'
          // Add formComponent property to other services with corresponding form component names
        },
        // Add other service objects here
      ],
      selectedService: null,
      showRequestForm: false,
      formSubmitted: false
    };
  },
  computed: {
    selectedServiceFormComponent() {
      return this.selectedService ? this.selectedService.formComponent : null;
    }
  },
  methods: {
    showServiceDetails(service) {
      this.selectedService = service;
    },
    handleFormSubmitted() {
      this.formSubmitted = true;
      this.selectedService = null; // Hide selected service details
      this.showRequestForm = false; // Hide request form
    },
    reviewReservation() {
      // Handle logic to review the reservation form. For now, log a message.
      console.log('Reviewing reservation form...');
      // You can navigate to another route or display more detailed information here.
    },
    exitReservation() {
      // Reset formSubmitted to false and navigate back to services.
      this.formSubmitted = false;
    }
  }
};
</script>

<style scoped>
.services {
  text-align: center;
  color: #ffaa2b;
  margin: auto;
  margin-top: 50px;
}

.box {
  background-color: #ffaa2b;
  text-align: center;
  color: black;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 450px;
  height: 150px;
  cursor: pointer;
  display: inline-block;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}

.box:hover {
  background-color: #ffaa2b;
}

.details-left, .details-right {
  width: 40%;
  display: inline-block;
  vertical-align: top;
}

.details-left {
  margin-right: 2%;
}

.details-left ul,
.details-right ul {
  text-align: justify;
}

.details-left li,
.details-right li {
  display: inline-block;
  width: 80%;
  padding: 5px 0;
}

.back-button {
  position: absolute;
  top: -10px;
  left: -10px;
  color: #ffaa2b;
}

.next-button {
  background-color: #ffaa2b;
  color: black;
  position: absolute;
  bottom: -100px;
  right: 10px;
}

form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.review-button {
  background-color: #ffaa2b;
  color: black;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.review-button:hover {
  background-color: #e2e6ea;
  color: #ffaa2b;
}

.exit-button {
  background-color: #ffaa2b;
  color: black;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.exit-button:hover {
  background-color: #e2e6ea;
  color: #ffaa2b;
}
</style>
