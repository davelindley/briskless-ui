import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Live from './views/Live'
import Start from './views/Start'
import Archive from './views/Archive'
import SmokerProfiles from './views/SmokerProfiles'
import Preferences from './views/Preferences'
import LocationSettings from './views/LocationSettings'
import SendReceiveProfiles from "./views/SendRecieveProfiles"
import SocialMedia from './views/SocialMedia'
import Articles from './views/Articles'
import Notes from './views/Notes'
import Favorites from "./views/Favorites";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/live',
        name: 'live',
        component: Live
    },
    {
        path: '/start',
        name: 'start',
        component: Start
    },
    {
        path: '/archive',
        name: 'archive',
        component: Archive
    },
      {
        path: '/smoker_profiles',
        name: 'smoker_profiles',
        component: SmokerProfiles
    },
      {
        path: '/preferences',
        name: 'preferences',
        component: Preferences
    },
      {
        path: '/location_settings',
        name: 'location_settings',
        component: LocationSettings
    },
      {
        path: '/send_receive_profiles',
        name: 'send_receive_profiles',
        component: SendReceiveProfiles
    },
      {
        path: '/social',
        name: 'social',
        component: SocialMedia
    },
      {
        path: '/articles',
        name: 'articles',
        component: Articles
    },
      {
        path: '/notes',
        name: 'notes',
        component: Notes
    },
      {
        path: '/favorites',
        name: 'favorites',
        component: Favorites
    },



  ]
})
