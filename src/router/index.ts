import Vue from 'vue';
import {createWebHistory, createRouter} from 'vue-router';
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import Notice from '../views/Notice.vue';
import EventF from '../views/EventF.vue';
import Event from '../views/Event.vue';
import Event2 from '../views/Event2.vue';
import Contact from '../views/Contact.vue'
import Contact2 from '../views/Contact2.vue'
import ContactF from '../views/ContactF.vue'


const routes = [{
        path: '/',
        name: 'Landing',
        component: Landing,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/notice',
        name: 'Notice',
        component: Notice,
    },
    {
        path: '/event',
        component: EventF,
        children: [
            {
                path: '',
                name: 'Event',
                component: Event
            },
            {
                path: 'detail',
                name: 'Event2',
                component: Event2
            }
        ]
    },
    {
        path: '/contact',
        component: ContactF,
        children: [
            {
                path: '',
                name: 'Contact',
                component: Contact
            },
            {
                path: 'submit',
                name: 'Contact2',
                component: Contact2
            }
        ]
    }]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "route-active",
    scrollBehavior(){
        return { top: 0 }
      },
})

export default router;