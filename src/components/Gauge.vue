<template>
    <v-flex xs12 height="100px">
    <highcharts :options="chartOptions" :updateArgs="chartOptions.updateArgs"></highcharts>
        </v-flex>

</template>


<script>
	import {Chart} from 'highcharts-vue'
	import {db} from '../firebase.js'

	export default {
		name: "gauge",
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
				return  { chart: {
        type: 'gauge',
    },

    title: {
        text: 'Temp'
    },

    pane: {
        startAngle: -120,
        endAngle: 120,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },
    yAxis: {
        min: 60,
        max: 203,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Temp'
        },
        plotBands: [{
            from: 60,
            to: 150,
            color: '#55BF3B' // green
        }, {
            from: 150,
            to: 190,
            color: '#DDDF0D' // yellow
        }, {
            from: 190,
            to: 203,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Speed',
        data: [142],
        tooltip: {
            valueSuffix: ' Degrees'
        }
    }]

}}}}
</script>

<style scoped>


</style>

<!--.map(({x, y}) => ({x, y}))-->