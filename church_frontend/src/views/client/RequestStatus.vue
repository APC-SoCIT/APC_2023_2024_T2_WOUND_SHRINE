<template>
  
  <div>
    <div v-for="index in 5" :key="index" class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section class="bg-custom text-white">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
  
        <q-separator />
  
        <q-card-actions class="action-container" align="right">
          <div class="action-word">Word {{ index }}</div>
          <div>
            <q-btn flat label="Edit" color="black" @click="inception = true" />
            <!-- Cancel button triggering a confirmation dialog -->
            <q-btn flat label="Cancel" color="black" @click="showCancelDialog = true" />
          </div>
        </q-card-actions>
      </q-card>
    </div>
  </div>

  <!-- First Dialog Component -->
  <q-dialog v-model="inception" class="custom-dialog" style="max-width: 700px">
    <q-card class="bg-white">
      <q-card-section>
        <div class="text-h6">Edit Form</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
  
      <div class="google-form">
      <q-form @submit.prevent="submitForm">
        <div class="form-content">
          <!-- Mothers Name -->
          <div class="input-wrapper">
            <div class="label">Mother's Name</div>
            <q-input
              filled
              v-model="motherName"
              dense
              outlined
              required
            />
          </div>
          <!-- Fathers Name -->
          <div class="input-wrapper">
            <div class="label">Father's Name</div>
            <q-input
              filled
              v-model="fatherName"
              dense
              outlined
              required
            />
          </div>
          <!-- Name of Child -->
          <div class="input-wrapper">
            <div class="label">Name of Child</div>
            <q-input
              filled
              v-model="childName"
              dense
              outlined
              required
            />
          </div>
          <!-- Contact Number -->
          <div class="input-wrapper">
            <div class="label">Contact Number</div>
            <q-input
              filled
              v-model="contactNumber"
              outlined
              required
              :rules="[ val => val && val.length === 11 || 'Please type your number']"
            />
          </div>
          <!-- Email -->
          <div class="input-wrapper">
            <div class="label">Email</div>
            <q-input
              filled
              v-model="email"
              dense
              outlined
              required
              type="email"
            />
          </div>
          <!-- List of Principal Sponsors -->
          <div class="input-wrapper">
            <div class="label">List of Principal Sponsors (Ninong/Ninang)</div>
            <q-input
              filled
              v-model="principalSponsors"
              dense
              outlined
              required
            />
          </div>
          <!-- Preferred Date/Time -->
          <div class="input-wrapper">
            <div class="label">Preferred Date/Time</div>
            <div class="date-picker">
              <q-input filled v-model="date" mask="date">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-date v-model="date">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
          <!-- Type -->
          <div class="input-wrapper">
            <div class="label">Type</div>
            <q-option-group
              v-model="type"
              :options="options"
              class="left-aligned"
            />
          </div>
          <!-- First File Input -->
          <div class="input-wrapper">
            <div class="label">Marriage Certificate</div>
            <q-file
              v-model="files1"
              label="Pick files"
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
          </div>
          <!-- Second File Input -->
          <div class="input-wrapper">
            <div class="label">Birth Certificate</div>
            <q-file
              v-model="files2"
              label="Pick files"
              filled
              counter
              :counter-label="counterLabelFn"
              max-files=""
              multiple
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
          </div>
        </div>
      </q-form>
    </div>
    </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Confirm Edit" @click="secondDialog = true" />
        <!-- Cancel button using the provided Quasar component -->
        <q-btn flat label="Close" @click="cancelAction" />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-- Confirmation Dialog for Cancel Action -->
  <q-dialog v-model="showCancelDialog">
    <q-card class="bg-warning text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Cancel Action</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        Are you sure you want to cancel?
      </q-card-section>
      <q-card-actions align="right" class="bg-white text-warning">
        <q-btn flat label="Yes" @click="cancelActionConfirmed" v-close-popup />
        <q-btn flat label="No" @click="showCancelDialog = false" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-- Second Dialog Component -->
  <q-dialog v-model="secondDialog">
    <q-card class="bg-teal text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Persistent</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Are you sure you want to submit the edited form?
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="YES" v-close-popup />
        <q-btn flat label="NO" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const inception = ref(false);
    const secondDialog = ref(false);
    const showCancelDialog = ref(false);
    const motherName = ref('');
    const fatherName = ref('');
    const contactNumber = ref('');
    const email = ref('');
    const childName = ref('');
    const principalSponsors = ref('');
    const date = ref('2019/02/01');
    const type = ref('');
    const options = [
      { label: 'Adult', value: 'op1' },
      { label: 'Child', value: 'op2' },
    ];
    const files1 = ref([]);
    const files2 = ref([]);

    const changeStatus = () => {
      // Add your changeStatus function logic here
    };

    const submitForm = () => {
      // Handle form submission
      console.log('Form submitted:', {
        motherName: motherName.value,
        fatherName: fatherName.value,
        contactNumber: contactNumber.value,
        email: email.value,
        childName: childName.value,
        principalSponsors: principalSponsors.value,
        preferredDate: date.value,
        type: type.value,
        files1: files1.value,
        files2: files2.value
      });
      secondDialog.value = false; // Close the second dialog
      inception.value = false; // Close the first dialog
      
    };

    const cancelAction = () => {
      showCancelDialog.value = true;
      // Add any additional cancel action logic here
    };

    const cancelActionConfirmed = () => {
      inception.value = false;
      showCancelDialog.value = false;
      // Add any additional logic after cancel confirmation
    };

    const fileUploadFailed = (err) => {
      // Handle file upload failure
      console.error('File upload failed:', err);
    };

    const counterLabelFn = ({ totalSize, filesNumber, maxFiles }) => {
      return `${filesNumber} files of ${maxFiles} | ${totalSize}`
    };

    return {
      inception,
      secondDialog,
      showCancelDialog,
      motherName,
      fatherName,
      contactNumber,
      email,
      childName,
      principalSponsors,
      date,
      type,
      options,
      files1,
      files2,
      changeStatus,
      submitForm,
      cancelAction,
      cancelActionConfirmed,
      fileUploadFailed,
      counterLabelFn
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 1000%
  max-width: 1000px
  margin: auto
  margin-top: 20px

.action-container
  display: flex
  justify-content: space-between
  align-items: center

.action-word
  margin-right: 10px

.bg-custom
  background-color: #ffaa2b

.custom-dialog .q-dialog__inner 
    max-width: 700px !important

.google-form 
    font-family: Arial, sans-serif
    background-color: white
    padding: 20px
    border-radius: 5px
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
    width: 500px
    text-align: center
    margin: 0 auto
    
    
.form-content 
    max-width: 400px
    margin: auto
  
.label 
    font-weight: bold
    text-align: left
    
.left-aligned
    text-align: left
    
    
</style>
