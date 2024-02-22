<template>
  <div class="services">
    <!-- Display header only if no service is selected -->
    <h2 v-if="!selectedService && !formSubmitted" style="color: #ffaa2b;">SERVICES</h2>

    <!-- List of Services -->
    <div v-if="!selectedService && !showRequestForm && !formSubmitted" class="service-boxes">
      <div class="box" v-for="service in services" :key="service.name" @click="showServiceDetails(service)">
        {{ service.name }}
      </div>
    </div>

    <!-- Display selected service details -->
    <div v-if="selectedService && !showRequestForm && !formSubmitted">
      <h2 style="color: #ffaa2b;">Details for {{ selectedService.name }}</h2>
      <div>
        <!-- Left side: FAQ & Process -->
        <div class="details-left">
          <h3 style="color: #ffaa2b;">FAQ & Process</h3>
          <ul>
            <li v-for="(step, index) in selectedService.process" :key="index" style="color: white;">{{ step }}</li>
          </ul>
        </div>
        <!-- Right side: Requirements -->
        <div class="details-right">
          <h3 style="color: #ffaa2b;">Requirements</h3>
          <ul>
            <li v-for="(requirement, index) in selectedService.requirements" :key="index" style="color: white;">{{ requirement }}</li>
          </ul>
        </div>
      </div>
      <!-- Go Back button -->
      <button class="back-button" @click="selectedService = null" style="color: black !important;">
        <q-icon name="arrow_back" color="black"></q-icon>Go Back
      </button>
      <!-- Title of the form inside the box -->
      <div class="form-box">
        <h3 style="color: black; background-color: #f0ebf8; padding: 10px;">{{ selectedService.name }} Form</h3>
        <!-- Integrated request form here -->
        <component v-if="!formSubmitted" :is="selectedServiceFormComponent" @formSubmitted="handleFormSubmitted" />
        <!-- Display submitted form data -->
        <div v-if="formSubmitted">
          <h3 style="color: black;">Review Your {{ selectedService.name }} Form</h3>
          <p>Submitted Data:</p>
          <pre>{{ submittedFormData }}</pre>
        </div>
      </div>
    </div>

    <!-- Message after submitting the form -->
    <div v-if="formSubmitted" class="message">
      <h3 style="color: #ffaa2b;">Your request has been submitted.</h3>
      <p style="color: #ffaa2b;">Please wait for our confirmation through your email address!</p>
      <!-- Button to review the reservation form -->
      <button class="review-button" @click="reviewReservation" style="color: black;">Review Reservation</button>
      <!-- Button to exit and go back to services -->
      <button class="exit-button" @click="exitReservation" style="color: black;">Exit</button>
    </div>
  </div>
</template>

<script>
import BaptismForm from "./form/BaptismForm.vue";
import MarriageForm from "./form/MarriageForm.vue";
import ConfessionForm from "./form/ConfessionForm.vue";
import ConfirmationForm from "./form/ConfirmationForm.vue";
import HouseBlessingForm from "./form/HouseBlessingForm.vue";
import AnointingForm from "./form/AnointingForm.vue";
// Import other service form components here

export default {
  name: "Services",
  components: {
    BaptismForm,
    MarriageForm,
    ConfessionForm,
    ConfirmationForm,
    HouseBlessingForm,
    AnointingForm

    // Register other service form components here
  },
  data() {
    return {
      services: [
        {
          name: 'Baptism',
          process: [
          'FAQs',
            'What is Catholic baptism?',
            'Catholic baptism is a sacrament where a person is initiated into the Catholic Church through water and the invocation of the Holy Trinity.',

            'Who can be baptized in the Catholic Church?',
            'Individuals of all ages seeking to become Catholic or to receive the sacrament.',
          ],
          requirements: [
            'Birth certificate',
            'Godparents',
            'Schedule the baptism.',
            'Schedule the baptism.',
            'Schedule the baptism.'
          ],
          formComponent: 'BaptismForm'
          // Add formComponent property to other services with corresponding form component names
        },
        {
          name: 'Marriage',
          process: [
            'Contact the church.',
            'Schedule the baptism.'
          ],
          requirements: [
            'Birth certificate',
            'Godparents'
          ],
          formComponent: 'MarriageForm'
          // Add formComponent property to other services with corresponding form component names
        },
        {
          name: 'Confession',
          process: [
            'Contact the church.',
            'Schedule the baptism.'
          ],
          requirements: [
            'Birth certificate',
            'Godparents'
          ],
          formComponent: 'ConfessionForm'
          // Add formComponent property to other services with corresponding form component names
        },
        {
          name: 'Confirmation',
          process: [
            'Contact the church.',
            'Schedule the baptism.'
          ],
          requirements: [
            'Birth certificate',
            'Godparents'
          ],
          formComponent: 'ConfirmationForm'
          // Add formComponent property to other services with corresponding form component names
        },
        {
          name: 'House Blessing',
          process: [
            'Contact the church.',
            'Schedule the baptism.'
          ],
          requirements: [
            'Birth certificate',
            'Godparents'
          ],
          formComponent: 'HouseBlessingForm'
          // Add formComponent property to other services with corresponding form component names
        },
        {
          name: 'Anointing of the sick',
          process: [
            'Contact the church.',
            'Schedule the baptism.'
          ],
          requirements: [
            'Birth certificate',
            'Godparents'
          ],
          formComponent: 'AnointingForm'
          // Add formComponent property to other services with corresponding form component names
        },
        // Add other service objects here
      ],
      selectedService: null,
      showRequestForm: false,
      formSubmitted: false,
      submittedFormData: null // Store submitted form data
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
    handleFormSubmitted(formData) {
      this.formSubmitted = true;
      this.submittedFormData = formData; // Store submitted form data
      this.selectedService = null; // Hide selected service details
      this.showRequestForm = false; // Hide request form
    },
    reviewReservation() {
      // Handle logic to review the reservation form.
      // For now, just keep formSubmitted as true.
      // You can add more detailed logic here.
      this.formSubmitted = true;
    },
    exitReservation() {
      // Reset formSubmitted, submittedFormData, and selectedService
      this.formSubmitted = false;
      this.submittedFormData = null;
      this.selectedService = null;
    }
  }
};
</script>

<style scoped>
/* Your existing styles */

.services {
  text-align: center;
  color: black;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
}

.service-boxes {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.box {
  border: 1px solid #ccc;
  background-color: #ffaa2b;
  color: black;
  border-radius: 4px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-top: 30px;
  width: calc(33.33% - 40px);
  max-width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px; /* Adjust the font size as needed */
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
  left: 10px;
  background-color: #ffaa2b;
  color: black !important;
  padding: 15px 25px; /* Adjust padding to make the button bigger */
  font-size: 16px; /* Adjust font size as needed */
  border: none;
  border-radius: 5px;
  cursor: pointer;
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


/* Add new styles for the form box */
.form-box {
  background-color: #f0ebf8;
  padding: 20px;
  margin: auto; /* Center horizontally and vertically */
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.06);
  width: 800px;
  max-width: 100%;
  height: 50%;
  margin-bottom: 10px;
}
</style>
