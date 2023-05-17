<script setup>
import { defineProps } from 'vue';

const {
    questionStatus, 
    barPercentage} = defineProps([
        'questionStatus', 
        'barPercentage'
    ]);

</script>

<template>
    <header>
        <h4>Question {{ questionStatus }}</h4>
        <div class="bar">
            <div 
                class="completion"
                :style="{width:barPercentage}"
            >

            </div>
        </div>
    </header>
</template>

<style scoped>
    header {
        margin-top: 20px;
        margin-left: 20px;
    }


    header h4 {
        font-size: 40px;
    }

    .bar {
        width: 300px;
        height: 50px;
        border: 3px solid beige;
    }

    .completion {
        height: 100%;
        background-color: beige;
    }

</style>