<script setup>
import {ref, onMounted } from 'vue';

const jobs = ref([]);

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
  <div class="jobList">
    <div class="row">
      <router-link to="/" active-class="router-link-active" class = "p-2 border">Overview</router-link>
    </div>
    <div class="row">

      <router-link
          v-for="job in jobs"
          :key="job.job_id"
          :to="'/jobs/' + job.job_id"
          active-class="router-link-active"
          class = "p-2 border"
      >
        {{ job.job_id }}
      </router-link>
    </div>

  </div>
</template>