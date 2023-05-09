<script setup>
import { defineProps } from 'vue';

const {status} = defineProps(['questionStatus']);

</script>

<template>
    <header>
        <h4>Question 1/3</h4>
        <div class="bar">
            <div class="completion">

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
        width: 0%;
        background-color: beige;
    }

</style>