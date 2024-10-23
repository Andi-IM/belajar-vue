<script>
export default {
  name: 'vue-footer',
}
</script>

<template>
  <footer class="bg-gradient-to-r from-blue-500 to-teal-500 p-6 text-white">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-xl font-bold mb-3">Temukan Kami</h3>
        <div class="bg-white h-40 rounded-lg shadow-md overflow-hidden">
          <iframe
            frameborder="0" style="border:0"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAyHPIFYYSvlBzsxFyN_p6jWQpaxP57TjA&q=yogyakarta"
            class="w-full h-full object-cover"
            allowfullscreen>
          </iframe>
        </div>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-3">Hubungi Kami</h3>
        <form class="space-y-4">
          <input type="text" placeholder="Nama" class="w-full p-3 border border-teal-300 text-gray-800 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-400">
          <input type="email" placeholder="Email" class="w-full p-3 border border-teal-300 text-gray-800 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-400">
          <input type="text" placeholder="Subjek" class="w-full p-3 border border-teal-300 text-gray-800 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-400">
          <button type="submit" class="bg-teal-700 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition duration-300">Kirim Masukan</button>
        </form>
      </div>
    </div>
    <div class="text-center mt-6">
      <p class="text-sm">© 2024 Toko Abu Abu. Semua hak dilindungi.</p>
    </div>
  </footer>
</template>

<style scoped></style>
