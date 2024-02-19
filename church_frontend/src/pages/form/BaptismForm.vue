<template>
  <div>
    <q-form @submit.prevent="submitForm">
      <div class="q-gutter-md" style="max-width: 400px">
        <div class="q-mb-md">Mother's Name</div>
        <!-- Mothers Name -->
        <q-input
          filled
          v-model="motherName"
          dense
          outlined
          required
          style="background-color: white;"
        />
        <div class="q-mb-md">Father's Name</div>
        <!-- Fathers Name -->
        <q-input
          filled
          v-model="fatherName"
          dense
          outlined
          required
          style="background-color: white;"
        />
        <div class="q-mb-md">Contact Number</div>
        <!-- Contact Number -->
        <q-input
          filled
          v-model="contactNumber"
          dense
          outlined
          required
          :rules="[val => !!val && val.length === 11 || 'Contact number must be 11 digits']"
          style="background-color: white;"
        />
        <div class="q-mb-md">Email</div>
        <!-- Email -->
        <q-input
          filled
          v-model="email"
          dense
          outlined
          required
          type="email"
          style="background-color: white;"
        />
        <div class="q-mb-md">Name of Child</div>
        <!-- Name of Child -->
        <q-input
          filled
          v-model="childName"
          dense
          outlined
          required
          style="background-color: white;"
        />
        <div class="q-mb-md">List of Principal Sponsors (Ninong/Ninang)</div>
        <!-- List of Principal Sponsors -->
        <q-input
          filled
          v-model="principalSponsors"
          dense
          outlined
          required
          style="background-color: white;"
        />
        <div class="q-mb-md">Preferred Date/Time</div>
        <!-- Preferred Time -->
        <q-input filled v-model="date" style="background-color: white; max-width: 200px;">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <div class="q-mb-md">Type</div>
        <!-- Type -->
        <q-option-group
          v-model="group"
          :options="options"
          color="red"
          left-label
          style="background-color: white;"
        />
        <div class="q-mb-md">Files</div>
        <!-- Files -->
        <q-uploader
          v-model="files"
          dense
          flat
          outlined
          label="Upload Files"
          accept=".pdf, .doc, .docx"
          :max-files="2"
          :max-file-size="5*1024*1024"
          @failed="fileUploadFailed"
        />
      </div>
      <q-btn
        type="submit"
        label="Submit"
        color="primary"
        class="full-width"
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
      date: ref('2019-02-01 12:44'),
      type: '',
      group: ref('op1'),

      options: [
        { label: 'Option 1', value: 'op1' },
        { label: 'Option 2', value: 'op2' },
      ],

      files: []
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
        files: this.files
      } );
      this.$emit('formSubmitted');
    },
    fileUploadFailed(err) {
      // Handle file upload failure
      console.error('File upload failed:', err);
    }

  }
};
</script>

<style scoped>
/* Add your component's styles here */
</style>
