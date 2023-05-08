<script setup>
import {useRoute, RouterView} from "vue-router";
import quiz from "../../data/quiz.json"

const route = useRoute();

const questions = quiz.find(sub => sub.id === parseInt(route.params.id)).questions

console.log(questions)
</script>

<template>

    <div>
        <h1>Questions</h1>
        <div 
            v-for="question in questions"
            :key="question.id"
            >
            <div>
                {{ question.id }}. {{ question.text }}
            </div>
        </div>
        <RouterView />
    </div>

</template>

<style scoped>
</style>