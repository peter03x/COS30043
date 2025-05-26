IMPORTANT: When performing testing on Mercury Server, the bootstrap CSS and JavaScript for interacting with the navbar seem to return errors and misoperating constantly. However, when I use the online framework using the link provided by Bootstrap, everything works fine (the home page uses it while 2 other pages don't).


APPENDIX: AI Promts and Answers


Conversation with Gemini
tell me why my event table doesnt show anything



form_processing.js:

Vue.createApp({

    data() {

        return {

          events: [

            { eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8 },

            { eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business', durationhour: 6 },

            { eventid: 'EVT10003', eventname: 'AI & Machine Learning Summit', category: 'Technology', durationhour: 10 },

            { eventid: 'EVT10004', eventname: 'Cybersecurity Workshop', category: 'Technology', durationhour: 4 },

            { eventid: 'EVT10005', eventname: 'Digital Marketing Bootcamp', category: 'Marketing', durationhour: 6 },

            { eventid: 'EVT10006', eventname: 'Blockchain and Cryptocurrency', category: 'Finance', durationhour: 5 },

            { eventid: 'EVT10007', eventname: 'Entrepreneurship Forum', category: 'Business', durationhour: 7 },

            { eventid: 'EVT10008', eventname: 'Data Science Hackathon', category: 'Technology', durationhour: 12 },

            { eventid: 'EVT10009', eventname: 'Leadership and Management Summit', category: 'Business', durationhour: 9 },

            { eventid: 'EVT10010', eventname: 'E-commerce Strategies', category: 'Marketing', durationhour: 6 },

            { eventid: 'EVT10011', eventname: 'AI for Business', category: 'Business', durationhour: 8 },

            { eventid: 'EVT10012', eventname: 'IoT & Smart Devices Expo', category: 'Technology', durationhour: 7 },

            { eventid: 'EVT10013', eventname: 'Brand Strategy and Growth', category: 'Marketing', durationhour: 5 },

            { eventid: 'EVT10014', eventname: 'Investment and Wealth Management', category: 'Finance', durationhour: 6 },

            { eventid: 'EVT10015', eventname: 'Financial Technology (FinTech) Summit', category: 'Finance', durationhour: 8 },

            { eventid: 'EVT10016', eventname: 'AI Ethics and Regulations', category: 'Technology', durationhour: 4 },

            { eventid: 'EVT10017', eventname: 'Business Analytics Workshop', category: 'Business', durationhour: 6 },

            { eventid: 'EVT10018', eventname: 'SEO and Content Marketing', category: 'Marketing', durationhour: 7 },

            { eventid: 'EVT10019', eventname: 'Cryptocurrency Investment Strategies', category: 'Finance', durationhour: 9 },

            { eventid: 'EVT10020', eventname: 'Social Media Marketing Trends', category: 'Marketing', durationhour: 5 },

          ],

          username: '',

          password: '',

          passwordConfirm: '',

          selectedCategory: 'Business',

          eventName: '',

          eventidFilter: '',

          eventNameFilter: '',

          eventDurationFilter: '',

          eventCategoryFilter: 'All',

        };

      },

      computed: {

        filteredEvents() {

          return this.events.filter(event => event.category === this.selectedCategory);

        },

        filteredEventsListing() {

          let filtered = this.events;

         

          if (this.eventidFilter) {

            filtered = filtered.filter(event => event.eventid.toLowerCase().includes(this.eventidFilter.toLowerCase()))

          }



          if (this.eventNameFilter) {

            filtered = filtered.filter(event => event.eventName.toLowerCase().includes(this.eventNameFilter.toLowerCase()))

          }



          if (this.eventDurationFilter) {

            filtered = filtered.filter(event => event.durationhour.toLowerCase().includes(this.eventDurationFilter.toLowerCase()))

          }



          if (this.eventCategoryFilter !== 'All') {

            filtered = filtered.filter(event => event.category === this.eventCategoryFilter);

          }



          return filtered;

        },

      },

      methods: {

        updateSelectedCategory(category) {

          this.selectedCategory = category;

         

        },

        updateEventCategoryFilter(category){

          this.eventCategoryFilter = category;

        }

      }

}).mount('#app')



// import { ref, computed } from 'vue';

     

// const events = [

//   { eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8 },

//   { eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business', durationhour: 6 },

//   { eventid: 'EVT10003', eventname: 'AI & Machine Learning Summit', category: 'Technology', durationhour: 10 },

//   { eventid: 'EVT10004', eventname: 'Cybersecurity Workshop', category: 'Technology', durationhour: 4 },

//   { eventid: 'EVT10005', eventname: 'Digital Marketing Bootcamp', category: 'Marketing', durationhour: 6 },

//   { eventid: 'EVT10006', eventname: 'Blockchain and Cryptocurrency', category: 'Finance', durationhour: 5 },

//   { eventid: 'EVT10007', eventname: 'Entrepreneurship Forum', category: 'Business', durationhour: 7 },

//   { eventid: 'EVT10008', eventname: 'Data Science Hackathon', category: 'Technology', durationhour: 12 },

//   { eventid: 'EVT10009', eventname: 'Leadership and Management Summit', category: 'Business', durationhour: 9 },

//   { eventid: 'EVT10010', eventname: 'E-commerce Strategies', category: 'Marketing', durationhour: 6 },

//   { eventid: 'EVT10011', eventname: 'AI for Business', category: 'Business', durationhour: 8 },

//   { eventid: 'EVT10012', eventname: 'IoT & Smart Devices Expo', category: 'Technology', durationhour: 7 },

//   { eventid: 'EVT10013', eventname: 'Brand Strategy and Growth', category: 'Marketing', durationhour: 5 },

//   { eventid: 'EVT10014', eventname: 'Investment and Wealth Management', category: 'Finance', durationhour: 6 },

//   { eventid: 'EVT10015', eventname: 'Financial Technology (FinTech) Summit', category: 'Finance', durationhour: 8 },

//   { eventid: 'EVT10016', eventname: 'AI Ethics and Regulations', category: 'Technology', durationhour: 4 },

//   { eventid: 'EVT10017', eventname: 'Business Analytics Workshop', category: 'Business', durationhour: 6 },

//   { eventid: 'EVT10018', eventname: 'SEO and Content Marketing', category: 'Marketing', durationhour: 7 },

//   { eventid: 'EVT10019', eventname: 'Cryptocurrency Investment Strategies', category: 'Finance', durationhour: 9 },

//   { eventid: 'EVT10020', eventname: 'Social Media Marketing Trends', category: 'Marketing', durationhour: 5 }

// ];



// const username = ref('');

// const password = ref('');

// const passwordConfirm = ref('');

// const selectedCategory = ref('Business');

// const eventName = ref('')



// const filteredEvents = computed(() => {

//   return events.filter(event => event.category === selectedCategory.value);

// });



// const updateSelectedCategory = (category) => {

//   selectedCategory.value = category;

// };



Event_listing.html:

<!DOCTYPE html>

<html lang="en">

<head>

    <title>EVENT INFORMATION</title>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--Bootstrap Call-->

    <link rel="stylesheet" href="../framework/css/bootstrap.min.css">

    <link rel="stylesheet" href="style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=

    Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

</head>

<body>

    <div class="navbar">

        <nav class="nav">

          <div class="events">

            <h2>Event Management System</h2>

          </div>

   

          <div class="pages-navigation">

            <RouterLink class="events" to="/events">Home</RouterLink>

            <RouterLink class="events" to="/events">Event Information</RouterLink>

            <RouterLink class="events" to="/events">Registration Form</RouterLink>

          </div>

        </nav>

    </div>

    <div class="homepage" id = "app">

      <h1>Event Information</h1>

      <hr/>

      <div class = "homepage-body">

        <div class = "container filter-options">

          <h3>Filtering Options</h3>

          <div class="row mb-3">

            <div class = "col-md-4 col ">

              <div class = "input-group mb-3">

                <div class="input-group-prepend">

                  <span class="input-group-text" id="basic-addon1">Event ID</span>

                </div>

                <input type="text" class="form-control" placeholder="Event ID" aria-label="Event ID" v-model="eventidFilter">

              </div>

            </div>



            <div class = "col-md-4 col ">

              <div class = "input-group mb-3">

                <div class="input-group-prepend">

                  <span class="input-group-text" id="basic-addon1">Event Name</span>

                </div>

                <input type="text" class="form-control" placeholder="Event Name" aria-label="Event Name" v-model="eventNameFilter">

              </div>

            </div>



            <div class = "col-md-4 col ">

              <div class = "input-group mb-3">

                <div class="input-group-prepend">

                  <span class="input-group-text" id="basic-addon1">Duration Hours</span>

                </div>

                <input type="text" class="form-control" placeholder="Duration Hours" aria-label="Duration Hours" v-model="eventDurationFilter">

              </div>

            </div>

          </div>





            <span> Category </span>

            <div class="form-check">

              <input class="form-check-input" type="radio" name="categoryRadios"

              id="categoryRadios1" value="All" v-model="eventCategoryFilter" @change="updateEventCategoryFilter('All')">

              <label class="form-check-label" for="categoryRadios1">

                All

              </label>

            </div>



            <div class="form-check">

              <input class="form-check-input" type="radio" name="categoryRadios"

              id="categoryRadios2" value="Technology"  v-model="eventCategoryFilter" @change="updateEventCategoryFilter('Technology')">

              <label class="form-check-label" for="categoryRadios2">

                Technology

              </label>

            </div>



            <div class="form-check">

              <input class="form-check-input" type="radio" name="categoryRadios"

              id="categoryRadios3" value="Business" checked v-model="eventCategoryFilter" @change="updateEventCategoryFilter('Business')">

              <label class="form-check-label" for="categoryRadios3">

                Business

              </label>

            </div>



            <div class="form-check">

              <input class="form-check-input" type="radio" name="categoryRadios"

              id="categoryRadios4" value="Marketing" v-model="eventCategoryFilter" @change="updateEventCategoryFilter('Marketing')" >

              <label class="form-check-label" for="categoryRadios4">

                Marketing

              </label>

            </div>



            <div class="form-check">

              <input class="form-check-input" type="radio" name="categoryRadios"

              id="categoryRadios5" value="Finance" v-model="eventCategoryFilter" @change="updateEventCategoryFilter('Finance')">

              <label class="form-check-label" for="categoryRadios5">

                Finance

              </label>

            </div>

        </div>



        <div class = "container">

          <div class="table-responsive row">

            <table class = "table table-striped table-bordered table-hover col-md-6 offset-md-3 rounded">

              <thead class = "thead-dark">

                <tr>

                  <th scope="col">Event ID</th>

                  <th scope="col">Event Name</th>

                  <th scope="col">Category</th>

                  <th scope="col">Duration Hours</th>

                </tr>

              </thead>

              <tbody>

                <tr v-for="event in filteredEventsListing">

                  <th scope="row">{{ event.eventid }}</td>

                  <td>{{ event.eventname }}</td>

                  <td>{{ event.category }}</td>

                  <td>{{ event.durationhour }}</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

    <script src="../framework/js/vue.global.js"></script>

    <script src="form_processing.js"></script>

</body>

</html>



The primary reason your event table isn't showing any data is due to a typo in your filteredEventsListing computed property within your form_processing.js file. Specifically, you're attempting to use the .toLowerCase() method on event.durationhour, which is a number, not a string. This will cause an error, and prevent the filtered list from being correctly rendered.

Here's a breakdown of the issue and how to fix it:

Problem:

Incorrect toLowerCase() usage:
In the filteredEventsListing computed property, you have this line:
JavaScript

if (this.eventDurationFilter) {
    filtered = filtered.filter(event => event.durationhour.toLowerCase().includes(this.eventDurationFilter.toLowerCase()))
}
event.durationhour is a number (e.g., 8, 6, 10). Numbers don't have a toLowerCase() method. This will throw an error, halting the filtering process.
Solution:

Convert durationhour to a string before using includes():

You need to convert the durationhour to a string using String() before you can use includes().
Also, you must convert the filter to a string.
The corrected code should look like this:
JavaScript

if (this.eventDurationFilter) {
    filtered = filtered.filter(event => String(event.durationhour).includes(this.eventDurationFilter))
}
Ensure Vue is mounting to the correct element.

Your Vue app is mounted to the div with the id of "app" and this is correct.
Corrected filteredEventsListing:

Here's the corrected filteredEventsListing computed property:

JavaScript

computed: {
    filteredEvents() {
        return this.events.filter(event => event.category === this.selectedCategory);
    },
    filteredEventsListing() {
        let filtered = this.events;

        if (this.eventidFilter) {
            filtered = filtered.filter(event => event.eventid.toLowerCase().includes(this.eventidFilter.toLowerCase()))
        }

        if (this.eventNameFilter) {
            filtered = filtered.filter(event => event.eventName.toLowerCase().includes(this.eventNameFilter.toLowerCase()))
        }

        if (this.eventDurationFilter) {
            filtered = filtered.filter(event => String(event.durationhour).includes(this.eventDurationFilter))
        }

        if (this.eventCategoryFilter !== 'All') {
            filtered = filtered.filter(event => event.category === this.eventCategoryFilter);
        }

        return filtered;
    },
},
Complete Corrected JavaScript:

JavaScript

Vue.createApp({
    data() {
        return {
            events: [
                { eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8 },
                { eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business', durationhour: 6 },
                // ... (rest of your events)
            ],
            username: '',
            password: '',
            passwordConfirm: '',
            selectedCategory: 'Business',
            eventName: '',
            eventidFilter: '',
            eventNameFilter: '',
            eventDurationFilter: '',
            eventCategoryFilter: 'All',
        };
    },
    computed: {
        filteredEvents() {
            return this.events.filter(event => event.category === this.selectedCategory);
        },
        filteredEventsListing() {
            let filtered = this.events;

            if (this.eventidFilter) {
                filtered = filtered.filter(event => event.eventid.toLowerCase().includes(this.eventidFilter.toLowerCase()))
            }

            if (this.eventNameFilter) {
                filtered = filtered.filter(event => event.eventName.toLowerCase().includes(this.eventNameFilter.toLowerCase()))
            }

            if (this.eventDurationFilter) {
                filtered = filtered.filter(event => String(event.durationhour).includes(this.eventDurationFilter))
            }

            if (this.eventCategoryFilter !== 'All') {
                filtered = filtered.filter(event => event.category === this.eventCategoryFilter);
            }

            return filtered;
        },
    },
    methods: {
        updateSelectedCategory(category) {
            this.selectedCategory = category;

        },
        updateEventCategoryFilter(category) {
            this.eventCategoryFilter = category;
        }
    }
}).mount('#app')
By making this correction, your event table should now display the filtered event data as expected.





Still nothing happens



Vue.createApp({

    data() {

        return {

          events: [

            { eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8 },

            { eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business', durationhour: 6 },

            { eventid: 'EVT10003', eventname: 'AI & Machine Learning Summit', category: 'Technology', durationhour: 10 },

            { eventid: 'EVT10004', eventname: 'Cybersecurity Workshop', category: 'Technology', durationhour: 4 },

            { eventid: 'EVT10005', eventname: 'Digital Marketing Bootcamp', category: 'Marketing', durationhour: 6 },

            { eventid: 'EVT10006', eventname: 'Blockchain and Cryptocurrency', category: 'Finance', durationhour: 5 },

            { eventid: 'EVT10007', eventname: 'Entrepreneurship Forum', category: 'Business', durationhour: 7 },

            { eventid: 'EVT10008', eventname: 'Data Science Hackathon', category: 'Technology', durationhour: 12 },

            { eventid: 'EVT10009', eventname: 'Leadership and Management Summit', category: 'Business', durationhour: 9 },

            { eventid: 'EVT10010', eventname: 'E-commerce Strategies', category: 'Marketing', durationhour: 6 },

            { eventid: 'EVT10011', eventname: 'AI for Business', category: 'Business', durationhour: 8 },

            { eventid: 'EVT10012', eventname: 'IoT & Smart Devices Expo', category: 'Technology', durationhour: 7 },

            { eventid: 'EVT10013', eventname: 'Brand Strategy and Growth', category: 'Marketing', durationhour: 5 },

            { eventid: 'EVT10014', eventname: 'Investment and Wealth Management', category: 'Finance', durationhour: 6 },

            { eventid: 'EVT10015', eventname: 'Financial Technology (FinTech) Summit', category: 'Finance', durationhour: 8 },

            { eventid: 'EVT10016', eventname: 'AI Ethics and Regulations', category: 'Technology', durationhour: 4 },

            { eventid: 'EVT10017', eventname: 'Business Analytics Workshop', category: 'Business', durationhour: 6 },

            { eventid: 'EVT10018', eventname: 'SEO and Content Marketing', category: 'Marketing', durationhour: 7 },

            { eventid: 'EVT10019', eventname: 'Cryptocurrency Investment Strategies', category: 'Finance', durationhour: 9 },

            { eventid: 'EVT10020', eventname: 'Social Media Marketing Trends', category: 'Marketing', durationhour: 5 },

          ],

          username: '',

          password: '',

          passwordConfirm: '',

          selectedCategory: 'Business',

          eventName: '',

          eventidFilter: '',

          eventNameFilter: '',

          eventDurationFilter: '',

          eventCategoryFilter: 'All',

        };

      },

      computed: {

        filteredEvents() {

          return this.events.filter(event => event.category === this.selectedCategory);

        },

        filteredEventsListing() {

          let filtered = this.events;

         

          if (this.eventidFilter) {

            filtered = filtered.filter(event => event.eventid.toLowerCase().includes(this.eventidFilter.toLowerCase()))

          }



          if (this.eventNameFilter) {

            filtered = filtered.filter(event => event.eventName.toLowerCase().includes(this.eventNameFilter.toLowerCase()))

          }



          if (this.eventDurationFilter) {

            filtered = filtered.filter(event => String(event.durationhour).includes(this.eventDurationFilter))

          }



          if (this.eventCategoryFilter !== 'All') {

            filtered = filtered.filter(event => event.category === this.eventCategoryFilter);

          }



          return filtered;

        },

      },

      methods: {

        updateSelectedCategory(category) {

          this.selectedCategory = category;

         

        },

        updateEventCategoryFilter(category){

          this.eventCategoryFilter = category;

        }

      }

}).mount('#app')



// import { ref, computed } from 'vue';

     

// const events = [

//   { eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8 },

//   { eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business', durationhour: 6 },

//   { eventid: 'EVT10003', eventname: 'AI & Machine Learning Summit', category: 'Technology', durationhour: 10 },

//   { eventid: 'EVT10004', eventname: 'Cybersecurity Workshop', category: 'Technology', durationhour: 4 },

//   { eventid: 'EVT10005', eventname: 'Digital Marketing Bootcamp', category: 'Marketing', durationhour: 6 },

//   { eventid: 'EVT10006', eventname: 'Blockchain and Cryptocurrency', category: 'Finance', durationhour: 5 },

//   { eventid: 'EVT10007', eventname: 'Entrepreneurship Forum', category: 'Business', durationhour: 7 },

//   { eventid: 'EVT10008', eventname: 'Data Science Hackathon', category: 'Technology', durationhour: 12 },

//   { eventid: 'EVT10009', eventname: 'Leadership and Management Summit', category: 'Business', durationhour: 9 },

//   { eventid: 'EVT10010', eventname: 'E-commerce Strategies', category: 'Marketing', durationhour: 6 },

//   { eventid: 'EVT10011', eventname: 'AI for Business', category: 'Business', durationhour: 8 },

//   { eventid: 'EVT10012', eventname: 'IoT & Smart Devices Expo', category: 'Technology', durationhour: 7 },

//   { eventid: 'EVT10013', eventname: 'Brand Strategy and Growth', category: 'Marketing', durationhour: 5 },

//   { eventid: 'EVT10014', eventname: 'Investment and Wealth Management', category: 'Finance', durationhour: 6 },

//   { eventid: 'EVT10015', eventname: 'Financial Technology (FinTech) Summit', category: 'Finance', durationhour: 8 },

//   { eventid: 'EVT10016', eventname: 'AI Ethics and Regulations', category: 'Technology', durationhour: 4 },

//   { eventid: 'EVT10017', eventname: 'Business Analytics Workshop', category: 'Business', durationhour: 6 },

//   { eventid: 'EVT10018', eventname: 'SEO and Content Marketing', category: 'Marketing', durationhour: 7 },

//   { eventid: 'EVT10019', eventname: 'Cryptocurrency Investment Strategies', category: 'Finance', durationhour: 9 },

//   { eventid: 'EVT10020', eventname: 'Social Media Marketing Trends', category: 'Marketing', durationhour: 5 }

// ];



// const username = ref('');

// const password = ref('');

// const passwordConfirm = ref('');

// const selectedCategory = ref('Business');

// const eventName = ref('')



// const filteredEvents = computed(() => {

//   return events.filter(event => event.category === selectedCategory.value);

// });



// const updateSelectedCategory = (category) => {

//   selectedCategory.value = category;

// };




The image you've provided shows the HTML structure of your page, but it doesn't show the actual content of the events array being rendered in the table.  Since you've confirmed that the JavaScript code is correct, the issue is likely in how the table is structured in your HTML.

Here's a breakdown of the potential problem and how to fix it:

Potential Problem:

Incorrect Table Column Structure:
The table header (<thead>) and table body (<tbody>) might have a mismatch in the number of columns. If the <tr> elements inside <tbody> don't have the same number of <td> elements as the <th> elements in <thead>, the data won't align correctly.
Solution:

Verify Table Column Alignment:

Double-check that the <tr> elements within the <tbody> have the same number of <td> elements as the <th> elements in the <thead>.
In your Event_listing.html, make sure that the <td> elements inside the v-for loop match the four columns defined in the <thead>: "Event ID", "Event Name", "Category", and "Duration Hours".
Ensure Vue is Properly Mounted:

As mentioned previously, make sure that the Vue app is correctly mounted to the #app element in your HTML.
Verify that you have included the Vue library and your form_processing.js file correctly in your HTML.
Corrected HTML Table:

Here's the corrected table structure in your Event_listing.html file:

HTML

<div class = "container">
    <div class="table-responsive row">
        <table class = "table table-striped table-bordered table-hover col-md-6 offset-md-3 rounded">
            <thead class = "thead-dark">
                <tr>
                    <th scope="col">Event ID</th>
                    <th scope="col">Event Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Duration Hours</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="event in filteredEventsListing">
                    <th scope="row">{{ event.eventid }}</th>
                    <td>{{ event.eventname }}</td>
                    <td>{{ event.category }}</td>
                    <td>{{ event.durationhour }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
Complete Corrected HTML (Table Portion):

HTML

<div class="container">
    <div class="table-responsive row">
        <table class="table table-striped table-bordered table-hover col-md-6 offset-md-3 rounded">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Event ID</th>
                    <th scope="col">Event Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Duration Hours</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="event in filteredEventsListing">
                    <th scope="row">{{ event.eventid }}</th>
                    <td>{{ event.eventname }}</td>
                    <td>{{ event.category }}</td>
                    <td>{{ event.durationhour }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
Debugging Steps:

Open Browser Developer Tools:

Open your browser's developer tools (usually by pressing F12 or right-clicking and selecting "Inspect").
Go to the "Console" tab and check for any JavaScript errors.   
Go to the "Elements" tab and inspect the table to see if the <tr> elements are being generated.
Add Console Logs:

Add console.log(this.filteredEventsListing) inside your filteredEventsListing computed property to see if the filtered data is being generated correctly.
Add console.log(this.events) in the data section to verify that the events array is populated.
By following these steps, you should be able to identify and fix the issue that's preventing your event table from displaying data. If you're still having trouble, please provide the updated HTML and any console errors you're seeing.


Sources and related content
github.com
github.com




these are the errrors



The errors you're seeing in the console indicate that Vue is unable to find the eventidFilter, eventNameFilter, eventDurationFilter, and eventCategoryFilter properties within your Vue component's data. This strongly suggests that there's a mismatch between how you're accessing these properties in your template and how they're defined in your Vue component's data object.

Here's a breakdown of the problem and how to fix it:

Problem:

Case Sensitivity: JavaScript and Vue are case-sensitive. If the property names in your template don't exactly match the property names in your data object, Vue won't be able to find them.
Typographical Errors: A simple typo in the property names can cause this issue.
Solution:

Verify Property Names:

Carefully compare the property names in your HTML template (v-model="eventidFilter", v-model="eventNameFilter", etc.) with the property names in your data object in form_processing.js.
Ensure that the case matches exactly. For instance, eventidFilter is different from eventIdFilter.
Ensure Properties are Defined in data():

Double-check that all the properties (eventidFilter, eventNameFilter, eventDurationFilter, and eventCategoryFilter) are correctly defined within the data() function of your Vue component.
Corrected JavaScript (form_processing.js):

JavaScript

Vue.createApp({
    data() {
        return {
            events: [
                { eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8 },
                // ... (rest of your events)
            ],
            username: '',
            password: '',
            passwordConfirm: '',
            selectedCategory: 'Business',
            eventName: '',
            eventidFilter: '',
            eventNameFilter: '',
            eventDurationFilter: '',
            eventCategoryFilter: 'All', // Ensure this is 'All'
        };
    },
    computed: {
        // ... (your computed properties)
    },
    methods: {
        // ... (your methods)
    }
}).mount('#app')
Corrected HTML (Event_listing.html):

HTML

<div class="container filter-options">
    <h3>Filtering Options</h3>
    <div class="row mb-3">
        <div class="col-md-4 col">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Event ID</span>
                </div>
                <input type="text" class="form-control" placeholder="Event ID" aria-label="Event ID" v-model="eventidFilter">
            </div>
        </div>

        <div class="col-md-4 col">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Event Name</span>
                </div>
                <input type="text" class="form-control" placeholder="Event Name" aria-label="Event Name" v-model="eventNameFilter">
            </div>
        </div>

        <div class="col-md-4 col">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Duration Hours</span>
                </div>
                <input type="text" class="form-control" placeholder="Duration Hours" aria-label="Duration Hours" v-model="eventDurationFilter">
            </div>
        </div>
    </div>

    <span> Category </span>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="categoryRadios" 
            id="categoryRadios1" value="All" v-model="eventCategoryFilter" @change="updateEventCategoryFilter('All')">
        <label class="form-check-label" for="categoryRadios1">
            All
        </label>
    </div>

    <div class="form-check">
        <input class="form-check-input" type="radio" name="categoryRadios" 
            id="categoryRadios2" value="Technology" v-model="eventCategoryFilter" @change="updateEventCategoryFilter('Technology')">
        <label class="form-check-label" for="categoryRadios2">
            Technology
        </label>
    </div>

    <div class="form-check">
        <input class="form-check-input" type="radio" name="categoryRadios" 
            id="categoryRadios3" value="Business" checked v-model="eventCategoryFilter" @change="updateEventCategoryFilter('Business')">
        <label class="form-check-label" for="categoryRadios3">
            Business
        </label>
    </div>

    <div class="form-check">
        <input class="form-check-input" type="radio" name="categoryRadios" 
            id="categoryRadios4" value="Marketing" v-model="eventCategoryFilter" @change="updateEventCategoryFilter('Marketing')">
        <label class="form-check-label" for="categoryRadios4">
            Marketing
        </label>
    </div>

    <div class="form-check">
        <input class="form-check-input" type="radio" name="categoryRadios" 
            id="categoryRadios5" value="Finance" v-model="eventCategoryFilter" @change="updateEventCategoryFilter('Finance')">
        <label class="form-check-label" for="categoryRadios5">
            Finance
        </label>
    </div>
</div>
Debugging Steps:

Double-Check Case: Pay very close attention to the case of each property name.
Restart the Server: If you're using a development server, make sure to restart it after making changes to your JavaScript code.
Clear Browser Cache: Sometimes, the browser might cache old versions of your files. Clear your browser's cache to ensure you're loading the latest version.
By following these steps, you should be able to resolve the errors and get your event table to display the data correctly.





What is this error



The error message you're seeing, "TypeError: Cannot read properties of undefined (reading 'toLowerCase')", indicates that you're trying to call the toLowerCase() method on a variable that is undefined. This typically happens when:

Data is Missing or Not Loaded Yet:

The data you're trying to access in your Vue component is not yet available when the component is initially rendered. This could be due to asynchronous operations (like fetching data from an API) or simply because the data hasn't been initialized properly.
Incorrect Data Access:

You might be trying to access a property that doesn't exist on an object or array. This can happen due to typos, incorrect data structures, or logic errors in your code.
Typo in Property Names:

As discussed previously, if there is a typo in the property name, the value will be undefined.
Specifically, in your case, the error is happening within the filteredEventsListing computed property, where you're attempting to use toLowerCase() on event.durationhour.

Here's how to fix it:

Check for Undefined Values:

Before calling toLowerCase(), you need to check if the value you're working with is defined. You can use an if statement or the optional chaining operator (?.) to do this.
Ensure Correct Data Initialization:

Make sure that your events array is properly initialized in your data() function. If you're fetching data asynchronously, you might need to handle the loading state and update the array when the data is available.
Corrected filteredEventsListing Computed Property:

JavaScript

computed: {
    filteredEvents() {
        return this.events.filter(event => event.category === this.selectedCategory);
    },
    filteredEventsListing() {
        let filtered = this.events;

        if (this.eventidFilter) {
            filtered = filtered.filter(event => event.eventid?.toLowerCase().includes(this.eventidFilter.toLowerCase()))
        }

        if (this.eventNameFilter) {
            filtered = filtered.filter(event => event.eventName?.toLowerCase().includes(this.eventNameFilter.toLowerCase()))
        }

        if (this.eventDurationFilter) {
            filtered = filtered.filter(event => String(event.durationhour)?.includes(this.eventDurationFilter))
        }

        if (this.eventCategoryFilter !== 'All') {
            filtered = filtered.filter(event => event.category === this.eventCategoryFilter);
        }

        return filtered;
    },
},
Explanation of the Fix:

Optional Chaining (?.): The optional chaining operator (?.) allows you to safely access properties of an object or call methods on an object that might be null or undefined. If the object or value before the ?. is null or undefined, the expression will short-circuit and return undefined instead of throwing an error.
Debugging Steps:

Add Console Logs:

Add console.log(event.durationhour) inside your filteredEventsListing computed property to see the values of event.durationhour and identify any undefined values.
Add console.log(this.events) in the data section to verify that the events array is populated.
Inspect Data Source:

If you're fetching data from an API, inspect the API response to ensure that the data is in the expected format.
By following these steps, you should be able to identify and fix the issue causing the "TypeError: Cannot read properties of undefined (reading 'toLowerCase')" error.






Vue.createApp({

    data() {

        return {

          events: [

            { eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8 },

            { eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business', durationhour: 6 },

            { eventid: 'EVT10003', eventname: 'AI & Machine Learning Summit', category: 'Technology', durationhour: 10 },

            { eventid: 'EVT10004', eventname: 'Cybersecurity Workshop', category: 'Technology', durationhour: 4 },

            { eventid: 'EVT10005', eventname: 'Digital Marketing Bootcamp', category: 'Marketing', durationhour: 6 },

            { eventid: 'EVT10006', eventname: 'Blockchain and Cryptocurrency', category: 'Finance', durationhour: 5 },

            { eventid: 'EVT10007', eventname: 'Entrepreneurship Forum', category: 'Business', durationhour: 7 },

            { eventid: 'EVT10008', eventname: 'Data Science Hackathon', category: 'Technology', durationhour: 12 },

            { eventid: 'EVT10009', eventname: 'Leadership and Management Summit', category: 'Business', durationhour: 9 },

            { eventid: 'EVT10010', eventname: 'E-commerce Strategies', category: 'Marketing', durationhour: 6 },

            { eventid: 'EVT10011', eventname: 'AI for Business', category: 'Business', durationhour: 8 },

            { eventid: 'EVT10012', eventname: 'IoT & Smart Devices Expo', category: 'Technology', durationhour: 7 },

            { eventid: 'EVT10013', eventname: 'Brand Strategy and Growth', category: 'Marketing', durationhour: 5 },

            { eventid: 'EVT10014', eventname: 'Investment and Wealth Management', category: 'Finance', durationhour: 6 },

            { eventid: 'EVT10015', eventname: 'Financial Technology (FinTech) Summit', category: 'Finance', durationhour: 8 },

            { eventid: 'EVT10016', eventname: 'AI Ethics and Regulations', category: 'Technology', durationhour: 4 },

            { eventid: 'EVT10017', eventname: 'Business Analytics Workshop', category: 'Business', durationhour: 6 },

            { eventid: 'EVT10018', eventname: 'SEO and Content Marketing', category: 'Marketing', durationhour: 7 },

            { eventid: 'EVT10019', eventname: 'Cryptocurrency Investment Strategies', category: 'Finance', durationhour: 9 },

            { eventid: 'EVT10020', eventname: 'Social Media Marketing Trends', category: 'Marketing', durationhour: 5 },

          ],

          eventidFilter: '',

          eventNameFilter: '',

          eventDurationFilter: '',

          eventCategoryFilter: 'All',

        };

      },

      computed: {

        filteredEventsListing() {

          let filtered = this.events;

         

          if (this.eventidFilter) {

            filtered = filtered.filter(event => event.eventid.includes(this.eventidFilter))

          }



          if (this.eventNameFilter) {

            filtered = filtered.filter(event => event.eventName.includes(this.eventNameFilter))

          }



          if (this.eventDurationFilter) {

            filtered = filtered.filter(event => String(event.durationhour).includes(this.eventDurationFilter))

          }



          if (this.eventCategoryFilter !== 'All') {

            filtered = filtered.filter(event => event.category === this.eventCategoryFilter);

          }



          return filtered;

        },

       

      },

      methods: {

        updateEventCategoryFilter(category){

          this.eventCategoryFilter = category;

        }

      }

}).mount('#app')



// import { ref, computed } from 'vue';

     

// const events = [

//   { eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8 },

//   { eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business', durationhour: 6 },

//   { eventid: 'EVT10003', eventname: 'AI & Machine Learning Summit', category: 'Technology', durationhour: 10 },

//   { eventid: 'EVT10004', eventname: 'Cybersecurity Workshop', category: 'Technology', durationhour: 4 },

//   { eventid: 'EVT10005', eventname: 'Digital Marketing Bootcamp', category: 'Marketing', durationhour: 6 },

//   { eventid: 'EVT10006', eventname: 'Blockchain and Cryptocurrency', category: 'Finance', durationhour: 5 },

//   { eventid: 'EVT10007', eventname: 'Entrepreneurship Forum', category: 'Business', durationhour: 7 },

//   { eventid: 'EVT10008', eventname: 'Data Science Hackathon', category: 'Technology', durationhour: 12 },

//   { eventid: 'EVT10009', eventname: 'Leadership and Management Summit', category: 'Business', durationhour: 9 },

//   { eventid: 'EVT10010', eventname: 'E-commerce Strategies', category: 'Marketing', durationhour: 6 },

//   { eventid: 'EVT10011', eventname: 'AI for Business', category: 'Business', durationhour: 8 },

//   { eventid: 'EVT10012', eventname: 'IoT & Smart Devices Expo', category: 'Technology', durationhour: 7 },

//   { eventid: 'EVT10013', eventname: 'Brand Strategy and Growth', category: 'Marketing', durationhour: 5 },

//   { eventid: 'EVT10014', eventname: 'Investment and Wealth Management', category: 'Finance', durationhour: 6 },

//   { eventid: 'EVT10015', eventname: 'Financial Technology (FinTech) Summit', category: 'Finance', durationhour: 8 },

//   { eventid: 'EVT10016', eventname: 'AI Ethics and Regulations', category: 'Technology', durationhour: 4 },

//   { eventid: 'EVT10017', eventname: 'Business Analytics Workshop', category: 'Business', durationhour: 6 },

//   { eventid: 'EVT10018', eventname: 'SEO and Content Marketing', category: 'Marketing', durationhour: 7 },

//   { eventid: 'EVT10019', eventname: 'Cryptocurrency Investment Strategies', category: 'Finance', durationhour: 9 },

//   { eventid: 'EVT10020', eventname: 'Social Media Marketing Trends', category: 'Marketing', durationhour: 5 }

// ];



// const username = ref('');

// const password = ref('');

// const passwordConfirm = ref('');

// const selectedCategory = ref('Business');

// const eventName = ref('')



// const filteredEvents = computed(() => {

//   return events.filter(event => event.category === selectedCategory.value);

// });



// const updateSelectedCategory = (category) => {

//   selectedCategory.value = category;

// };



This is after I delete tolowercase




The error you're now seeing, "TypeError: Cannot read properties of undefined (reading 'includes')", indicates that the issue is not solely related to toLowerCase() but rather to the data you're trying to filter on. You're attempting to use the includes() method on a value that is undefined.

Problem:

Undefined Values During Filtering:
Even after removing toLowerCase(), you're still encountering undefined values when using includes() within your filteredEventsListing computed property. This means that some of the event.eventid, event.eventName, or String(event.durationhour) values are undefined at some point during the filtering process.
Solutions:

Check for Undefined Values Before Using includes():

You must ensure that the values you're using with includes() are not undefined. The safest approach is to use optional chaining (?.) to avoid errors.
Verify Data Integrity:

Double-check your events array to ensure that all the eventid, eventname, and durationhour properties are consistently defined for each event object. If any of these properties are missing or undefined, it will cause the error.
Handle Potential Undefined Filter Values:

It's also possible that your filter values (this.eventidFilter, this.eventNameFilter, this.eventDurationFilter) are undefined. You should check for this and provide default values or skip the filtering if they're undefined.
Corrected filteredEventsListing Computed Property:

JavaScript

computed: {
    filteredEventsListing() {
        let filtered = this.events;

        if (this.eventidFilter) {
            filtered = filtered.filter(event => event.eventid?.includes(this.eventidFilter));
        }

        if (this.eventNameFilter) {
            filtered = filtered.filter(event => event.eventName?.includes(this.eventNameFilter));
        }

        if (this.eventDurationFilter) {
            filtered = filtered.filter(event => String(event.durationhour)?.includes(this.eventDurationFilter));
        }

        if (this.eventCategoryFilter !== 'All') {
            filtered = filtered.filter(event => event.category === this.eventCategoryFilter);
        }

        return filtered;
    },
},
Explanation of Changes:

Optional Chaining (?.): The optional chaining operator (?.) is used before includes() to safely handle cases where event.eventid, event.eventName, or String(event.durationhour) might be undefined.
Debugging Steps:

Add Console Logs:

Add console.log(event.eventid, event.eventName, event.durationhour) inside your filteredEventsListing computed property to inspect the values and identify any undefined values.
Add console.log(this.eventidFilter, this.eventNameFilter, this.eventDurationFilter) to inspect the filter values.
Add console.log(this.events) to verify that the events array is populated.
Inspect Data Source:

Carefully examine the events array in your data() function to ensure that all event objects have the required properties.
By implementing these changes and debugging steps, you should be able to resolve the "TypeError: Cannot read properties of undefined (reading 'includes')" error and get your event table to work correctly.



import events from './events.txt'; // Import your events.txt file



export default {

data() {

return {

events: [],

eventIdFilter: '',

eventNameFilter: '',

durationFilter: '',

categoryFilter: 'All'

};

},

computed: {

filteredEvents() {

let filtered = this.events;



if (this.eventIdFilter) {

filtered = filtered.filter(event => event.eventId.toLowerCase().includes(this.eventIdFilter.toLowerCase()));

}



if (this.eventNameFilter) {

filtered = filtered.filter(event => event.eventName.toLowerCase().includes(this.eventNameFilter.toLowerCase()));

}



if (this.durationFilter) {

filtered = filtered.filter(event => event.duration.toString().includes(this.durationFilter));

}



if (this.categoryFilter !== 'All') {

filtered = filtered.filter(event => event.category === this.categoryFilter);

}



return filtered;

}

},

mounted() {

this.parseEvents(events);

},

methods: {

parseEvents(data) {

const lines = data.split('\n');

const events = [];



for (const line of lines) {

if (line.trim()) {

const [eventId, eventName, category, duration] = line.split(',');

events.push({

eventId: eventId.trim(),

eventName: eventName.trim(),

category: category.trim(),

duration: parseInt(duration.trim())

});

}

}



this.events = events;

}

}

};



Rewrite this ijn options API



JavaScript

import events from './events.txt'; // Import your events.txt file

export default {
  data: function() {
    return {
      events: [],
      eventIdFilter: '',
      eventNameFilter: '',
      durationFilter: '',
      categoryFilter: 'All'
    };
  },
  computed: {
    filteredEvents: function() {
      let filtered = this.events;

      if (this.eventIdFilter) {
        filtered = filtered.filter(event => event.eventId.toLowerCase().includes(this.eventIdFilter.toLowerCase()));
      }

      if (this.eventNameFilter) {
        filtered = filtered.filter(event => event.eventName.toLowerCase().includes(this.eventNameFilter.toLowerCase()));
      }

      if (this.durationFilter) {
        filtered = filtered.filter(event => event.duration.toString().includes(this.durationFilter));
      }

      if (this.categoryFilter !== 'All') {
        filtered = filtered.filter(event => event.category === this.categoryFilter);
      }

      return filtered;
    }
  },
  mounted: function() {
    this.parseEvents(events);
  },
  methods: {
    parseEvents: function(data) {
      const lines = data.split('\n');
      const events = [];

      for (const line of lines) {
        if (line.trim()) {
          const [eventId, eventName, category, duration] = line.split(',');
          events.push({
            eventId: eventId.trim(),
            eventName: eventName.trim(),
            category: category.trim(),
            duration: parseInt(duration.trim())
          });
        }
      }

      this.events = events;
    }
  }
};
Changes Made:

data() to data: function(): In the Options API, the data property is defined as a function that returns the data object.
computed property functions: The computed property filteredEvents is defined as a function within the computed object.
mounted() to mounted: function(): The mounted lifecycle hook is defined as a function.
methods property functions: The parseEvents method is defined as a function within the methods object.
Key Differences Between Composition API and Options API:

Composition API: Organizes code by logical concerns (features) using setup() and reactive variables.
Options API: Organizes code into distinct options (data, computed, methods, lifecycle hooks).
In the Options API, you use this to access data properties, computed properties, and methods within the component instance. The data property must be a function that returns the data object to ensure that each component instance has its own isolated data.