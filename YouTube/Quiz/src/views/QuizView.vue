<script setup>
import Questions from '../components/Question.vue';
import QuizHeader from '../components/QuizHeader.vue';
import Result from '../components/Result.vue';
import quizzes from "../../data/quiz.json";

import {useRoute} from "vue-router";
import { ref, watch, computed } from "vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizzes.find( q => q.id === quizId).questions;

const currentQuestionId = ref(0);

// const questionStatus = ref(`${currentQuestionId.value + 1}/${quiz.length}`);

// watch(()=>currentQuestionId.value, ()=> {
//     questionStatus = `${currentQuestionId.value + 1}/${quiz.length}`
// })

// or you can do below code, it is the same.
const questionStatus = computed(() => `${currentQuestionId.value}/${quiz.length}`);
const barPercentage = computed(()=> `${currentQuestionId.value/quiz.length * 100}%`);

const correctAnswers = ref(0);
const showResults = ref(false);

const onOptionSelected = (isCorrect) => {

    if(isCorrect){
        correctAnswers.value++;
    };

    if (currentQuestionId.value === quiz.length - 1) {
        showResults.value = true;
    }

    currentQuestionId.value++;
};

</script>

<template>
    <div>
        <QuizHeader
            :questionStatus="questionStatus"
            :barPercentage="barPercentage"
        />
        <div class="main">
            <Questions 
                v-if="!showResults"
                :question="quiz[currentQuestionId]"
                @selectOption="onOptionSelected "
            />

            <Result
            v-else
            :quizLength="quiz.length"
            :correctAnswers="correctAnswers"
            />
        </div>

    </div>

</template>

<style scoped>

.main {
    margin-top: 20px;
    margin-left: 20px;
}

</style>