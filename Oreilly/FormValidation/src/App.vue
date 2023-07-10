<template>
    My App
    <hr>
    
    <my-input 
        name="Username"
        :rules="{required: true, min: 5}"
        :value="username.value"
        @update="update"
    />

    <my-input 
        name="Password"
        :rules="{required: true, min: 10}"
        :value="password.value"
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
                value: 'user',
                valid: false,
            },
            password: {
                value: 'pass',
                valid: false
            }
        }
    },

    methods: {
        update({name, value}) {
            this[name].value = value;
        }
    }

}

</script>

<style scoped>
</style>