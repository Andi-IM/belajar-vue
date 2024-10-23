<script>
export default {
  props: ['product'],
}
</script>

<template>
  <div
    class="w-60 h-72 p-2.5 bg-white rounded-lg border border-black/50 flex-col justify-start items-start gap-2.5 inline-flex"
  >
    <div class="self-stretch h-28 bg-zinc-300 rounded-md"></div>
    <div class="text-black text-xs font-bold font-['Inter']">{{ product.nama_barang }}</div>
    <div class="w-60 h-7 text-black text-xs font-normal font-['Inter']">
      Sepatu baru merek hokka yang enak untuk dipakai lari dan jalan jalan..<br />
    </div>
    <div class="self-stretch justify-start items-start gap-2.5 inline-flex">
      <div
        class="px-2.5 py-1 bg-cyan-300 rounded-sm flex-col justify-start items-start gap-2.5 inline-flex"
      >
        <div class="text-neutral-500 text-xs font-normal font-['Inter']">
          Nyaman
        </div>
      </div>
      <div
        class="px-2.5 py-1 bg-amber-300 rounded-sm flex-col justify-start items-start gap-2.5 inline-flex"
      >
        <div class="text-neutral-500 text-xs font-normal font-['Inter']">
          Murah
        </div>
      </div>
      <div
        class="px-2.5 py-1 bg-green-400 rounded-sm flex-col justify-start items-start gap-2.5 inline-flex"
      >
        <div class="text-neutral-500 text-xs font-normal font-['Inter']">
          Gratis Ongkir
        </div>
      </div>
    </div>
    <div class="w-52 h-0.5 relative bg-stone-300 rounded-lg"></div>
    <div class="self-stretch justify-start items-start gap-0.5 inline-flex">
      <div
        class="grow shrink basis-0 h-6 px-1 py-1.5 bg-lime-700 rounded-sm justify-center items-center gap-2.5 flex"
      >
        <div
          class="grow shrink basis-0 text-center text-white text-xs font-normal font-['Inter']"
        >
          Masukan Keranjang
        </div>
      </div>
      <div
        class="px-2.5 py-1.5 bg-white rounded-sm border border-black/50 justify-start items-start gap-2.5 flex"
      >
        <div class="text-zinc-600 text-xs font-normal font-['Inter']">
          Beli Langsung
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
