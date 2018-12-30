<template>
    <v-container fluid>
        <h1 >Monitor Your Cook Here</h1>
                <chart-temp></chart-temp>
        <v-layout row wrap>
            <v-flex xs9>
            <v-slider
              v-model=goalTemp
              :min="140"
              :max="215"
              prepend-icon="whatshot"
            ></v-slider>
          </v-flex>

          <v-flex xs3>
            <v-text-field
              v-model=goalTemp
              class="mt-0"
              type="number"
              left
              full-width
            ></v-text-field>
          </v-flex>


            <v-flex xs9>
            <v-slider
              v-model=time
              :min="1"
              :max="14"
              prepend-icon="timer"
            ></v-slider>
          </v-flex>

          <v-flex xs3>
            <v-text-field
              v-model=time
              class="mt-0 mx-2"
              type="number"
              left
              full-width
            ></v-text-field>
          </v-flex>

            <v-layout>
            <v-flex>
              <v-slider
                :tick-labels="doneness"
                :tick-size="3"
                :value="[0, 1]"
                min="0"
                max="3"
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
import ChartTemp from './ChartTemp'

	export default {
		name: "Live",
        components:{
			ChartTemp
        },
		data(){
			return{
                goalTemp:203,
                time:14,
                doneness:[
                	'Firm',
                    'Firmer',
                    'Tenderer',
                    'Tender'
                ]

			}
		},
        methods:{
			getDoneness(val){
				return this.doneness[val]
            }
        }
	}
</script>

<style scoped>

</style>