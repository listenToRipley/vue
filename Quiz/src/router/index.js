///Define our routing rules
import {createRouter, createWebHistory} from "vue-router";
import QuizzesViews from "../views/QuizzesViews.vue"
import Questions from "../components/Questions.vue";

const routes = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "quizzes",
            component: QuizzesViews
        },
        {
            path: "/:subject/:id",
            name: "questions",
            component: Questions
        }

    ]//array of objects
});

export default routes;