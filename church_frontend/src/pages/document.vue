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
    <div v-if="selectedDocument && !showPaymentForm && !showConfirmation" class="request-form">
      <!-- Back button with the icon and text "GO BACK" -->
      <button @click="selectedDocument = null" class="back-button bigger-button">
        <q-icon name="arrow_back" color="#ffaa2b"></q-icon> GO BACK
      </button>
      
      <!-- Displaying the document request form -->
      <div class="request-content">
        <h3 style="margin-bottom: 20px;">Requesting {{ selectedDocument.title }}</h3>
        <form @submit.prevent="submitRequest">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required>
          
          <label for="number">Number:</label>
          <input type="text" id="number" v-model="number" required>
          
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
          
          <label for="address">Address:</label>
          <input type="text" id="address" v-model="address" required>
                
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>

    <!-- New Form for Payment Details -->
    <div v-if="showPaymentForm && !showConfirmation" class="payment-form">
      <h3 style="margin-bottom: 20px;">Payment Details</h3>
      <form @submit.prevent="submitPayment">
        <label for="paymentOption">Payment Option:</label>
        <select id="paymentOption" v-model="paymentOption" required>
          <option value="creditCard">online</option>
          <option value="debitCard">bank transfer</option>
          <option value="paypal">F2F</option>
        </select>

        <label for="paymentChannel">Payment Channel:</label>
        <select id="paymentChannel" v-model="paymentChannel" required>
          <option value="online">gcash</option>
          <option value="offline">over the counter</option>
        </select>

        <label for="fee">Fee:</label>
        <input type="number" id="fee" v-model="fee" required>

        <label for="shippingOption">Shipping Option:</label>
        <select id="shippingOption" v-model="shippingOption" required>
          <option value="standard">Pick Up</option>
          <option value="express">Delivery</option>
        </select>
        
        <button type="submit">Submit Payment</button>
      </form>
    </div>

    <!-- Confirmation Message after Payment -->
    <div v-if="showConfirmation" class="confirmation-message">
      <h3>Your document request has been confirmed.</h3>
      <p>Please wait for your updates through your email address!</p>
      <button @click="showDocumentSelection">Review</button>
      <button @click="exit">Exit</button>
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
      email: '',
      address: '',
      showPaymentForm: false,
      showConfirmation: false,
      paymentOption: '',
      paymentChannel: '',
      fee: '',
      shippingOption: ''
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
background-color: #ffaa2b;
color: black;
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
background-color: #ffaa2b;
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
top: -20px;
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
