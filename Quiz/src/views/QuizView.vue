<script setup>
import Questions from '../components/Question.vue';
import QuizHeader from '../components/QuizHeader.vue';
import quizzes from "../../data/quiz.json";

import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizzes.find( q => q.id === quizId).questions;

const currentQuestionId = ref(0);

const questionStatus = `${currentQuestionId.value}/${quiz.questions.length}`;

</script>

<template>
    <div>
        <QuizHeader
            :questionStatus="questionStatus"
        />
        <div>
            <Questions :question="quiz[currentQuestionId]"/>
        </div>
    </div>

</template>

<style scoped>
</style>