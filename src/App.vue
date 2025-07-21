<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Todo List</h1>
      <div class="flex mb-4">
        <input 
          v-model="newTodo"
          @keyup.enter="addTodo"
          class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new todo"
        />
        <button 
          @click="addTodo"
          class="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul>
        <li 
          v-for="(todo, index) in todos"
          :key="index"
          class="flex items-center justify-between p-2 border-b"
        >
          <span :class="{ 'line-through text-gray-500': todo.completed }">{{ todo.text }}</span>
          <div>
            <button 
              @click="toggleTodo(index)"
              class="text-green-500 hover:text-green-600 mr-2"
            >
              {{ todo.completed ? 'Undo' : 'Complete' }}
            </button>
            <button 
              @click="removeTodo(index)"
              class="text-red-500 hover:text-red-600"
            >
              Remove
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTodo = ref('')
const todos = ref([])

const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    todos.value.push({ text: newTodo.value, completed: false })
    newTodo.value = ''
  }
}

const toggleTodo = (index) => {
  todos.value[index].completed = !todos.value[index].completed
}

const removeTodo = (index) => {
  todos.value.splice(index, 1)
}
</script>
