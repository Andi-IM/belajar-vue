<script>
export default {
  props: ['total', 'per_page', 'page']
}
</script>

<template>
  <div class="mt-8 text-center">
    <p>Menampilkan {{ per_page }} dari {{ total }} data</p>
    <div class="inline-flex items-center space-x-1">
      <button class="bg-gray-200 text-gray-800 px-3 py-1 rounded">1</button>
      <button class="bg-gray-200 text-gray-800 px-3 py-1 rounded">2</button>
    </div>
  </div>
</template>

<style scoped>

</style>
