import * as Vue from "vue/dist/vue.esm-bundler.js";

const app = Vue.createApp({

    template: `
    <h1>{{msg}}</h1>
    `,

    data() {
        return {
            msg: 'Hello World'
        }
    }
})

app.mount('#app')