<template>
    <div class="label">
        <label :for="name">{{ name }}</label>
        <div class="error">{{ error }}</div>
    </div>

    <input
        :id="name"
        type="text"
        :value="value"
    />
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        rules: {
            // min: number,
            // required: boolean,
            type: Object,
            default: {}
        }
    },

    data() {
        return {
            value: ''
        }
    },

    computed() {
        error() {
            if (this.rules.required &&  this.value.length === 0) {
                return 'Value is required.'
            }
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