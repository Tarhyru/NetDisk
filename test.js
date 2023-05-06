var script = document.createElement('script')
script.type = 'text/javascript'
script.src = 'https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js'
document.head.appendChild(script)
script.onload = function () {
  var dom = $('[data-label=test]').get(0)
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
