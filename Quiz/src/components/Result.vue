<script setup>
import { defineProps } from 'vue';
import { RouterLink } from "vue-router";

const {quizLength, correctAnswers} = defineProps(["quizLength", "correctAnswers"])

</script>

<template>
    <div class="results">
        <p>Your results...</p>
        <h4>{{correctAnswers}}/{{ quizLength }}</h4>
        <RouterLink to="/">Go Back...</RouterLink>
    </div>
</template>

<style scoped>

.result {
    text-align: center;
    padding: 100px 0;
}

p {
    font-size: 25px;
}

h4 {
    font-size: 80px;
}

</style>