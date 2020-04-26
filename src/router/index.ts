import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import MapView from '@/views/MapView.vue';
import MapViewStrategic from '@/views/MapViewStrategic.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/map/:mapId',
    component: MapView,
    props: (route: any) => ({ mapId: route.params.mapId, query: route.query }),
    children: [
      {
        path: 'strategic',
        name: 'strategic',
        component: MapViewStrategic,
        props: (route: any) => ({ mapId: route.params.mapId, query: route.query })
      }
    ]
  }
];

const router = new VueRouter({ routes });

export default router;
