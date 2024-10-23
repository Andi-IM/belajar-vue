<script>
import ShopItem from '@/components/shop/ShopItem.vue'
import { getProducts } from '@/http/product.js'
import Pagination from '@/components/shop/Pagination.vue'
import VueFooter from '@/components/shop/Footer.vue'

export default {
  name: 'shop-view',
  components: {
    VueFooter,
    Pagination,
    ShopItem,
  },
  data() {
    return {
      products: [],
      pagination: {
        total: 0,
        per_page: 0,
        page: 0,
      },
      isLoading: false,
    }
  },
  beforeMount: () => {
    console.log('beforeMount');
  },
  mounted: () => {
    getProducts().then(response => {
      this.products = response.data.content
      this.pagination.total = response.data.total
      this.pagination.per_page = response.data.per_page
      this.pagination.page = response.data.page
    })
  },
  methods: {},
}
</script>

<template>
  <div
    class="w-full h-full bg-white flex-col justify-start items-center gap-2.5 inline-flex"
  >
    <div class="flex-grow">
      <div class="container mx-auto p-4">
        <div class="bg-gray-300 h-64 mb-8"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="(item, index) in products" :key="index" class="bg-white border rounded-lg p-4">
            <p>{{ item.name }} PP </p>
          </div>

          <p>Toko</p>

          <p v-if="!isLoading">sedang mengambil data</p>
          <Pagination
            :page="pagination.page"
            :per_page="pagination.per_page"
            :total="pagination.total"
          />
        </div>
      </div>
    </div>
  </div>
  <VueFooter/>
</template>

<style scoped></style>
