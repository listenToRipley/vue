<template>
    App
    <my-button
        background="darkslateblue"
        color="white"
        :disabled="!value"
    />
</template>

<script>
import MyButton from "./MyButton.vue"
export default {
    components: {
        MyButton
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