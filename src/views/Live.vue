<template>
    <v-container fluid>
        <v-layout row>
            <v-flex xs12 md6 lg4>
                <main-chart class="mx-1" :cook_data="cook"></main-chart>
            </v-flex>
        </v-layout>

        <v-layout row wrap justify-center>
            <v-flex xs6 md3>

            <v-progress-circular
              :rotate="360"
              :size="150"
              :width="15"
              :value="temp/goalTemp*100"
              color="teal"
                >
                <div>
                    <p class="dial_title">Temp:</p>
                    <p class="dial_text">{{temp}}</p>
                </div>

    </v-progress-circular>
        </v-flex>
            <v-flex xs6 md3>

            <v-progress-circular
              :rotate="360"
              :size="150"
              :width="15"
              :value="velocity/goalVelocity * 100"
              color="teal"
                >
                <div>
                    <p class="dial_title">Velocity:</p>
                    <p class="dial_text">{{velocity}}</p>
                </div>


    </v-progress-circular>
</v-flex>



            <v-flex xs10 md3>

            <v-slider
              v-model=goalTemp
              :min="140"
              :max="215"
              prepend-icon="whatshot"
            ></v-slider>

          </v-flex>

          <v-flex xs2 md1>
            <v-text-field
              v-model=goalTemp
              label="Temp"
              class="mt-0"
              type="number"
              left
              full-width
            ></v-text-field>
          </v-flex>


            <v-flex xs10 md3>
            <v-slider
              v-model=time
              :min="1"
              :max="16"
              prepend-icon="timer"
            ></v-slider>
          </v-flex>

          <v-flex xs2 md1>
            <v-text-field
                    label="Hours"
              v-model=time
              class="mt-0 mx-2"
              type="number"
              full-width
              right
                    px-0
            ></v-text-field>
          </v-flex>

            <v-layout>
            <v-flex md>
              <v-slider
                :tick-labels="doneness"
                :tick-size="3"
                :value="2"
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
import {db} from '../firebase.js'
import MainChart from '../components/MainChart.vue'

    export default {
        name: "Live",

        firestore() {
			return {
                //collection and document id - these come from firebase.
                //This will need to be handled as variables (props) eventually.
				cook: db.collection('Dave - Ribs - 2.2.2019').doc('c0hyoskBaJKzX6wbamKz').collection('data').orderBy('x')
			}
		},

        components:{
            MainChart
        },
        data(){
            return{
            	temp:185,
                goalTemp:203,
                goalVelocity:5,
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
            },

        },
        computed:{
        	velocity(){
        		return Number(0.00000000000000007048*Math.pow(this.temp,7.29007299056)).toPrecision(4)
            },


        }
        }
</script>

<style scoped>
    p.dial_text{
        font-size: 38px;
        text-align: center;
    }

    p.dial_title{
        padding-top:20px;
        font-size:20px;
        text-align: center;
        margin-bottom: 0;
    }
</style>

