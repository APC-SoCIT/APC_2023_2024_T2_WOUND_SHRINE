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
        <p>{{ doc.status }}</p>
      </div>
    </div>
    
    <!-- Document Request Form -->
    <q-form v-if="selectedDocument && !showPaymentForm && !showConfirmation" class="google-form">
      <!-- Back button with the icon and text "GO BACK" -->
      <q-btn @click="selectedDocument = null" class="back-button" color="primary">
        <q-icon name="arrow_back"></q-icon> GO BACK
      </q-btn>
      
      <!-- Displaying the document request form -->
      <q-card class="request-content">
        <q-card-section>
          <h3 style="margin-bottom: 20px;">Requesting {{ selectedDocument.title }}</h3>
          <q-form @submit="submitRequest">
            <div class="form-content">
              <div class="input-wrapper">
                <div class="label">Name</div>
                <q-input v-model="name" filled outlined dense required></q-input>
              </div>
              <div class="input-wrapper">
                <div class="label">Number</div>
                <q-input v-model="number" filled outlined dense required></q-input>
              </div>
              <div class="input-wrapper">
                <div class="label">Email</div>
                <q-input v-model="email" filled outlined dense required></q-input>
              </div>
              <div class="input-wrapper">
                <div class="label">Address</div>
                <q-input v-model="address" filled outlined dense required></q-input>
              </div>
              <!-- Move the Shipping Option section here -->
              <div class="input-wrapper">
                <div class="label">Shipping Option</div>
                <q-select v-model="shippingOption" filled outlined :options="shippingOptions" required></q-select>
              </div>
              <div class="input-wrapper">
                <div class="label">Payment Option:</div>
                <q-select v-model="paymentOption" filled outlined :options="paymentOptions" required></q-select>
              </div>
              <div class="input-wrapper">
                <div class="label">Payment Channel:</div>
                <q-select v-model="paymentChannel" filled outlined :options="paymentChannels" required></q-select>
              </div>
              <div class="input-wrapper">
                <div class="label">Fee:</div>
                <q-input v-model="fee" filled outlined type="number" required></q-input>
              </div>
            </div>
            <!-- Add Next button to proceed to shipping options -->
            <div class="form-actions">
              <q-btn type="submit" label="Submit" color="primary"></q-btn>
            </div>
          </q-form>
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
        { title: "MARRIAGE CERTIFICATE"},
        { title: "BAPTISMAL CERTIFICATE"},
        { title: "MASS CARDS"}
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
      this.showConfirmation = true;
      // Reset form fields
      this.name = '';
      this.number = '';
      this.email = '';
      this.address = '';
      this.shippingOption = '';
      this.paymentOption = '';
      this.paymentChannel = '';
      this.fee = '';
    },
    showDocumentSelection() {
      this.showConfirmation = false;
      this.selectedDocument = null;
    },
    exit() {
      this.formSubmitted = false;
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffaa2b;
  margin-top: 30px;
}

h2 {
  margin-bottom: 20px;
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
  background-color: #760e0e;
}

.google-form {
  margin-top: 10px;
  max-width: 600px;
  margin: 0 auto;
}

.back-button {
  margin-bottom: 20px;
}

.request-content, .payment-content {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.input-wrapper {
  margin-bottom: 20px;
}

.label {
  font-weight: bold;
}

.form-actions {
  text-align: center;
}

.confirmation-message {
  margin-top: 20px;
  text-align: center;
}

.confirmation-message q-btn {
  margin: 0 10px;
}
</style>
