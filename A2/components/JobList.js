import {ref, onMounted } from '../../framework/js/vue.global.js'

export default {
    template: '' +
        '<div class = "jobList"> ' +
        '   <h2>Job Explorer</h2>' +
        '   <router-link to="/" active-class="router-link-active">Overview</router-link><br>' +
        '   <router-link v-for="job in jobs" :key="job.job_id" :to="\'/jobs/\' + job.job_id" ' +
        '       active-class="router-link-active">{{ job.job_title }} ({{ job.job_id }})</router-link>' +
        '</div>',
    setup() {
        const jobs = ref([]);

        onMounted(async () => {
            try {
                const response = await fetch('@/A2/jobs.json');
                const data = await response.text();
                jobs.value = JSON.parse(data);
            } catch (error) {
                console.error('Error loading jobs:', error);
            }
        });
        return {
            jobs
        };
    }
}