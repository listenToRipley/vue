<script setup>
import { defineProps } from 'vue';

const {question} = defineProps(['question'])

</script>

<template>

    <div class="questions-container">
        <div 
            class="question"
            >
            <div>
                {{ question.text }}
            </div>
        </div>
        
        <div 
            class="options-container"
        >
            <div 
                class="option"
                v-for="option in question.options"
                :key="option.id"
            >
                <p class="option-label">{{ option.label }}</p>
                <div class="option-value">
                    <p>{{ option.text }}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

.questions-container {
        margin-top: 20px;
        margin-left: 20px;
    }
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