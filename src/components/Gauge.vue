<template>
  <v-flex
    xs12
    height="100px"
  >
    <highcharts
      :options="chartOptions"
      :update-args="chartOptions.updateArgs"
    />
  </v-flex>
</template>


<script>
	import {Chart} from 'highcharts-vue'
	import {db} from '../firebase.js'

	export default {
		components: {
			highcharts: Chart
		},
		props:
			[
				'title',
                'value',
                'max',
                'min',
                'subtitle'
                ]
        ,
		computed: {

			chartOptions() {
				//configuration options available at https://api.highcharts.com/highcharts/
				return  { chart: {
        type: 'solidgauge',
         height:150,
    },

    title: null,

    pane: {
        center: ['50%', '90%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor: '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    tooltip: {
        enabled: false
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 3,
                borderWidth: 0,
                useHTML: true
            }
        }
    },

    yAxis: {
        min: this.min,
        max: this.max,
        title: {
            text: this.title,
            align:'high',
            textAlign:'center',
            style:{
            	"font-size":"18px"
            },
            y:-10

        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Temp',
        data: [this.value],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ('black') + '">{y}</span><br/>' +
                   '<span style="font-size:12px;color:silver">'+(this.subtitle)+'</span></div>'
        },
        tooltip: {
            valueSuffix: '<h1>Deg<h1>'
        }
    }]


}}}}
</script>

<style scoped>


</style>

<!--.map(({x, y}) => ({x, y}))-->