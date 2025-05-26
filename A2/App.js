export default {
    template: `
        <div :class="{'single-column': $route.path === '/apply' || $route.path === '/todo'}">
            <div class="job-explorer" v-if="$route.path === '/' || $route.path.startsWith('/jobs/')">
                <job-list />
                <router-view />
            </div>
            <router-view v-if="$route.path === '/apply'" />
            <router-view v-if="$route.path === '/todo'" />
        </div>
    `,
    components: {
        JobList
    }
};