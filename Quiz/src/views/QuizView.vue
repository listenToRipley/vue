<script setup>
import Questions from '../components/Question.vue';
import QuizHeader from '../components/QuizHeader.vue';

// const quiz = quiz.find(sub => sub.id === parseInt(route.params.id)).questions

</script>

<template>
    <div>
        <QuizHeader/>
    </div>

    <div>
        <Questions/>
    </div>

</template>

<style scoped>
</style>