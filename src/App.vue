<template>
  <!-- 漸層從左上 → 右下bg-gradient-to-r from-green-300從綠 via-blue-500中間藍 to-purple-600到紫 -->
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-blue-500 to-purple-600">
    <!-- sm:w-auto是RWD寫法, sm以上會生效w-auto, sm以下是w-full -->
    <!-- shadow-lg帶陰影, rounded-t-lg 可指定只有上方左右兩邊為圓角 -->
    <!-- 圖片也可這樣寫bg-[url('https://...')] bg-no-repeat bg-center bg-contain 但沒有背景圖半透明-->
    <div class="bg-white p-8 rounded-lg shadow-lg w-full sm:w-auto max-w-md custom-bg-img">
      <!-- 文字漸層色, 使用 bg-clip-text 表示將背景色切成符合文字 -->
      <!-- 再使用 text-transparent 表示將文字設成透明色 -->
      <h1 class="text-2xl font-bold mb-6 text-center bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">Todo List</h1>
      <div class="flex mb-4">
        <!-- @keyup.enter語法糖:
        原始寫法
        <input @keyup="handleKeyup">

        在 methods 裡判斷
        methods: {
          handleKeyup(event) {
            if (event.key === 'Enter') {
              do something
            }
          }
        } Vue簡化成@keyup.enter -->
        <input 
          v-model="newTodo"
          @keyup.enter="addTodo"
          class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
          placeholder="Add a new todo"
        />
        <button 
          @click="addTodo"
          class="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>

        <!-- 更客製化自定義class可寫在style.css跟tailwind.config.js -->
        <!-- <button class="btn-1">自訂按鈕</button> -->
      </div>
      <ul>
        <li 
          v-for="(todo, index) in todos"
          :key="index"
          class="flex items-center justify-between p-2 border-b"
        >
      <!-- {{ todo }} 會等於 { "Text": "2222", "completed": false } -->
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

const newTodo = ref('') // input 綁定的變數，初始為空字串
const todos = ref([])

const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    //在陣列push增加一筆包含 text 和 completed 狀態的物件
    todos.value.push({ text: newTodo.value, completed: false }) 
    // 再清空 input
    newTodo.value = ''
  }
}

const toggleTodo = (index) => {
  // 從 Undo 切換 Complete
  todos.value[index].completed = !todos.value[index].completed
}

const removeTodo = (index) => {
  // 從陣列移除
  todos.value.splice(index, 1)
}
</script>
