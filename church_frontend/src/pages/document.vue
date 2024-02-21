<template>
  <div id="app">
    <h2 v-if="!selectedDocument">Available Documents</h2>

    <!-- Show the documents grid if no document is selected -->
    <div v-if="!selectedDocument" class="documents-grid">
      <div 
        v-for="doc in documents" 
        :key="doc.title"
        class="document-card"
        @click="selectDocument(doc)"
      >
        <h4>{{ doc.title }}</h4>
        <p>Status: {{ doc.status }}</p>
      </div>
    </div>
    
    <!-- Document Request Form -->
    <q-form v-if="selectedDocument && !showPaymentForm && !showConfirmation" class="request-form">
      <!-- Back button with the icon and text "GO BACK" -->
      <q-btn @click="selectedDocument = null" class="back-button" color="primary">
        <q-icon name="arrow_back"></q-icon> GO BACK
      </q-btn>
      
      <!-- Displaying the document request form -->
      <q-card class="request-content">
        <q-card-section>
          <h3 style="margin-bottom: 20px;">Requesting {{ selectedDocument.title }}</h3>
          <q-form @submit="submitRequest">
            <div class="q-gutter-md">
              <q-input v-model="name" label="Name" outlined required></q-input>
              <q-input v-model="number" label="Number" outlined required type="number"></q-input>
              <q-input v-model="email" label="Email" outlined required type="email"></q-input>
              <q-input v-model="address" label="Address" outlined required></q-input>
            </div>
            <div class="q-gutter-md">
              <q-btn type="submit" label="Submit" color="primary"></q-btn>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-form>

    <!-- New Form for Payment Details -->
    <q-form v-if="showPaymentForm && !showConfirmation" class="payment-form">
      <q-card class="payment-content">
        <q-card-section>
          <h3 style="margin-bottom: 20px;">Payment Details</h3>
          <form @submit.prevent="submitPayment">
            <div class="q-gutter-md">
              <q-select v-model="paymentOption" label="Payment Option" outlined :options="paymentOptions" required></q-select>
              <q-select v-model="paymentChannel" label="Payment Channel" outlined :options="paymentChannels" required></q-select>
              <q-input v-model="fee" label="Fee" outlined required type="number"></q-input>
              <q-select v-model="shippingOption" label="Shipping Option" outlined :options="shippingOptions" required></q-select>
            </div>
            <div class="q-gutter-md">
              <q-btn type="submit" label="Submit Payment" color="primary"></q-btn>
            </div>
          </form>
        </q-card-section>
      </q-card>
    </q-form>

    <!-- Confirmation Message after Payment -->
    <div v-if="showConfirmation" class="confirmation-message">
      <h3>Your document request has been confirmed.</h3>
      <p>Please wait for your updates through your email address!</p>
      <q-btn @click="showDocumentSelection" label="Review" color="primary"></q-btn>
      <q-btn @click="exit" label="Exit" color="primary"></q-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documents: [
        { title: "MARRIAGE CERTIFICATE", status: "Available" },
        { title: "BAPTISMAL CERTIFICATE", status: "Available" },
        { title: "MASS CARDS", status: "Available" }
      ],
      selectedDocument: null,
      name: '',
      number: '',
      email: '',
      address: '',
      showPaymentForm: false,
      showConfirmation: false,
      paymentOption: '',
      paymentChannel: '',
      fee: '',
      shippingOption: '',
      paymentOptions: ['Credit Card', 'Debit Card', 'PayPal'],
      paymentChannels: ['Online', 'Offline'],
      shippingOptions: ['Pick Up', 'Delivery']
    };
  },
  methods: {
    selectDocument(doc) {
      this.selectedDocument = doc;
    },
    submitRequest() {
      console.log('Form submitted:', this.name, this.email, this.address);
      this.showPaymentForm = true;
    },
    submitPayment() {
      console.log('Payment submitted:', this.paymentOption, this.paymentChannel, this.fee, this.shippingOption);
      this.showPaymentForm = false;
      this.showConfirmation = true;
    },
    showDocumentSelection() {
      this.showConfirmation = false;
      this.selectedDocument = null;
    },
    exit() {
      this.showConfirmation = false;
      this.selectedDocument = null;
    }
  }
}
</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #ffaa2b;
margin-top: 30px;
}

h2 {
margin-bottom: 30px;
color: #ffaa2b;
}

.documents-grid {
  display: flex;
flex-wrap: wrap;
justify-content: center; /* Centering the items horizontally */
padding-left: 20px;      /* Adding space on the left */
padding-right: 20px;     /* Adding space on the right */
margin-top: 50px;
}

.document-card {
border: 1px solid #ccc;
background-color: #760e0e;
color: #ffaa2b;
border-radius: 4px;
padding: 15px;
text-align: center;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
cursor: pointer;
margin-bottom: 50px;

margin-left: 20px;
margin-right: 20px;

width: 400px;  /* You can adjust this value based on your preference */
height: 250px; /* You can adjust this value based on your preference */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.document-card:hover {
background-color: #760e0e;
}

.request-form {
text-align: center;
padding: 20px;
color: #ffaa2b;
margin-top: 20px;
margin-bottom: 20px;
border-radius: 4px;
position: relative;
background-color: #760e0e; /* Setting background color to #ffaa2b */
}

.back-button {
color: #ffaa2b;
position: absolute;
top: -5px;
left: -20px;
z-index: 1;
background-color: transparent;
border: none;
cursor: pointer;
padding: 15px 30px; 
font-size: 1.2em;  
}

.request-content {
display: flex;
flex-direction: column;
color: #ffaa2b;
align-items: center;
text-align: center;
}


.vertical-form label {
  margin-bottom: 10px; /* Add margin below each label */
}

.vertical-form input {
  margin-bottom: 20px; /* Add margin below each input */
  width: 100%; /* Make sure the input fields take full width */
  padding: 8px; /* Optional padding for better appearance */
}

  .confirmation-message {
    margin-top: 50px;
    padding: 20px;
    
    border-radius: 4px;
    background-color: #760e0e;
    color: #ffaa2b;
    text-align: center;
  }

  .confirmation-message button {
    margin-top: 20px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #ffaa2b;
    border: none;
    border-radius: 4px;
    color: black;
    font-size: 1em;
  }

  .confirmation-message button:hover {
    background-color: #ffaa2b;
    color: #760e0e;
  }
</style>

