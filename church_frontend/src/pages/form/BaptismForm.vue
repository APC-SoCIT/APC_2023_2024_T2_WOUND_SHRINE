<template>
  <div>
    <q-form @submit.prevent="submitForm">
      <div class="q-gutter-md" style="display: flex; justify-content: space-between;">
        <!-- Left Side -->
        <div style="max-width: 400px;">
          <!-- Mothers Name -->
          <div class="input-wrapper">
            <div class="label">Mother's Name</div>
            <q-input
              filled
              v-model="motherName"
              dense
              outlined
              required
              style="background-color: white;"
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
              style="background-color: white;"
            />
          </div>
          <!-- Contact Number -->
          <div class="input-wrapper">
            <div class="label">Contact Number</div>
            <q-input
              filled
              v-model="age"
              outlined
              required
              lazy-rules
              :rules="[ val => val && val.length === 11 || 'please type your number']"
              style="background-color: white;"
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
              style="background-color: white;"
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
              style="background-color: white;"
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
              style="background-color: white;"
            />
          </div>
        </div>
        <!-- Right Side -->
        <div style="max-width: 460px; margin-right: 19%; margin-top: 0%;">
          <!-- Preferred Date/Time -->
          <div class="input-wrapper">
            <div class="label">Preferred Date/Time</div>
            <div class="q-pa-md" style="max-width: 500px">
              <q-input filled v-model="date" mask="date" style="background-color: white;">
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
          <div class="input-wrapper" style="margin-right: 25%; margin-top: -10%; margin-bottom: -3%;">
            <div class="label">Type</div>
            <div class="q-pa-lg">
              <q-option-group
                v-model="group"
                :options="options"
                color="white"
                left-label
              />
            </div>
          </div>
          <!-- First File Input -->
          <div class="input-wrapper">
            <div class="label">Files 1</div>
            <q-file
              v-model="files1"
              label="Pick files"
              filled
              counter
              :counter-label="counterLabelFn"
              max-files="1"
              multiple
              style="max-width: 300px; background-color: lightblue;"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
          </div>
          <!-- Second File Input -->
          <div class="input-wrapper">
            <div class="label">Files 2</div>
            <q-file
              v-model="files2"
              label="Pick files"
              filled
              counter
              :counter-label="counterLabelFn"
              max-files="1"
              multiple
              style="max-width: 300px; background-color: lightblue;"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
          </div>
        </div>
      </div>
      <!-- Centered Submit Button (Adjust as needed) -->
      <q-btn
        type="submit"
        label="Submit"
        color="primary"
        class="full-width"
        style="max-width: 200px; margin-top: 20px; margin-bottom: 20px;"
      />
    </q-form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      motherName: '',
      fatherName: '',
      contactNumber: '',
      email: '',
      childName: '',
      principalSponsors: '',
      date: ref('2019/02/01'),
      type: '',
      group: ref('op1'),

      options: [
        { label: 'Adult', value: 'op1' },
        { label: 'Child', value: 'op2' },
      ],

      files1: [],
      files2: []
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', {
        motherName: this.motherName,
        fatherName: this.fatherName,
        contactNumber: this.contactNumber,
        email: this.email,
        childName: this.childName,
        principalSponsors: this.principalSponsors,
        preferredDate: this.preferredDate,
        preferredTime: this.preferredTime,
        type: this.type,
        files1: this.files1,
        files2: this.files2
      } );
      this.$emit('formSubmitted');
    },
    fileUploadFailed(err) {
      // Handle file upload failure
      console.error('File upload failed:', err);
    },
    counterLabelFn ({ totalSize, filesNumber, maxFiles }) {
      return `${filesNumber} files of ${maxFiles} | ${totalSize}`
    }
  }
};
</script>

<style scoped>
.input-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.label {
  margin-right: 10px;
  width: 200px; /* Adjust as needed */
  text-align: right;
}


</style>
