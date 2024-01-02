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
      <div v-if="selectedDocument" class="request-form">
        <!-- Back button with the icon and text "GO BACK" -->
        <button @click="selectedDocument = null" class="back-button bigger-button">
          <q-icon name="arrow_back" color="#ffaa2b"></q-icon> GO BACK
        </button>
        
        <!-- Displaying the document request form -->
        <div class="request-content">
          <h3>Requesting {{ selectedDocument.title }}</h3>
          <form @submit.prevent="submitRequest">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
            
            <label for="address">Address:</label>
            <textarea id="address" v-model="address" required></textarea>
            
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        documents: [
          {
            title: "MARRIAGE CERTIFICATE",
            status: "Available"
          },
          {
            title: "BAPTISMAL CERTIFICATE",
            status: "Available"
          },
          {
            title: "MASS CARDS",
            status: "Available"
          }
        ],
        selectedDocument: null,
        name: '',
        email: '',
        address: ''
      };
    },
    methods: {
      selectDocument(doc) {
        this.selectedDocument = doc;
      },
      submitRequest() {
        console.log('Form submitted:', this.name, this.email, this.address);
        this.selectedDocument = null;
        this.name = '';
        this.email = '';
        this.address = '';
      }
    }
  }
  </script>
  
  <style>
  /* Retaining the styles from the previous code you provided */
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
  border: 1px solid #ccc;
  margin-top: 20px;
  border-radius: 4px;
  position: relative;
  background-color: #ffaa2b; /* Setting background color to #ffaa2b */
}

.back-button {
  color: black;
  position: absolute;
  top: -10px;
  left: -10px;
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
  color: black;
  align-items: center;
  text-align: center;
}
  </style>
  