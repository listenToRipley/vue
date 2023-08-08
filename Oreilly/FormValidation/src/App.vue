<template>
    My App
    <hr>
    
  <form @submit.prevent="submit">
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
        :type="password"
        @update="update"
    />

    <br>

    <my-button
        background="darkslateblue"
        color="white"
        :disabled="!value"
    />

  </form>
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

    computer: {
        valid() {
            return(
                !this.username.error &&
                !this.password.error
            )
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