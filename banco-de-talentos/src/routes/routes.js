import {createRouter, createWebHistory} from 'vue-router'

import Home from '../components/Home/Home.vue'
import About from '../components/About/About.vue'
import NewTalent from '../components/Talents/New/NewTalent.vue'

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