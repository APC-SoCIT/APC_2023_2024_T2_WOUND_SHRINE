<template>
    <div>
      <q-btn @click="openDialog" color="green">View Full Details</q-btn>
  
      <q-dialog v-model="dialogVisible">
        <q-card>
          <q-card-section>
            <q-card-title class="title">
              <div class="row justify-between items-center">
                <span>Full Request Details</span>
                <q-btn round flat dense icon="close" @click="closeDialog" />
              </div>
            </q-card-title>
  
            <q-form @submit="submitForm">
              <q-input v-model="formData.name" label="Name" />
              <q-input v-model="formData.contactNumber" label="Contact Number" />
              <q-input v-model="formData.email" label="Email" />
              <q-input v-model="formData.date" label="Date" />
              <q-input v-model="formData.time" label="Time" />
              <q-input v-model="formData.address" label="Address" />
              <div class="q-mt-md row justify-end">
                <q-btn label="Reject" @click="confirmReject" class="q-mr-md" />
                <q-btn type="submit" color="orange" label="Accept" @click="confirmAccept" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
  
        <q-dialog v-model="confirmRejectVisible" class="decline-box" persistent>
          <q-card>
            <q-card-section>
              <q-card-title>Confirm Decline</q-card-title>
              <q-card-main>
                Are you sure you want to decline this request?
              </q-card-main>
              <q-card-actions align="right">
                <q-btn label="Cancel" @click="cancelReject" />
                <q-btn color="negative" label="Reject" @click="rejectRequest" />
              </q-card-actions>
            </q-card-section>
          </q-card>
        </q-dialog>
  
        <q-dialog v-model="assignPriestVisible" class="priest-assign-box" persistent>
          <q-card>
            <q-card-section>
              <q-card-title>Assign Priest</q-card-title>
              <q-form @submit.prevent="assignPriest">
                <q-select v-model="selectedPriest" :options="priestOptions" label="Select Priest" />
                <q-card-actions align="right">
                  <q-btn label="Cancel" @click="cancelAssignPriest" />
                  <q-btn color="primary" label="Assign" type="submit" />
                </q-card-actions>
              </q-form>
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialogVisible: false,
        confirmRejectVisible: false,
        assignPriestVisible: false,
        formData: {
          name: 'Jarvis',
          contactNumber: '',
          email: '',
          address: '',
          date: '',
          time: '',
          approvalStatus: null,
        },
        priestOptions: [
          // Add your priest options here
        ],
        selectedPriest: null,
      };
    },
    methods: {
      openDialog() {
        this.dialogVisible = true;
      },
      closeDialog() {
        this.dialogVisible = false;
      },
      confirmReject() {
        this.confirmRejectVisible = true;
      },
      cancelReject() {
        this.confirmRejectVisible = false;
      },
      rejectRequest() {
        // Handle reject logic
        console.log('Request rejected with comment:', this.formData.comment);
        // Close the dialog after rejecting
        this.closeDialog();
        this.confirmRejectVisible = false;
      },
      confirmAccept() {
        this.assignPriestVisible = true;
        this.closeDialog();
      },
      assignPriest() {
        console.log('Assigned priest:', this.selectedPriest);
        this.assignPriestVisible = false;
        this.closeDialog();
      },
      cancelAssignPriest() {
        this.assignPriestVisible = false;
      },
      submitForm() {
        // Handle form submission logic (e.g., send data to server)
        console.log('Form submitted with data:', this.formData);
        // Close the dialog after submission
        this.closeDialog();
      },
    },
  };
  </script>
  
  <style scoped>
  .title {
    font-size: 10000px;
    font-weight: bold;
  }
  
  .q-card {
    max-width: 1100px;
    width: 100%;
  }
  
  .decline-box {
    width: 450px;
  }
  
  .priest-assign-box {
    width: 400px;
  }
  </style>
  