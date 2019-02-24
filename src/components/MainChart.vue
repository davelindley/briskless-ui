<template>
    <highcharts
            :options="chartOptions"
            :update-args="chartOptions.updateArgs"
    />
</template>


<script>
	import {Chart} from 'highcharts-vue'

	export default {
		name: "MainChart",
		components: {
			highcharts: Chart
		},
		props: [
			'cookData'
		],
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

	}
</script>

<style scoped>
    .highcharts-root {
        height: 40px;
    }

</style>

<!--.map(({x, y}) => ({x, y}))-->