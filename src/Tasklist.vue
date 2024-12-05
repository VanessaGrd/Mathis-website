<template>
  <div class="tasklistContainer">
    <form @submit.prevent="addTodo">
      <fieldset role="group">
        <input
          v-model="newTodo"
          type="text"
          placeholder="Tâche à effectuer"
          class="taskInput"
        />
        <button :disabled="newTodo.length === 0" class="addButton">
          Ajouter
        </button>
      </fieldset>
    </form>

    <div class="todo" v-if="todos.length === 0">Aucune tâche !</div>

    <div v-else>
      <ul class="todoList">
        <li
          v-for="todo in sortedTodo()"
          :key="todo.date"
          :class="['todoItem', { completed: todo.completed }]"
        >
          <label>
            <input type="checkbox" v-model="todo.completed" />
            <span>{{ todo.title }}</span>
          </label>
        </li>
      </ul>
      <label class="hideCompletedLabel">
        <input type="checkbox" v-model="hideCompleted" />
        Masquer les tâches complétées
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const newTodo = ref("");
const todos = ref([]);
const hideCompleted = ref(false);
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

<style scoped>
.tasklistContainer {
  background-color: black; /* Couleur de fond sombre */
  color: #ec4048; /* Couleur verte typique des terminaux vintage */
  width: 60vw;
  height: auto;
  padding: 20px;
  border: 3px solid #ec4048; /* Bord vert néon */
  border-radius: 10px;
  margin: auto;
  text-align: center;
  box-shadow: 0px 0px 15px #ec4048; /* Glow vert */
}

/* Champs d'entrée */
.taskInput {
  width: 100%;
  padding: 10px;
  margin-right: 10px;
  background-color: black;
  color: #ec4048;
  border: 2px solid #ec4048;
  border-radius: 0;
  font-size: 14px;
  box-shadow: inset 0px 0px 5px #ec4048;
}

/* Bouton "Ajouter" */
.addButton {
  padding: 10px 15px;
  background-color: black;
  color: #ec4048;
  border: 2px solid #ec4048;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.addButton:hover {
  transform: translateY(-2px);
  box-shadow: 0px 0px 10px #ec4048;
}

.addButton:disabled {
  color: #555;
  border-color: #555;
  cursor: not-allowed;
}

/* Liste des tâches */
.todoList {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

/* Éléments de la liste */
.todoItem {
  background-color: black;
  color: #ec4048;
  border: 2px  #ec4048;
  margin: 10px 0;
  padding: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 5px #ec4048;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.todoItem:hover {
  transform: translateY(-3px);
  background-color: #001900;
}

/* Tâches complétées */
.todoItem.completed {
  color: #555;
  border-color: #555;
  text-decoration: line-through;
  box-shadow: none;
}

/* Checkbox */
input[type="checkbox"] {
  accent-color: #ec4048; /* Couleur de la case cochée */
  transform: scale(1.5);
}

/* Label pour masquer les tâches */
.hideCompletedLabel {
  font-size: 12px;
  margin-top: 20px;
  color: #ec4048;
}

/* Effets de texte */
.todo {
  font-size: 16px;
  color: #ff0000; /* Rouge pour les alertes */
  text-align: center;
}

/* Fieldset */
fieldset {
  border: none;
  margin-bottom: 20px;
}
</style>
