<template>

    <highcharts :options="chartOptions"></highcharts>



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
          type: 'spline'
        },
        title: {
          text: 'Sin chart'
        },
        series: [{
          data: [10, 0, 8, 2, 6, 4, 5, 5],
          color: '#6fcd98'
        }]
      },
          info:''

	  }},
    components:{
			highcharts:Chart
    },
    mounted() {
			axios
      .get('https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json')
      .then(response => (this.info = response))
	}
	}
</script>




<style scoped>

</style>

