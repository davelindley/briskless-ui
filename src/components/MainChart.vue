<template>
    <div>
        <highcharts :options="chartOptions" :updateArgs="chartOptions.updateArgs"></highcharts>

    </div>

</template>


<script>
	import {Chart} from 'highcharts-vue'
	import axios from 'axios'
	import {db} from '../firebase.js'

	export default {
		name: "MainChart",
		firestore() {
			return {
                //cXUJN8rX85tUerPlw0Go
				cook: db.collection('Dave Friday Test').doc('cXUJN8rX85tUerPlw0Go').collection('data').orderBy('x')
			}
		},
		components: {
			highcharts: Chart
		},
		computed: {

			chartOptions() {
				return {
					chart: {
						type: 'area',
						zoomType: 'x'
					},
					events: {
						load: this.updateData
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
						data: this.cook.map(({x, y}) => ({x, y})),
						color: '#6fcd98',
						turboThreshold: 10000,
					}],
					yAxis: {
						labels: {
							enabled: true,
							padding: '0px',
						}
					},
					xAxis: {
						type: 'datetime'
					},
					updateArgs: [true, true, {duration: 500}]

				}
			}},
		methods: {
			updateData: function () {
				this.chart.series[0].setData(this.cook, true);
			}
		},
		watch: {
			chartOptions() {
				console.log('data updated')
				this.updateData()
			}
		}
	}

</script>




<style scoped>


</style>

