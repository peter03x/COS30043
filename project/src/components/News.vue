<script setup>
  import Paginate from 'vuejs-paginate-next'
  import { ref, computed, watch } from 'vue'
  import dataFile from '../data/data.json'
  const data = ref(dataFile)
  const searchText = ref('')
  const searchCategory = ref('')
  const currentPage = ref(1)
  const newsPerPage = ref(6)

    const searchedData = computed(() => {
      return data.value.filter(item => {
        const searchTextResult =
            item.title.toLowerCase().includes(searchText.value.toLowerCase()) ||
            item.content.toLowerCase().includes(searchText.value.toLowerCase()) ||
            item.date.includes(searchText.value)

        const searchCategoryResult =
            searchCategory.value === '' ||
            item.category === searchCategory.value

        return searchTextResult && searchCategoryResult
      })
  })

  const categories = computed(() => {
    return [...new Set(data.value.map(item => item.category))]
  })

  const totalPages = computed(() => {
    return Math.ceil(searchedData.value.length / newsPerPage.value)
  })

  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * newsPerPage.value
    const end = start + newsPerPage.value
    return searchedData.value.slice(start, end)
  })

  const changePage = (pageNum) => {
    currentPage.value = pageNum
  }

  // Reset to first page when search changes
  watch([searchText, searchCategory], () => {
    currentPage.value = 1
  })

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
</script>

<template>
  <div class="container">
    <h1 class = "mb-4 justify-content-center">
      News
    </h1>
    <div class = "row mb-4">
      <div class = "col-md-8 mb-md-0 mb-2">
        <input
            v-model = "searchText"
            placeholder="Search by time, title or content"
            class = "form-control"
        >
      </div>
      <div class = "col-md-4 mb-md-0 mb-2">
        <select v-model = "searchCategory" class = "form-select">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
    </div>

    <div class="row">
      <div v-for="item in paginatedData" :key="item.id" class="col-lg-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <h6 class="card-subtitle mb-2">
              {{ formatDate(item.date) }} | {{ item.category }}
            </h6>
            <p class="card-text">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>

    <Paginate
        v-if="totalPages > 1"
        v-model="currentPage"
        :page-count="totalPages"
        :click-handler="changePage"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination justify-content-center'"
        :active-class="'active'"
    />

  </div>




</template>

<style scoped>

</style>