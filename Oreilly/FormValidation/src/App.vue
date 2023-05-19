<template>
    My App
    <hr>
    
    <my-input 
        name="Username"
    />

    <br>

    <my-button
        background="darkslateblue"
        color="white"
        :disabled="!value"
    />

</template>

<script>
import MyButton from "./component/MyButton.vue";
import MyInput from "./component/MyInput.vue";

export default {
    components: {
        MyButton,
        MyInput
    },

    data() {
        return {
            value: true
    }
}

}

</script>

<style scoped>
</style>