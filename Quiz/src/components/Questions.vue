<script setup>
import {useRoute, RouterView} from "vue-router";
import quiz from "../../data/quiz.json"

const route = useRoute();

const questions = quiz.find(sub => sub.id === parseInt(route.params.id)).questions

console.log(questions)
</script>

<template>

    <div>
        <div 
            class="question"
            >
            <div>
                placeholder question
            </div>
        </div>
        
        <div 
            class="options-container"
        >
            <div class="option">
                <p class="option-label">A</p>
                <div class="option-value">
                    <p>Value</p>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

    .question {
        font-size: 30px;
        margin-bottom: 20px;
    }

    .option {
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;
    }

    .option-label {
        background-color: beige;
        width: 50px;
        height: 50px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .option-value {
        background-color: azure;
        width: 100%;
        font-size: 20px;
        padding: 10px 20px;
    }

</style>