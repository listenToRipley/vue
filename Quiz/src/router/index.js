///Define our routing rules
import {createRouter, createWebHistory} from "vue-router";

import Questions from "../components/Questions.vue";

const routes = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/:subject/:id",
            name: "questions",
            component: Questions
        }

    ]//array of objects
});

export default routes;