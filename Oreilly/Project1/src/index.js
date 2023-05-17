import * as Vue from "vue/dist/vue.esm-bundler.js";

const app = Vue.createApp({

    template: `
    <h1>{{count}}</h1>
    <button v-on:click="increment">Increment</button>
    <div v-if=isEven>
        Even
    </div>
    <div v-else>
        Odd
    </div>

    <div v-for="number in numbers">
        <div>{{number}}</div>
    </div>
    `,

    data() {
        return {
            count: 0,
            numbers: [1,2,3,4,5,6,7,8,9,10]
        }
    },

    methods: {
        increment() {
            this.count += 1;
        },

        isEven() {
            return this.count % 2 === 0 ? true : false;
        }
    }
})

app.mount('#app')