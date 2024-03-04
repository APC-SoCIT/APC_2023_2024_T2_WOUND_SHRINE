<template>
    <div>
      <q-btn @click="openDialog" color="green">Edit Details</q-btn>
  
      <q-dialog v-if="dialogVisible" v-model="dialogVisible">
        <q-card>
          <q-card-section>
            <q-card-title class="title">
              <div class="row justify-between items-center">
                <span>Full Request Details</span>
                <q-btn round flat dense icon="close" @click="closeDialog" />
              </div>
            </q-card-title>
  
            <q-form @submit.prevent="submitForm">
              <q-input v-model="formData.name" label="Name" />
              <q-input v-model="formData.contactNumber" label="Contact Number" />
              <q-input v-model="formData.email" label="Email" />
              <q-input v-model="formData.date" label="Date" />
              <q-input v-model="formData.time" label="Time" />
              <q-input v-model="formData.address" label="Address" />
              <q-input v-model="formData.childName" label="Name of Child" />
              <q-input v-model="formData.principalSponsors" label="List of Principal Sponsors" />
              <q-input v-model="formData.preferredDateTime" label="Preferred Date/Time" />
              <q-option-group v-model="formData.type" :options="typeOptions" label="Type" />
  
              <q-file
                v-model="formData.files1"
                label="Files 1"
                filled
                counter
                :counter-label="counterLabelFn"
                max-files="1"
                multiple
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
  
              <q-file
                v-model="formData.files2"
                label="Files 2"
                filled
                counter
                :counter-label="counterLabelFn"
                max-files="1"
                multiple
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
  
              <div class="q-mt-md row justify-end">
                <q-btn label="Cancel" @click="confirmAccept" />
                <span style="margin-right: 10px;"></span> <!-- Space between buttons -->
                <q-btn  color="green" type="button" label="Confirm Edit" @click="confirmReject" class="q-mr-md" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
  
      <q-dialog v-if="confirmRejectVisible" v-model="confirmRejectVisible" class="confirmation-box" persistent>
        <q-card>
          <q-card-section>
            <q-card-title></q-card-title>
            <q-card-main>
              Are you sure you want sent this edited form?
            </q-card-main>
            <q-card-actions align="right">
              <q-btn label="NO" @click="cancelReject" />
              <q-btn color="green" label="YES" @click="rejectRequest" />
            </q-card-actions>
          </q-card-section>
        </q-card>
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
          name: 'Jarvis V. Carpo',
          contactNumber: '099999999',
          email: 'jvcarpo@student.apc.edu.ph',
          address: '06 Dalupang Street, Zone 2, Central Signal Village, Taguig City',
          date: 'Ocotber 08, 2002',
          time: '8:00 pm',
          approvalStatus: null,
          childName: 'Lisa Carpo',
          principalSponsors: 'Grace Valdez, Marlon Mendoza, Mario Valdez',
          preferredDateTime: '',
          type: '',
          files1: [],
          files2: [],
        },
        typeOptions: [
          { label: 'Adult', value: 'adult' },
          { label: 'Child', value: 'child' },
        ],
        priestOptions: [
          'Rev. Fr. Abel Maglines'
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
        this.dialogVisible = false;
      },
      cancelReject() {
        this.confirmRejectVisible = false;
      },
      rejectRequest() {
        // Handle reject logic
        console.log('Request rejected');
        // Close the dialog after rejecting
        this.closeDialog();
        this.confirmRejectVisible = false;
      },
      confirmAccept() {
        this.confirmRejectVisible = false; // Close the reject confirmation dialog if open
        this.dialogVisible = false;
        this.assignPriestVisible = true;
      },
      assignPriest() {
        console.log('Assigned priest:', this.selectedPriest);
        this.assignPriestVisible = false;
        // Close the main dialog after assigning priest
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
  