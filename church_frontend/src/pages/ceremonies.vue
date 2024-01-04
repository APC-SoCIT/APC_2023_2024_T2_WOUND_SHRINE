<template>
  <div class="services">
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
          <p>{{ selectedService.process }}</p>
        </div>
        <!-- Right side: Requirements -->
        <div class="details-right">
          <h3>Requirements</h3>
          <p>{{ selectedService.requirements }}</p>
        </div>
      </div>
      <!-- Go Back button -->
      <button class="back-button" @click="selectedService = null">
        <q-icon name="arrow_back" color="#ffaa2b"></q-icon>Go Back
      </button>
      <!-- Next button -->
      <button class="next-button" @click="showRequestForm = true">Next</button>
    </div>
    
    <!-- Request Form -->
    <div v-if="showRequestForm">
      <h3>Request Form for {{ selectedService.name }}</h3>
      <!-- Integrated request form here -->
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div>
          <label for="father">Father's Name:</label>
          <input type="text" id="father" v-model="formData.fatherName" required>
        </div>
        <div>
          <label for="mother">Mother's Name:</label>
          <input type="text" id="mother" v-model="formData.motherName" required>
        </div>
        <div>
          <label for="phone">Phone Number:</label>
          <input type="text" id="phone" v-model="formData.phoneNumber" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div>
          <label for="godparents">List of God Parents:</label>
          <input type="text" id="godparents" v-model="formData.godParents" required>
        </div>
        <div>
          <label for="preferredTime">Prefered Time:</label>
          <input type="datetime-local" id="preferredTime" v-model="formData.preferredTime" required>
        </div>
        <div>
          <label for="alternateTime">Alternate Time:</label>
          <input type="datetime-local" id="alternateTime" v-model="formData.alternateTime" required>
        </div>
        <div>
          <label for="attendees">Number of Attendees:</label>
          <input type="number" id="attendees" v-model="formData.attendees" required>
        </div>
        <div>
          <label for="churchOrCivil">Wedding Type:</label>
          <select id="churchOrCivil" v-model="formData.weddingType" required>
            <option value="church">Church Wedding</option>
            <option value="civil">Civil Ceremony</option>
          </select>
        </div>
        <div>
          <label for="service">Service Type:</label>
          <select id="service" v-model="formData.serviceType" required>
            <option value="fullService">Full Service</option>
            <option value="partialService">Partial Service</option>
          </select>
        </div>
        <div>
          <label for="attachment">Attachment:</label>
          <input type="file" id="attachment" @change="handleFileUpload">
        </div>
        <button type="submit">Submit Information Form</button>
      </form>
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
          process: 'Choose a date -> Book venue -> Invite guests...',
          requirements: 'Marriage license -> Church approval...'
        },
        {
          name: 'Baptism',
          process: 'Contact the church -> Schedule the baptism...',
          requirements: 'Birth certificate -> Godparents...'
        },
        {
          name: 'Confession',
          process: 'Prepare spiritually -> Approach the confessional...',
          requirements: 'Examination of conscience...'
        },
        {
          name: 'Confirmation',
          process: 'Attend catechism -> Choose a sponsor...',
          requirements: 'Confirmation classes -> Baptismal certificate...'
        },
        {
          name: 'House Blessing',
          process: 'Contact the parish -> Schedule the blessing...',
          requirements: 'Holy water -> Blessed candles...'
        },
        {
          name: 'Anointing of the Sick',
          process: 'Contact the priest -> Schedule the anointing...',
          requirements: 'Serious illness -> Confession...'
        }
      ],
      selectedService: null,
      showRequestForm: false,
      formData: {
        name: '',
        fatherName: '',
        motherName: '',
        phoneNumber: '',
        email: '',
        godParents: '',
        preferredTime: '',
        alternateTime: '',
        attendees: '',
        weddingType: '',
        serviceType: '',
        attachment: null,
      },
    };
  },
  methods: {
    showServiceDetails(service) {
      this.selectedService = service;
    },
    submitForm() {
      console.log(this.formData);  // Handle form submission logic
    },
    handleFileUpload(event) {
      this.formData.attachment = event.target.files[0];
    },
  },
};
</script>

<style scoped>
.services {
  text-align: center;
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
  justify-content: center;    /* Center horizontally */
  align-items: center;        /* Center vertically */
}
.box:hover {
  background-color: #e2e6ea;
}

.details-left, .details-right {
  width: 48%; 
  display: inline-block;
  vertical-align: top;
}

.details-left {
  margin-right: 2%;
}

.back-button {
  position: absolute;
  top: -10px;
  left: -10px;
  color: #ffaa2b;
}

.next-button {
  position: absolute;
  bottom: -100px;
  right: 10px;

}

form {
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: 10px;
}
/* Your other styles remain unchanged */
</style>
