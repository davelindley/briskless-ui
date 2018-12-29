<template>
    <nav>
    <v-card
    class="hide-overflow hidden-md-and-up"
    height="200px"
    absolute
    full-width
        >


    <v-bottom-nav
      :active.sync="activeBtn"
      :value="showNav"
      fixed
      color="transparent"
    >
      <v-btn flat color="teal" >
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>
        <v-btn flat color="teal" >
        <span>Cook</span>
        <v-icon>whatshot</v-icon>
      </v-btn>
        <v-bottom-sheet v-model="sheet">
      <v-btn flat color="teal" slot="activator">
        <span>More</span>
        <v-icon>unfold_more</v-icon>
      </v-btn>



      <v-list>
        <v-list-tile
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
        >
          <v-list-tile-avatar>
            <v-avatar size="32px" tile>
              <v-icon>
                  {{tile.icon}}
              </v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>

        </v-bottom-nav>


  </v-card>
        </nav>
</template>

<script>
	export default {
		name: "bottomNav",
        data(){
			return{
				activeBtn: 1,
                showNav: true,
                sheet: false,
                tiles: [
                	{ icon: 'whatshot', title: 'Cook' },
                { icon: 'settings', title: 'Settings' },
                { icon: 'people', title: 'Community' },
                { icon: 'info', title: 'BBQ Info' },
                ]
            }
        }
	}
</script>

<style scoped>

</style>