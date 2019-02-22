<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        lg4
        md6
        xs12
      >
        <main-chart
          :cook_data="cook"
          class="mx-1"
        />
      </v-flex>

      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          md6
        >
          <h1>TIME REMAINING: {{ this.timeRemaining }}</h1>

          <v-layout
            row
            wrap
          >
            <v-flex
              xs6
            >
              <gauge
                title="Internal Temp"
                :value="180"
                :min="0"
                :max="220"
                subtitle="Deg F"
              />
            </v-flex>
            <v-flex xs6>
              <gauge
                title="Velocity"
                :value="2.3"
                :min="0"
                :max="5"
                subtitle="Chews"
              />
            </v-flex>
            <v-layout />
          </v-layout>
        </v-flex>
        </v-flex>
      </v-layout>


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
    </v-layout>
  </v-container>
</template>

<script>
	import {db} from '../firebase.js'
	import MainChart from '../components/MainChart.vue'
    import Gauge from '../components/Gauge.vue'
	export default {
		name: "Live",

		firestore() {
			return {
				//collection and document id - these come from firebase.
				//This will need to be handled as variables (props) eventually.
				cook: db.collection('Dave - 2.17.2019 - Pork Butt').doc('jxsRAobevpxe4dIV8KlE').collection('data').orderBy('x')
			}
		},

		components: {
			MainChart,
            Gauge
		},
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
		computed: {
			velocity() {
				return Number(0.00000000000000007048 * Math.pow(this.temp, 7.29007299056)).toPrecision(4)
			},
            timeRemaining(){
			  return "1:40M"
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

