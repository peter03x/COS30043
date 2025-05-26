<script setup>
import { ref, computed } from 'vue'
import mountainImage from '../assets/Mountain.jpg'
import oceanImage from '../assets/Ocean.jpg'

const firstName = ref('')
const lastName = ref('')
const selectedImage = ref('')


</script>

<template>
<div class = "container">
  <div class = "d-flex justify-content-center">
    <h1>Welcome {{firstName}} {{lastName}}</h1>
  </div>
  <div class = "d-flex justify-content-center">
    <p>This is a web app for joining communities and makes friends online. The app used Vue and Bootstrap as main tools
    for constructing.
    </p>
  </div>

  <div class = "row align-items-center justify-content-center" >
    <div class = "col-lg-6 col-sm-12">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">First Name</span>
        </div>
        <input type="text" class="form-control" id="first-name" v-model = "firstName" placeholder="Enter First Name">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Last Name</span>
        </div>
        <input type="text" class="form-control" id="last-name" v-model = "lastName" placeholder="Enter Last Name">
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-center">
      <div class = "me-4">
        <input type="radio" id="ocean" name="fav_language" class = "me-2" v-model="selectedImage" value="Ocean" >
        <label for="ocean">Ocean</label><br>
      </div>

      <div class = "me-4">
        <input type="radio" id="mountain" name="fav_language" class = "me-2" v-model="selectedImage" value="Mountain" >
        <label for="mountain">Mountain</label><br>
      </div>
  </div>

  <div v-if="selectedImage" class = "d-flex justify-content-center">
    <img
        :src="selectedImage === 'Mountain' ? mountainImage : oceanImage"
        :alt="selectedImage + ' image'"
        class="img-fluid " style="height: auto; max-width: 50%"
    >
  </div>

</div>
</template>

<style scoped>

</style>