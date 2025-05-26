<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const job = ref(null);

const fetchJob = async (id) => {
  try {
    const response = await fetch('/cos30043/s103523966/A2/jobs.json');
    const data = await response.json();
    job.value = data.find(j => j.job_id === id);
  } catch (error) {
    console.error('Error loading job:', error);
  }
};

// Fetch on initial load and when route changes
watch(() => route.params.id, fetchJob, { immediate: true });
</script>


<template>
  <div v-if="job" class="container-fluid">
    <h2>{{ job.job_title }} ({{ job.job_id }})</h2>

    <div v-for="(value, key) in {
      'Company': job.company,
      'Location': job.location,
      'Category': job.category,
      'Employment Type': job.employment_type,
      'Salary Range': job.salary_range,
      'Job Level': job.job_level,
      'Description': job.job_description,
      'Application Deadline': job.application_deadline,
      'Posted Date': job.posted_date,
      'Supervisor': job.supervisor,
      'Positions Available': job.positions_available,
      'Start Date': job.start_date
    }" :key="key" class="row">
      <span><strong>{{ key }}:</strong> {{ value }}</span>
    </div>

    <div class="row">
      <span>
        <strong>Required Skills:</strong>
        {{ job.required_skills.join(', ') }}
      </span>
    </div>

    <div class="row" v-if="job.preferred_qualifications?.length">
      <span>
        <strong>Preferred Qualifications:</strong>
        {{ job.preferred_qualifications.join(', ') }}
      </span>
    </div>

    <div class="row" v-if="job.tags?.length">
      <span>
        <strong>Tags:</strong>
        <span v-for="tag in job.tags" :key="tag" class="badge bg-secondary me-1">
          {{ tag }}
        </span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.row {
  margin-bottom: 0.5rem;
}
.badge {
  margin-left: 0.25rem;
}
</style>