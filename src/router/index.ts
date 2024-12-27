import { createRouter, createWebHistory, type Router } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import EventView from '@/views/EventView.vue';

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/event',
      name: 'Event',
      component: EventView,
    },
    {
      path: '/:pathMatch(.*)',
      name: 'Page Not Found',
      component: NotFoundView,
    },
  ],
});

const DEFAULT_TITLE = 'Brackets';
router.afterEach(to => {
  document.title = to.name?.toString() || DEFAULT_TITLE;
});

export default router;
