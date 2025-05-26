<script setup>

import {onMounted, ref} from "vue";
const jobs = ref([]);

const firstName = ref('');
const lastName = ref('');
const username = ref('');
const password = ref('');
const passwordConfirm = ref('');
const email = ref('');
const streetAddress = ref('');
const suburb = ref('');
const postcode = ref('');
const mobile = ref('');
const dob = ref('');
const preferredJob = ref('');



const firstNameError = ref('');
const lastNameError = ref('');
const usernameError = ref('');
const passwordError = ref('');
const passwordConfirmError = ref('');
const suburbError = ref('');
const streetAddressError = ref('')
const emailError = ref('');
const postcodeError = ref('');
const mobileError = ref('');
const dobError = ref('');

const validateForm = () => {
  firstNameError.value = '';
  lastNameError.value = '';
  usernameError.value = '';
  passwordError.value = '';
  passwordConfirmError.value = '';
  emailError.value = '';
  postcodeError.value = '';
  mobileError.value = '';
  dobError.value = '';

  let isValidForm = true;

  //Validate First Name
  if (!firstName.value.trim()) {
    firstNameError.value = 'First Name can not be left blank';
    isValidForm = false;
  } else if (!/^[a-zA-Z]+$/.test(firstName.value)) {
    firstNameError.value = 'First Name must contain letters only';
    isValidForm = false;
  }

  //Validate Last Name
  if (!lastName.value.trim()) {
    lastNameError.value = 'Last Name can not be left blank';
    isValidForm = false;
  } else if (!/^[a-zA-Z]+$/.test(lastName.value)) {
    lastNameError.value = 'Last Name must contain letters only';
    isValidForm = false;
  }

  // Validate DOB
  if (!dob.value) {
    dobError.value = 'Date of Birth can not be left blank';
    isValidForm = false;
  } else {
    const today = new Date();
    const birthDate = new Date(dob.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthGap = today.getMonth() - birthDate.getMonth();
    if (monthGap < 0 || (monthGap === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 16) {
      dobError.value = 'Applicant must be at least 16 years old';
      isValidForm = false;
    }
  }

  //Validate Username
  if (!username.value.trim()) {
    usernameError.value = 'Username can not be left blank';
    isValidForm = false;
  } else if (username.value.length < 3) {
    usernameError.value = 'Username must contain at least 3 characters';
    isValidForm = false;
  }

  if (!password.value.trim()) {
    passwordError.value = 'Password can not be left blank';
    isValidForm = false;
  } else if (password.value.length < 8) {
    passwordError.value = 'Password must contain at least 8 characters';
    isValidForm = false;
  } else if (!/[$%^&*]/.test(password.value)) {
    passwordError.value = 'Password must include at least one special character ($, %,^, &, *)';
    isValidForm = false;
  }


  if (!passwordConfirm.value.trim()) {
    passwordConfirmError.value = 'Password confirmation can not be left blank';
    isValidForm = false;
  } else if (passwordConfirm.value !== password.value) {
    passwordConfirmError.value = 'Passwords do not match';
    isValidForm = false;
  }

  if (!email.value.trim()) {
    emailError.value = 'Email cannot be blank';
    isValidForm = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.value = 'Invalid email format';
    isValidForm = false;
  }

  //Validate Username
  if (streetAddress.value.length > 40) {
    streetAddressError.value = 'Street Address can only contain 40 characters maximum';
    isValidForm = false;
  }

  if (suburb.value.length > 20) {
    suburbError.value = 'Suburb can only contain 20 characters maximum';
    isValidForm = false;
  }

  if (!postcode.value) {
    postcodeError.value = 'Postcode can not be left blank';
    isValidForm = false;
  } else if (postcode.value.toString().length !== 4) {
    postcodeError.value = `Postcode must contain 4 characters exactly ${postcode.value.length}`;
    isValidForm = false;
  }

  if (!mobile.value.trim()) {
    mobileError.value = 'Mobile number can not be left blank';
    isValidForm = false;
  } else if (!/^04\d{8}$/.test(mobile.value)) {
    mobileError.value = 'Mobile number must contain 10 numbers and starts with 04';
    isValidForm = false;
  }
  return isValidForm;
}

const submitForm = (event) => {
  if (!validateForm()) {
    event.preventDefault(); // Only prevent default if validation fails
    console.log('Form has errors, cannot submit.');
  }
  // If validation passes, the form will submit normally
}

onMounted(async () => {
  try {
    const response = await fetch('/cos30043/s103523966/A2/jobs.json');
    const data = await response.text();
    jobs.value = JSON.parse(data)
  } catch (error) {
    console.error('Cannot load jobs', error);
  }
});

</script>

<template>
  <form class = "container mb-4"
        action="https://mercury.swin.edu.au/it000000/formtest.php"
        method="POST"
        @submit="submitForm">
    <h2 class = "d-flex align-content-center justify-content-center">
      Job Application
    </h2>
    <h4>Personal Information</h4>
    <div class = "row">
      <div class = "form-group col-lg-6 col-sm-12 mt-2">
        <label for="firstName">First Name</label>
        <input name = "firstName" type="text" class = "form-control" id="firstName" v-model="firstName" placeholder="First Name">
        <div v-if="firstNameError" class="text-danger">{{ firstNameError }}</div>
      </div>

      <div class = "form-group col-lg-6 col-sm-12 mt-2">
        <label for="lastName">Last Name</label>
        <input name="lastName" type="text" class = "form-control" id="lastName" v-model="lastName" placeholder="Last Name">
        <div v-if="lastNameError" class="text-danger">{{ lastNameError }}</div>
      </div>

      <div class="form-group col-lg-6 col-sm-12 mt-2">
        <label for="dob" class="label-text">Date of Birth</label>
        <input name="dob" type="date" class="form-control" id="dob" v-model="dob">
        <div v-if="dobError" class="text-danger">{{ dobError }}</div>
      </div>
    </div>
    <h4>Account Details</h4>
    <div class = "row">
      <div class="form-group col-lg-6 col-sm-12 mt-2">
        <label for="userName" class = "label-text">Username:</label>
        <input name="userName" type="text" class="form-control" v-model="username" id="userName" placeholder="Enter username">
        <div v-if="usernameError" class="text-danger">{{ usernameError }}</div>
      </div>
      <div class="form-group col-lg-6 col-sm-12 mt-2">
        <label for="password" class = "label-text">Password:</label>
        <input name="password" type="password" class="form-control" v-model="password" id="password" placeholder="Enter Password">
        <div v-if="passwordError" class="text-danger">{{ passwordError }}</div>
      </div>
    </div>
    <div class = "row">
      <div class="form-group col-lg-6 col-sm-12 mt-2">
        <label for="passwordConfirm" class = "label-text">Password Confirm:</label>
        <input name="passwordConfirm" type="password" class="form-control" v-model="passwordConfirm" id="passwordConfirm" placeholder="Confirm Password">
        <div v-if="passwordConfirmError" class="text-danger">{{ passwordConfirmError }}</div>
      </div>
      <div class="form-group col-lg-6 col-sm-12 mt-2">
        <label for="email" class = "label-text">Email:</label>
        <input name="email" type="email" class="form-control" v-model="email" id="email" placeholder="Enter Email">
        <div v-if="emailError" class="text-danger">{{ emailError }}</div>
      </div>
    </div>
    <h4>Address</h4>
    <div class = "row">
      <div class="form-group col-lg-6 col-sm-12 mt-2">
        <label for="streetAddress" class = "label-text">Street Adress:</label>
        <input name="streetAddress" type="text" class="form-control" v-model="streetAddress" id="streetAddress" placeholder="Enter Street Address">
        <div v-if="streetAddressError" class="text-danger">{{ streetAddressError }}</div>
      </div>
      <div class="form-group col-lg-6 col-sm-12 mt-2">
        <label for="suburb" class = "label-text">Suburb:</label>
        <input name="suburb" type="text" class="form-control" v-model="suburb" id="suburb" placeholder="Enter Suburb">
        <div v-if="suburbError" class="text-danger">{{ suburbError }}</div>
      </div>
    </div>
    <div class = "row">
      <div class="form-group col-lg-6 col-sm-12 mt-2">
        <label for="postcode" class = "label-text">Postcode:</label>
        <input name="postcode" type="number" class="form-control" v-model="postcode" id="postcode" placeholder="Enter Postcode">
        <div v-if="postcodeError" class="text-danger">{{ postcodeError }}</div>
      </div>
      <div class="form-group col-lg-6 col-sm-12 mt-2">
        <label for="mobile" class = "label-text">Mobile Number:</label>
        <input name="mobile" type="text" class="form-control" v-model="mobile" id="mobile" placeholder="Enter Mobile Number">
        <div v-if="mobileError" class="text-danger">{{ mobileError }}</div>
      </div>
    </div>

    <div class = "form-inline">
      <label for="preferredJob" class = "label-text">Preferred Job Category:</label>
      <select class="form-control" id="preferredJob" v-model="preferredJob">
        <option value="" disabled>Select a job category</option>
        <option v-for="job in jobs" :key="job.job_id" :value="job.category">
          {{ job.category }}
        </option>
      </select>
    </div>
    <div class="modal fade" id="termConditions" tabindex="-1" aria-labelledby="termConditionsLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="termConditionsLabel">Terms and Conditions</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Accept</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Button to trigger modal - Updated for Bootstrap 5 -->
    <button type="button"
            class="btn btn-secondary mt-3 me-2"
            data-bs-toggle="modal"
            data-bs-target="#termConditions">
      Terms And Conditions
    </button>

    <button type="submit" class="btn btn-primary mt-3">Submit Application</button>

  </form>


</template>

<style scoped>

</style>