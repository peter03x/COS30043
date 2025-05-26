<script setup>
import { ref } from 'vue';
const tasks = ref([]);
const newTaskInput = ref('');

const addTask = () => {
  if (newTaskInput.value.trim()) {
    tasks.value.unshift({
      text: newTaskInput.value.trim(),
      priority: 'Low',
    });
    newTaskInput.value = '';
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};


const togglePriority = (index) => {
  if (tasks.value[index].priority === 'Low') {
    tasks.value[index].priority = 'High';
  } else {
    tasks.value[index].priority = 'Low';
  }
};

</script>

<template>
  <div class="container mt-4 mb-4">
    <h2 class = "d-flex align-content-center justify-content-center">
      To-do List
    </h2>
    <div class = "input-group mb-4 mt-4">
      <input
          type="text"
          class="form-control"
          placeholder="Enter new task..."
          v-model="newTaskInput"
          @keyup.enter="addTask"
      />
      <button class="btn btn-primary" type="button" @click="addTask">
        Add Task
      </button>
    </div>

    <div class = "list-group">
      <li class = "list-group-item d-flex justify-content-between align-items-center"
          v-for="(task, index) in tasks"
          :key="index"
      >
        <span>
          {{task.text}}
          <span :class="task.priority === 'High' ? 'text-danger' : 'text-muted'">
            ({{task.priority}} Priority)
          </span>
        </span>
        <div>
          <button class = "btn btn-warning me-2"
                  @click="togglePriority(index)">
            Mark as {{ task.priority === 'Low' ? 'High' : 'Low' }} Priority
          </button>
          <button class = "btn btn-danger me-2"
          @click="deleteTask(index)">
            Delete
          </button>
        </div>

      </li>

    </div>

  </div>
</template>

<style scoped>

</style>