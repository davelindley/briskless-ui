<template>
<div>
    <highcharts :options="chartOptions" :updateArgs="chartOptions.updateArgs"></highcharts>

    <ul v-for="value in cook">
        <li>{{value.timestamp.seconds}} -- {{value.temp}}</li>
    </ul>

</div>

</template>


<script>
    import {Chart} from 'highcharts-vue'
    import axios from 'axios'
    import { db } from '../firebase.js'

    export default {
        name:"MainChart",
        firestore(){
        	return{

                cook: db.collection('GALLAGHER_NICK').doc('8JIknOsHxb6VFrmbxA89').collection('data').orderBy('x')
            }
		},
  data(){
      return{
      	holder:[],
        }},
    components:{
            highcharts:Chart
    },
        computed:{
            chartOptions(){ return {
        chart: {
          type: 'area',
            zoomType:'x'
        },
           subtitle: {
                text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
        title: {
          text: 'Live Cook'
        },
        series: [{
        	name: 'Live Cook Temp',
          //  removes all data from firebase response except x and y.
          data: this.cook.map(({x,y}) => ({x, y})),
          color: '#6fcd98'
        }],
            yAxis:{
            labels:{
                enabled:true,
                padding:'0px',
            }},
            xAxis:{
            type:'datetime'
            },
          updateArgs:[true, true, {duration: 500}]

      }}}
        // ,
        // mounted(){
        //     // this.updateData()
        //     this.snapshotToArray(this.cook)
        // }
        // computed:{
        // 	dataForChart(){
        // 		temp_array=[]
        // 		db.on('value', function(snap){
        //            snap.forEach(function(childNodes){
        //            	temp_array.push(childNodes.val().timestamp)
		// 		   })})
        // 		return temp_array
        //     }
    // }
        ,
        mounted()
             {
              this.chartOptions.series[0]['data'].setData(this.cook,true)
            },
        methods:{
        	redraw(){
        		this.chartOptions.series[0]['data'].setData(this.cook,true)
            }
        },
    }

</script>

]



<style scoped>




</style>

