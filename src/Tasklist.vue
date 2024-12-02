<template>
  <form action="" @submit.prevent="addTodo">
    <fieldset role="group">
      <input v-model="newTodo" type="text" placeholder="Tâche à effectuer" />
      <button :disabled="newTodo.length === 0">Ajouter</button>
    </fieldset>
  </form>
  <div class="todo" v-if="todos.length === 0">Aucune tâche !</div>
  <div v-else>
    <ul>
      <li
        v-for="todo in sortedTodo()"
        :key="todo.date"
        :class="{ completed: todo.completed }"
      >
        <label>
          <input type="checkbox" v-model="todo.completed" /> {{ todo.title }}
        </label>
      </li>
    </ul>
    <label>
      <input type="checkbox" v-model="hideCompleted" /> Masquer les tâches
      complétées
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";
const newTodo = ref("");
const todos = ref([]);
const hideCompleted = ref(false)
const addTodo = () => {
  todos.value.push({
    title: newTodo.value,
    completed: false,
    date: Date.now(),
  });
  newTodo.value = "";
};

const sortedTodo = () => {
  const sortedTodos = todos.value.toSorted((a, b) =>
    a.completed > b.completed ? 1 : -1
  );
  if (hideCompleted.value === true) {
    return sortedTodos.filter((t) => t.completed === false);
  }
  return sortedTodos;
};
</script>

<style>
.todo {
  color: white;
}

.completed {
  opacity: 0.5;
  text-decoration: line-through;
}
</style>
