<template>
    <highcharts :options="chartOptions" :updateArgs="chartOptions.updateArgs"></highcharts>
</template>


<script>
	import {Chart} from 'highcharts-vue'
	import {db} from '../firebase.js'

	export default {
		name: "MainChart",
		firestore() {
			return {
				//collection and document id - these come from firebase.
				//This will need to be handled as variables (props) eventually.
				cook: db.collection('Dave - Ribs - 2.2.2019').doc('c0hyoskBaJKzX6wbamKz').collection('data').orderBy('x')
			}
		},
		components: {
			highcharts: Chart
		},
		computed: {

			chartOptions() {
				//configuration options available at https://api.highcharts.com/highcharts/
				return {
					chart: {
						type: 'area',
						zoomType: 'x'
					},
					subtitle: {
						//check if the screen will take touch input.
						text: document.ontouchstart === undefined ?
							'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
					},
					title: {
						text: 'Monitor Cook'
					},
					series: [{
						name: 'Live Cook Temp',
						//  removes all data from firebase response except x and y.
						data: this.cook_data,
						color: '#6fcd98',
						//this configures the maximum amount of points on the chart
						turboThreshold: 0,
					}],
					yAxis: {
						labels: {
							enabled: false,
							padding: '0px',
						},
						visible: false
					},
					xAxis: {
						type: 'datetime'
					},
					//https://api.highcharts.com/class-reference/Highcharts.Chart#update
					updateArgs: [true, true, {duration: 500}]

				}
			}
		}
		,
		props: [
			'cook_data'
		]
	}
</script>

<style scoped>


</style>

<!--.map(({x, y}) => ({x, y}))-->