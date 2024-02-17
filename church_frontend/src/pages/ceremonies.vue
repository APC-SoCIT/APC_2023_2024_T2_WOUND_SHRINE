<template>
  <div class="services">
    <!-- Display header only if no service is selected -->
    <h2 v-if="!selectedService">SERVICES</h2>

    <!-- List of Services -->
    <div v-if="!selectedService && !showRequestForm">
      <div class="box" v-for="service in services" :key="service.name" @click="showServiceDetails(service)">
        {{ service.name }}
      </div>
    </div>

    <!-- Display selected service details -->
    <div v-if="selectedService && !showRequestForm">
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
      <!-- Next button -->
      <button class="next-button" @click="showRequestForm = true">Next</button>
    </div>

    <!-- Request Form for selected service -->
    <div v-if="selectedService && showRequestForm && !formSubmitted">
      <!-- Additional Go Back button here -->
      <button class="back-button" @click="showRequestForm = false">
        <q-icon name="arrow_back" color="#ffaa2b"></q-icon>Go Back
      </button>
      <h3>Request Form for {{ selectedService.name }}</h3>
      <!-- Integrated request form here -->
      <form @submit.prevent="submitForm(selectedService)">
        <div v-for="(field, index) in selectedService.formFields" :key="index">
          <label :for="field.id">{{ field.label }}:</label>
          <template v-if="field.type === 'text' || field.type === 'email' || field.type === 'datetime-local' || field.type === 'file' || field.type === 'number'">
            <input :type="field.type" :id="field.id" v-model="formData[field.id]" :required="field.required">
          </template>
          <template v-else-if="field.type === 'select'">
            <select :id="field.id" v-model="formData[field.id]" :required="field.required">
              <option v-for="(option, index) in field.options" :key="index" :value="option.value">{{ option.label }}</option>
            </select>
          </template>
        </div>
        <button type="submit">Submit Information Form</button>
      </form>
    </div>

    <!-- Message after submitting the form -->
    <div v-if="formSubmitted">
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
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          name: 'Wedding',
          process: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          ],
          requirements: [
            'Marriage license',
            'Church approval'
          ],
          formFields: [
            { id: 'name', label: 'Name', type: 'text', required: true },
            { id: 'fatherName', label: "Father's Name", type: 'text', required: true },
            { id: 'motherName', label: "Mother's Name", type: 'text', required: true },
            { id: 'phoneNumber', label: 'Phone Number', type: 'text', required: true },
            { id: 'email', label: 'Email', type: 'email', required: true },
            // Add more fields as needed
          ]
        },
        {
          name: 'Baptism',
          process: [
            'Contact the church.',
            'Schedule the baptism.'
          ],
          requirements: [
            'Birth certificate',
            'Godparents'
          ]
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
          ]
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
          ]
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
          ]
        },
        {
          name: 'Anointing of the Sick',
          process: [
            'Contact the church.',
            'Schedule the baptism.'
          ],
          requirements: [
            'Birth certificate',
            'Godparents'
          ]
        },
        // Add more services with their respective form fields
      ],
      selectedService: null,
      showRequestForm: false,
      formData: {},
      formSubmitted: false, // New state to track form submission
    };
  },
  methods: {
    showServiceDetails(service) {
      this.selectedService = service;
    },
    submitForm(selectedService) {
      // Mocking form submission logic here
      console.log(this.formData);
      this.formSubmitted = true; // Set formSubmitted to true after form submission
    },
    reviewReservation() {
      // Handle logic to review the reservation form. For now, log a message.
      console.log('Reviewing reservation form...');
      // You can navigate to another route or display more detailed information here.
    },
    exitReservation() {
      // Reset formSubmitted to false and navigate back to services.
      this.formSubmitted = false;
      this.selectedService = null; // Reset the selected service
      this.showRequestForm = false; // Hide the request form
    },
  },
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
  background-color: #e2e6ea;
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
