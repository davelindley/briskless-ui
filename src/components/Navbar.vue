<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-side-icon
        class="hidden-sm-and-down"
        @click="drawer = !drawer"
      />
      <v-toolbar-title>Briskless</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down" />
    </v-toolbar>
    <v-navigation-drawer
      slot="activator"
      v-model="drawer"
      app
      temporary
      class="hidden-sm-and-down"
    >
      <v-layout
        column
        align-center
      >
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img
              src="/avatar-2.png"
              alt=""
            >
          </v-avatar>

          <p class="grey--text subheading mt-1 text-center">
            Username
          </p>
        </v-flex>
        <v-btn
          class="success"
          :to="'/live'"
        >
          Go to Live Cook
        </v-btn>
      </v-layout>


      <v-list>
        <v-list-group prepend-icon="whatshot">
          <v-list-tile slot="activator">
            <v-list-tile-title>
              Cook
            </v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            :to="'/live'"
            prepend-icon="archive"
          >
            <v-list-tile-title>
              Current Cook
            </v-list-tile-title>
          </v-list-tile>

          <v-list-tile :to="'/cook_settings'">
            <v-list-tile-title>
              Cook Settings
            </v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            prepend-icon="archive"
            :to="'/start'"
          >
            <v-list-tile-title>
              Start New Cook
            </v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            prepend-icon="archive"
            :to="'/archive'"
          >
            <v-list-tile-title>
              Archives
            </v-list-tile-title>
          </v-list-tile>
        </v-list-group>

        <v-list-group prepend-icon="settings">
          <v-list-tile slot="activator">
            <v-list-tile-title>
              Settings
            </v-list-tile-title>
          </v-list-tile>

          <v-list-tile :to="'/smoker_profiles'">
            <v-list-tile-title>
              Smoker Profiles
            </v-list-tile-title>
          </v-list-tile>

          <v-list-tile :to="'/preferences'">
            <v-list-tile-title>
              Preferences
            </v-list-tile-title>
          </v-list-tile>
        </v-list-group>


        <v-list-group prepend-icon="people">
          <v-list-tile slot="activator">
            <v-list-tile-title>
              Community
            </v-list-tile-title>
          </v-list-tile>

          <v-list-tile :to="'/send_receive_profiles'">
            <v-list-tile-title>
              Send/Receive Profiles
            </v-list-tile-title>
          </v-list-tile>

          <v-list-tile :to="'/social'">
            <v-list-tile-title>
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

          <v-list-tile :to="'/articles'">
            <v-list-tile-title>
              Briskless Articles
            </v-list-tile-title>
          </v-list-tile>

          <v-list-tile :to="'/notes'">
            <v-list-tile-title>
              Notes
            </v-list-tile-title>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
	export default {
		name: "NavBar",
		data() {
			return {
				drawer: false,

			}
		}
	}
</script>

<style scoped>

</style>