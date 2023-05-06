var script = document.createElement('script')
script.type = 'text/javascript'
script.src = 'https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js'
document.head.appendChild(script)
var isInit = false


function init() {
	if (isInit) {
		return
	}
	var doms = document.querySelectorAll('[data-label="test"]')
	console.log('check doms', doms)
	if (doms && doms.length > 0) {
		if (echarts) {
			isInit = true
			var dom = doms[0]
			var myChart = echarts.init(dom)

			var option = {
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: [
					{
						data: [150, 230, 224, 218, 135, 147, 260],
						type: 'line'
					}
				]
			}

			myChart.setOption(option, true)
		}

	}
}

script.onload = function () {
	console.log('check script onload')
	init();
}

setTimeout(() => {
	init();
}, 800)

