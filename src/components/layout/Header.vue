<script>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="bg-blue-500 text-white p-4 flex flex-row justify-between gap-4">
    <h1 class="text-2xl font-bold">Vue 3 Todo App</h1>
    <div id="menu" class="flex flex-row gap-4">
      <router-link class="hover:text-blue-600" to="/">Home</router-link>
      <router-link class="hover:text-blue-600" to="/about">About</router-link>
    </div>
  </div>
</template>
