import * as Vue from "vue/dist/vue.esm-bundler.js";

const app = Vue.createApp({

    template: `
    <h1>{{count}}</h1>
    <button v-on:click="increment">Increment</button>
    <div v-if=isEven(count)>
        Even
    </div>
    <div v-else>
        Odd
    </div>
    `,

    data() {
        return {
            count: 0
        }
    },

    methods: {
        increment() {
            this.count += 1;
        },

        isEven(num) {
            return num % 2 === 0 ? true : false;
        }
    }
})

app.mount('#app')