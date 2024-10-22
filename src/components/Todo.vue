<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'Todo',
  components: {
    TodoItem,
  },
  data() {
    return {
      model: {
        title: '',
      },
      todos: [],
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.model.title,
        done: false,
      })
      this.model.title = ''
    },
    setDone(index) {
      this.todos[index].done = true
    },
  },
}
</script>

<template>
  <div class="px-8 py-2 flex flex-col gap-2">
    <h1 class="text-2xl font-bold">Todo</h1>
    <div class="flex flex-row justify-between">
      <input
        type="text"
        v-model="model.title"
        class="py-2 w-full px-3 border border-gray-300 rounded-md"
        placeholder="Saya ingin apa hari ini"
      />
      <button
        @click="addTodo"
        class="py-2 px-3 bg-blue-300 hover:bg-blue-500 rounded-md text-white"
      >
        Tambahkan
      </button>
    </div>
    <div class="flex flex-col gap-2">
      <div v-for="(todoItem, index) in todos">
        <TodoItem
          :todo-item="todoItem"
          :index="index"
          :setDone="setDone"
        ></TodoItem>
      </div>
    </div>
  </div>
</template>
