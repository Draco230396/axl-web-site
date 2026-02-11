import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import Media from "../views/Media.vue";
import Careers from "../views/Careers.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects
    },
    {
        path: "/media",
        name: "Media",
        component: Media
    },
    {
       path: "/careers",
       name: "Careers",
       component: Careers
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})