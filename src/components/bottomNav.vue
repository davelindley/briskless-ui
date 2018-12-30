<template>
    <nav>
        <v-container>
    <v-card
    class="hide-overflow hidden-md-and-up"
    absolute
        >

    <v-bottom-nav
      :active.sync="activeBtn"
      :value="showNav"
      fixed
      color="transparent"
    >
      <v-btn flat color="teal" to="/favorites">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

        <v-btn flat color="teal" to="/live">
        <span>Cook</span>
        <v-icon>whatshot</v-icon>
      </v-btn>

        <v-bottom-sheet v-model="sheet">
      <v-btn flat color="teal" slot="activator">
        <span>More</span>
        <v-icon>unfold_more</v-icon>
      </v-btn>



      <v-list temporary>

                <v-list-group prepend-icon="whatshot">

                    <v-list-tile slot="activator">
                        <v-list-tile-title>
                            Cook
                        </v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile :to="'/live'" @click="sheet = false">
                        <v-list-tile-title>
                            Current Cook
                        </v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile :to="'/start'" @click="sheet = false">
                        <v-list-tile-title >
                            Start New Cook
                        </v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile  :to="'/archive'" @click="sheet = false">
                        <v-list-tile-title >
                            Archives
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list-group>

                <v-list-group prepend-icon="settings" >

                    <v-list-tile slot="activator">
                        <v-list-tile-title>
                            Settings
                        </v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile :to="'/smoker_profiles'" @click="sheet = false">
                        <v-list-tile-title>
                            Smoker Profiles
                        </v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile :to="'/preferences'" @click="sheet = false">
                        <v-list-tile-title >
                            Preferences
                        </v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile :to="'/location_settings'" @click="sheet = false">
                        <v-list-tile-title >
                            Location Settings
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list-group>


                <v-list-group prepend-icon="people" >

                    <v-list-tile slot="activator">
                        <v-list-tile-title>
                            Community
                        </v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile :to="'/send_receive_profiles'" @click="sheet = false">
                        <v-list-tile-title>
                            Send/Receive Profiles
                        </v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile :to="'/social'" @click="sheet = false">
                        <v-list-tile-title >
                            Social Media
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list-group>

                <v-list-group prepend-icon="info">

                    <v-list-tile slot="activator">
                        <v-list-tile-title>
                            BBQ Info
                        </v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile :to="'/articles'" @click="sheet = false">
                        <v-list-tile-title>
                            Briskless Articles
                        </v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile :to="'/notes'" @click="sheet = false">
                        <v-list-tile-title >
                            Notes
                        </v-list-tile-title>
                    </v-list-tile>


                </v-list-group>

            </v-list>
    </v-bottom-sheet>

        </v-bottom-nav>


  </v-card>
            </v-container>
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
            }
        },
        methods:{

        }
	}
</script>

<style scoped>

</style>