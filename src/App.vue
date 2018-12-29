<template>
  <v-app>
  <Navbar/>
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>

  <bottom-nav/>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import bottomNav from './components/bottomNav'
export default {
  name: 'App',
  components: {
    Navbar,
      bottomNav
  },
  data () {
    return {

    }
  }
}
</script>
