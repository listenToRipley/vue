///Define our routing rules
import {createRouter, createWebHistory} from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const routes = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/about",//url path
            name: "about",
            component: AboutView
        }

    ]//array of objects
});

export default routes;