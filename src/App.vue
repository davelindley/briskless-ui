<template>
  <v-app>
  <Navbar app/>
    <v-content>
      <v-container fluid px-0 ma-0>
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

<style>
  .container {
    padding: 10px 5px;
  }


</style>
