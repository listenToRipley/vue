<script setup>
import q from "../../data/quiz.json";
import {ref, watch } from "vue";

import Card from "../components/Card.vue";

const quizzes = ref(q);
// console.log(quizzes.value);

const search = ref("");

watch(search, () => {
    quizzes.value = q.filter(quiz =>  quiz.name.toLowerCase().includes(search.value.toLowerCase()))
});

</script>

<template>
    <div>
        <header>
            <h1>Quiz</h1>
            <input 
            v-model.trim="search"
            type="text"
            placeholder="Search...">
        </header>

        <div class="options-cards">
            <Card 
            v-for="quiz in quizzes" 
            :key="quiz.id" 
            class="card"
            :quiz="quiz"
            />
        </div>
    </div>

</template>

<style scoped>

header {
    margin-bottom: 10px;
    margin-top: 30px;
    margin-left: 20px;
    display: flex;
    align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}


.options-cards {
  display: flex;
  flex-wrap: wrap;
  margin-left: 25px;
  margin-top: 40px;
}

</style>