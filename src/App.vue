<template>
  <v-app>
  <Navbar app/>
    <v-content>
      <v-container fluid>
      <router-view></router-view>
        </v-container>
    </v-content>
  <bottom-nav fixed/>
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
