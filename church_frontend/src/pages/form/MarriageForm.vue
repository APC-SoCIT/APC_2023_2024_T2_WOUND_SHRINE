<template>
  <div class="google-form">
    <q-form @submit.prevent="submitForm">
      <div class="form-content">
        <!-- Mothers Name -->
        <div class="input-wrapper">
          <div class="label">Wife</div>
          <q-input
            filled
            v-model="wife_name"
            dense
            outlined
            required
          />
        </div>
        <!-- Fathers Name -->
        <div class="input-wrapper">
          <div class="label">Husband</div>
          <q-input
            filled
            v-model="father_name"
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
            v-model="contact_number"
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
            v-model="address"
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
            v-model="sponsors"
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
            v-model="confirmation_certificate"
            label="Pick files"
            filled
            counter
            :counter-label="counterLabelFn"
            max-files="4"
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
            v-model="baptismal_certificate"
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
        <!-- Third File Input -->
        <div class="input-wrapper">
          <div class="label">Birth Certificate</div>
          <q-file
            v-model="psa_birth_certificate"
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
        <!-- Fourth File Input -->
        <div class="input-wrapper">
          <div class="label">Certificate of No Marriage</div>
          <q-file
            v-model="psa_certificate_of_no_marriage"
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
import { mapActions } from 'pinia';
import { useMarriageStore } from "@/stores/marriage";

export default {
  data() {
    return {
      wife_name: '',
      father_name: '',
      contact_number: '',
      email: '',
      address:'',
      sponsors: '',
      date: ref('2019/02/01'),
      time: ref('12:00'), // Default time value
      confirmation_certificate: [],
      baptismal_certificate: [],
      psa_birth_certificate: [],
      psa_certificate_of_no_marriage: []
    };
  },
  methods: {
    ...mapActions(useMarriageStore, ["create"]),

    async submitForm() {
      // Handle form submission
      let payload = {
        user_id: sessionStorage.getItem("user_id"),
        wife_name: this.wife_name,
        husband_name: this.husband_name,
        contact_number: this.contact_number,
        email: this.email,
        address: this.address,
        sponsors: this.sponsors,
        preferred_date: this.preferred_date,
        preferred_time: this.preferred_time,
        confirmation_certificate: await this.readFileAsBase64(this.confirmation_certificate[0]),
        // baptismal_certificate: await this.readFileAsBase64(this.baptismal_certificate[0]),
        // psa_birth_certificate: await this.readFileAsBase64(this.psa_birth_certificate[0]),
        // psa_certificate_of_no_marriage: await this.readFileAsBase64(this.psa_certificate_of_no_marriage[0])
      }
      const result = await this.create(payload);
      console.log(result.message);
      if (result.message === 'Success.') {
        this.$emit('formSubmitted');
      }
    },

    readFileAsBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result.split(',')[1]); // Extracting base64 data from result
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
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
