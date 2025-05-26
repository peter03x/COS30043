import {ref, onMounted } from '../../framework/js/vue.global.js';
export default {
    props: ['id'],
    template:'' +
        '<div class = "jobDetail">' +
        '   <div v-if = "job">' +
        '       <h3>{{ job.title }} ({{ job.id }})</h3>' +
        '       <p><strong>Company:</strong> {{ job.company }}</p>' +
        '       <p><strong>Location:</strong> {{ job.location }}</p>' +
        '       <p><strong>Category:</strong> {{ job.category }}</p>' +
        '       <p><strong>Employment Type:</strong> {{ job.employment_type }}</p>' +
        '       <p><strong>Salary Range:</strong> {{ job.salary_range }}</p>' +
        '       <p><strong>Job Level:</strong> {{ job.job_level }}</p>' +
        '                      <p><strong>aRequired Skills:</strong>\n' +
        '                    <span v-for="(skill, index) in job.required_skills" :key="\'required-\' + index">\n' +
        '                        {{ skill }}{{ index < job.required_skills.length - 1 ? \', \' : \'\' }}\n' +
        '                    </span>\n' +
        '                </p>' +
        '        <p><strong>Preferred Qualifications:</strong>\n' +
        '                    <span v-for="(qualification, index) in job.preferred_qualifications" :key="\'preferred-\' + index">\n' +
        '                        {{ qualification }}{{ index < job.preferred_qualifications.length - 1 ? \', \' : \'\' }}\n' +
        '                    </span>\n' +
        '                </p>' +
        '       <p><strong>Description:</strong> {{ job.description }}</p>' +
        '       <p><strong>Application Deadline:</strong> {{ job.application_deadline }}</p>' +
        '       <p><strong>Posted Date:</strong> {{ job.posted_date }}</p>' +
        '       <p><strong>Supervisor:</strong> {{ job.supervisor }}</p>' +
        '       <p><strong>Positions Available:</strong> {{ job.positions_available }}</p>' +
        '       <p><strong>Start Date:</strong> {{ job.start_date }}</p>' +
        '       <p><strong>Tags:</strong>\n' +
        '                    <span v-for="(tag, index) in job.tags" :key="\'tag-\' + index" class="badge bg-secondary me-1">{{ tag }}</span>\n' +
        '                </p>   ' +
        '   </div>' +
        '</div>',

    setup(props) {
        const job = ref(null);

        onMounted(async () => {
            try {
                const response = await fetch('@/A2/jobs.json');
                const data = await response.text();
                const jobsArray = data.trim().split('\n').map(line => {
                    const [job_id, job_title, category, location, employment_type,
                        salary_range, job_level, required_skills_str, preferred_qualifications_str
                        , job_description, application_deadline, posted_date, company,
                        supervisor, positions_available, start_date, tags_str] = line.split(':');
                    return {
                        job_id,
                        job_title,
                        category,
                        location,
                        employment_type,
                        salary_range,
                        job_level,
                        required_skills: required_skills_str ? required_skills_str.split(',') : [],
                        preferred_qualifications: preferred_qualifications_str ? preferred_qualifications_str.split(',') : [],
                        job_description,
                        application_deadline,
                        posted_date,
                        company,
                        supervisor,
                        positions_available: parseInt(positions_available),
                        start_date,
                        tags: tags_str ? tags_str.split(',') : []
                    };
                });
                job.value = jobsArray.find(j => j.job_id === props.id);
            } catch (error) {
                console.error(('can not load jobs', error))
            }
        })
    }
}