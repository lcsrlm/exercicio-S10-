import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home/Home.vue'
import About from '../views/About/About.vue'
import NewTalent from '../views/Talents/New/NewTalent.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/talent/new',
            name: 'NewTalent',
            component: NewTalent
        }
    ]
})

export default router