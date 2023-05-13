import { createWebHistory, createRouter } from "vue-router";

const components = [
    { path: "/", name: "dashboard" },
    { path: "/pizza-topping", name: "pizza-topping" }
]
const routes = components.map(routes => {
    return {
        ...routes,
        component: () => import(`../views/${routes.name}.vue`)
    }
}); 


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

