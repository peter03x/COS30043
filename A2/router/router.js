import VueRouter from '../../framework/js/vue-router.global.js'; // Corrected import
import JobDetail from '../components/JobDetail.js';
// import JobOverview from '../components/JobOverview.js';

// Vue.use(VueRouter); // Not needed with global build, but doesn't hurt

const routes = [
    // {
    //     path: '/',
    //     name: 'JobOverview',
    //     component: JobOverview
    // },
    {
        path: '/jobs/:id',
        name: 'JobDetail',
        component: JobDetail,
        props: true
    }
];

const router = new VueRouter({ // Changed to new VueRouter
    // mode: 'hash', // Removed mode: 'hash' - inferred by createWebHashHistory
    routes: routes
});

export default router;