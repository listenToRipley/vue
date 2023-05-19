<template>
    <div class="lab">
        <label :for="name">{{ name }}</label>
    </div>

    <input
        :id="name"
        type="text"
    />
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

.input-wrapper {
    display: flex;
    flex-direction: column;
}

.error {
    color: red;
}

.label {
    display: flex;
    justify-content: space-between;
}

input { 
    background: none;
    color: black;
    border: 1px solid silver;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0;
}

</style>