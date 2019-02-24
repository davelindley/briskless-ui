import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Live from './views/Live'
import Start from './views/Start'
import Archive from './views/Archive'
import SmokerProfiles from './views/SmokerProfiles'
import Preferences from './views/Preferences'
import CookSettings from './views/Settings'
import SendReceiveProfiles from "./views/SendRecieveProfiles"
import SocialMedia from './views/SocialMedia'
import Articles from './views/Articles'
import Notes from './views/Notes'
import Favorites from "./views/Favorites";
import Login from "./views/Login"
import SignUp from "./views/SignUp"

Vue.use(Router);

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
        path: '/cook_settings',
        name: 'cook_settings',
        component: CookSettings
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
	  {
		  path: '/login',
		  name: 'login',
		  component: Login
	  },
	  {
		  path: '/signup',
		  name: 'signup',
		  component: SignUp
	  }

  ]
})
