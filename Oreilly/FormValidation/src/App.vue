<template>
    My App
    <hr>
    
    <my-input 
        name="Username"
        :rules="{required: true, min: 5}"
        :value="username.value"
        :error="username.error"
        @update="update"
    />

    <my-input 
        name="Password"
        :rules="{required: true, min: 10}"
        :value="password.value"
        :error="password.error"
        @update="update"
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
            value: true,
            username: {
                value: '',
                error: '',
            },
            password: {
                value: '',
                error: ''
            }
        }
    },

    methods: {
        update({name, value, error}) {
            this[name].value = value;
            this[name].error = error;
        }
    }

}

</script>

<style scoped>
</style>