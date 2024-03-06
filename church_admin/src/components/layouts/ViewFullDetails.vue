<template>
  <div>
    <q-btn @click="openDialog" color="green">View Full Details</q-btn>

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
            <q-input v-model="formData.contact_number" label="Contact Number" />
            <q-input v-model="formData.email" label="Email" />
            <q-input v-model="formData.preferred_date" label="Date" />
            <q-input v-model="formData.preferred_time" label="Time" />
            <q-input v-model="formData.address" label="Address" />

            <div class="q-mt-md row justify-end">
              <q-btn label="Reject" @click="confirmReject" class="q-mr-md" />
              <q-btn type="button" color="orange" label="Accept" @click="confirmAccept" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-if="confirmRejectVisible" v-model="confirmRejectVisible" class="confirmation-box" persistent>
      <q-card>
        <q-card-section>
          <q-card-title>Confirm Reject</q-card-title>
          <q-card-main>
            Are you sure you want to reject this request?
          </q-card-main>
          <q-card-actions align="right">
            <q-btn label="Cancel" @click="cancelReject" />
            <q-btn color="negative" label="Reject" @click="rejectRequest" />
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-if="assignPriestVisible" v-model="assignPriestVisible" class="priest-assign-box" persistent>
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
        name: '',
        contact_number: '',
        email: '',
        address: '',
        preferred_date: '',
        preferred_time: '',
        status: null,
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


