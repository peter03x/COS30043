<script setup>
import {ref} from 'vue';
import JobDetail from './components/JobDetail.vue';
import JobList from './components/JobList.vue';
import { RouterView } from 'vue-router';
import JobApplication from "@/components/JobApplication.vue";
import ToDoList from "@/components/ToDoList.vue";

</script>

<template>
  <header>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=
    Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet">

  </header>

  <main>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class = "navbar-brand" to="/">JOBLIGATOR</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarContent" aria-controls="navbarContent"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <h2 class = "mt-4 d-flex justify-content-center align-content-center">
      Job Explorer
    </h2>
    <div class="container mt-4">
      <div class="row">
        <div class = "col-4 border">
          <JobList/>
        </div>
        <div class = "col-8 border">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <hr class="mt-4"/>
    <JobApplication></JobApplication>
    <hr class="mt-4"/>
    <ToDoList></ToDoList>
  </main>
</template>