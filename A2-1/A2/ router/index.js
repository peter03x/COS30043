import { createRouter, createWebHistory } from 'vue-router'
import JobList from '@/components/JobList.vue'
import JobDetail from '@/components/JobDetail.vue'
import Overview from "@/components/JobOverview.vue";

const routes = [
    {
        path: '/jobs/:id',
        component: JobDetail,
        name: 'job-detail',
        props: true
    },
    {
        path: '/',
        component: Overview,
        name: 'overview'
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),  // Changed to createWebHistory for better URLs
    routes,
})

export default router