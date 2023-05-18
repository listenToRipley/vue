import * as Vue from "vue/dist/vue.esm-bundler.js";

const Hello = {
    props: ['greeting'],
    template: `
    <p>{{greeting}}</p>
    `
}

const app = Vue.createApp({

    components: {
        Hello
    },

    template: `

    <hello  greeting="Hello"/>
    <h1>{{count}}</h1>
    <button v-on:click="increment">Increment</button>

    <input 
        type="text"
        v-model="value"
        v-on:input="input"
    />
    <div class='red'>
        {{error}}
    </div>

    <div class="radio-btn">
        <input
            type="radio"
            v-model="value"
            value="a"
        />

        <input
        type="radio"
        v-model="value"
        value="b"
    />
    </div>

    <div class="checkbox">
        <input
            type="checkbox"
            v-model="check"
            value="a"
        />

        <input
        type="checkbox"
        v-model="check"
        value="b"
        />
    </div>

    {{value}}
    <br>

    {{check}}

    <div 
        v-for="number in numbers"
        v-bind:class="getClass(number)">
        <div>
            {{number}}
        </div> 
    </div>

    `,

    data() {
        return {
            count: 0,
            numbers: [1,2,3,4,5,6,7,8,9,10],
            value:"a",
            check:[]
        }
    },

    methods: {
        increment() {
            this.count += 1;
        },

        isEven(number) {
            return number % 2 === 0;
        },

        getClass(number) {
            return this.isEven(number) ? 'blue':'red';
        },

        input($event) {
            this.value = $event.target.value;        
        }

    },

    computed: {
        evenList() {
            return this.numbers.filter(num => this.isEven(num))
        },

        error() {
            if(this.value.length < 5) {
                return 'Must be greater than 5 characters.'
            }
        }
    }
})

app.mount('#app')