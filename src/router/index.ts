import { createRouter, type RouterHistory, type RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Contact from "@/views/Contact.vue";
import Insights from "@/views/Insights.vue";
import Careers from "@/views/Careers.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import Terms from "@/views/Terms.vue";
import NotFound from "@/views/NotFound.vue";
import { hasProjects } from "@/data/projects";

// Las vistas se importan directamente (no lazy): el sitio es pequeño y así
// cada página prerenderizada trae su CSS desde el inicio, sin parpadeos.
const routes: RouteRecordRaw[] = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    {
        path: "/projects",
        name: "Projects",
        component: Projects,
        // Sin proyectos publicados, la página no se muestra
        beforeEnter: () => (hasProjects ? true : { path: "/", hash: "#como-trabajamos" })
    },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/insights", name: "Insights", component: Insights },
    { path: "/careers", name: "Careers", component: Careers },
    // La página de Medios aún no tiene contenido; se redirige mientras tanto.
    { path: "/media", redirect: "/insights" },
    { path: "/privacy", name: "Privacy", component: PrivacyPolicy },
    { path: "/terms", name: "Terms", component: Terms },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }
]

/** Páginas que se generan como HTML estático en el build (prerender) */
export const prerenderRoutes: { path: string; sitemap: boolean }[] = [
    { path: "/", sitemap: true },
    { path: "/about", sitemap: true },
    ...(hasProjects ? [{ path: "/projects", sitemap: true }] : []),
    { path: "/contact", sitemap: true },
    { path: "/insights", sitemap: true },
    { path: "/careers", sitemap: true },
    { path: "/privacy", sitemap: false },
    { path: "/terms", sitemap: false }
]

/** Crea el router; el historial cambia entre navegador (cliente) y memoria (prerender) */
export function createAppRouter(history: RouterHistory) {
    return createRouter({
        history,
        routes,
        scrollBehavior(to, _from, savedPosition) {
            if (savedPosition) return savedPosition
            if (to.hash) return { el: to.hash, top: 120, behavior: "smooth" }
            return { top: 0 }
        }
    })
}
