
<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {

	extends: Line,

	mounted() {
		this.renderChart(this.chartData, this.chartOptions)
	},
    mixins:[
    	reactiveProp
    ],
	data() {
		return {
			chartData: {
				labels: ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
				datasets: [{
					label: 'PittMaster Curve',
					data: this.chartData,

					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						// 'rgba(54, 162, 235, 0.2)',
						// 'rgba(255, 206, 86, 0.2)',
						// 'rgba(75, 192, 192, 0.2)',
						// 'rgba(153, 102, 255, 0.2)',
						// 'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						// 'rgba(54, 162, 235, 1)',
						// 'rgba(255, 206, 86, 1)',
						// 'rgba(75, 192, 192, 1)',
						// 'rgba(153, 102, 255, 1)',
						// 'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				},
					{
						label: 'Your Cook Today',
						data: [75, 80, 90, 100, 110, 156, 165, 190, 200, 203],

						backgroundColor: [
							'rgba(71, 36, 214, 0.2)',
						],
						borderColor: [
							'rgba(71, 36, 214,1)',
						],
						borderWidth: 1
					}


				]
			},
			chartOptions: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: false
						}
					}]
				},
                responsive:true
			}
		}
	},
	props: [
		'curve-data'
	],
    computed:{
		curveDataGet(){
			return this.curveData
        }
    },
    methods:{
		renderLineChart(){
			this.renderChart(this.curveDataGet, this.chartOptions)
        }
    },
    watch:{
		data:function(){
			this._chart.destroy();
			this.renderLineChart();

        }
    }
 }

</script>

<style>
</style>