<template>

    <highcharts :options="chartOptions" :updateArgs="updateArgs"></highcharts>



</template>


<script>
    import {Chart} from 'highcharts-vue'
    import axios from 'axios'
    export default {
        name:"MainChart",
  data(){
      return{
        chartOptions: {
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
          data: '',
          color: '#6fcd98'
        }],
            yAxis:{
            visible:false,
            labels:{
                enabled:false,
                padding:'0px',
            }},
            xAxis:{
            type:'datetime'
            },
          updateArgs:[true, true, {duration: 1000}]

      }}},
    components:{
            highcharts:Chart
    },

        methods:{
            updateData(){
                axios
          .get('https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json')
          .then(response => (
            this.chartOptions.series[0].data = response.data))
                }
        },
        mounted(){
            this.updateData()
    },
    }
</script>

]



<style scoped>




</style>

