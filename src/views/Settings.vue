<template>
  <v-container>
    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex
        md3
        xs10
      >
        <v-slider
          v-model="goalTemp"
          :max="215"
          :min="140"
          prepend-icon="whatshot"
        />
      </v-flex>

      <v-flex
        md1
        xs2
      >
        <v-text-field
          v-model="goalTemp"
          class="mt-0"
          full-width
          label="Temp"
          left
          type="number"
        />
      </v-flex>


      <v-flex
        md3
        xs10
      >
        <v-slider
          v-model="time"
          :max="16"
          :min="1"
          prepend-icon="timer"
        />
      </v-flex>

      <v-flex
        md1
        xs2
      >
        <v-text-field
          v-model="time"
          class="mt-0 mx-2"
          full-width
          label="Hours"
          px-0
          right
          type="number"
        />
      </v-flex>

      <v-layout>
        <v-flex md>
          <v-slider
            :tick-labels="doneness"
            :tick-size="3"
            :value="2"
            max="3"
            min="0"
            thumb-label
            thumb-size="80"
          >
            <template
              slot="thumb-label"
              slot-scope="props"
            >
              <span>
                {{ getDoneness(props.value) }}
              </span>
            </template>
          </v-slider>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
	export default {
		name: "LocationSettings",
        data() {
			return {
				temp: 185,
				goalTemp: 203,
				goalVelocity: 5,
				time: 14,
				doneness: [
					'Firm',
					'Firmer',
					'Tender',
					'Tenderer'
				]
			}
		},
        methods: {
			getDoneness(val) {
				return this.doneness[val]
			},

		}
	}
</script>

<style scoped>

</style>