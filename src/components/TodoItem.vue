<script>
export default {
  name: 'TodoItem',
  props: ['todoItem', 'index', 'setDone'],
}
</script>

<template>
  <div class="px-2 py-3 border flex flex-row justify-between items-center">
    <span
      :class="{
        'line-through': todoItem.done,
        'text-gray-400': todoItem.done,
      }"
    >
      {{ todoItem.title }}
    </span>

    <button
      v-if="!todoItem.done"
      @click="setDone(index)"
      class="px-2 py-3 bg-green-500 rounded-md text-white"
    >
      Done
    </button>
  </div>
</template>
