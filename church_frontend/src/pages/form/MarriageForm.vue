<template>
  <div class="google-form">
    <q-form @submit.prevent="submitForm">
      <div class="form-content">
        <!-- Mothers Name -->
        <div class="input-wrapper">
          <div class="label">Name of the girl</div>
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
          <div class="label">Name of the man</div>
          <q-input
            filled
            v-model="fatherName"
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
        <!-- Name of Child -->
        <div class="input-wrapper">
          <div class="label">address</div>
          <q-input
            filled
            v-model="childName"
            dense
            outlined
            required
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
        <!-- Preferred Date -->
        <div class="input-wrapper">
          <div class="label">Preferred Date</div>
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
        <!-- Preferred Time -->
        <div class="input-wrapper">
          <div class="label">Preferred Time</div>
          <div class="time-picker">
            <q-input filled v-model="time" mask="time">
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-time v-model="time">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
        <!-- First File Input -->
        <div class="input-wrapper">
          <div class="label">Confirmation Certificate</div>
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
          <div class="label">Baptismal Certificate</div>
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
        <!-- Third File Input -->
        <div class="input-wrapper">
          <div class="label">Birth Certificate</div>
          <q-file
            v-model="files3"
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
        <!-- Fourth File Input -->
        <div class="input-wrapper">
          <div class="label">Certificate of No Marriage</div>
          <q-file
            v-model="files4"
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
      <!-- Submit Button -->
      <q-btn
        type="submit"
        label="Submit"
        color="primary"
        class="submit-button"
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
      time: ref('12:00'), // Default time value
      files1: [],
      files2: [],
      files3: [],
      files4: []
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
        preferredDate: this.date,
        preferredTime: this.time,
        files1: this.files1,
        files2: this.files2,
        files3: this.files3,
        files4: this.files4
      });
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
.google-form {
  font-family: Arial, sans-serif;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 700px;
  text-align: center;
  margin: 0 auto; /* Center horizontally */
}

.form-content {
  max-width: 700px;
  margin: auto;
}

.input-wrapper {
  margin-bottom: 20px;
}

.label {
  font-weight: bold;
  text-align: left;
}

.date-picker, .time-picker {
  max-width: 300px;
}

.submit-button {
  margin-top: 10px;
}

.left-aligned {
  text-align: left; /* Align q-option-group to the left */
}
</style>
