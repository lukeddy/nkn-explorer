<template>
  <div ref="chartdiv"/>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from '@amcharts/amcharts4/maps'
import am4geodataWorldLow from '@amcharts/amcharts4-geodata/worldLow'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import { mapGetters } from 'vuex'

am4core.useTheme(am4themesAnimated)

export default {
  components: {},
  data: () => {
    return {}
  },
  computed: mapGetters({
    networkCities: 'network/getNetworkCities',
    networkCountries: 'network/getNetworkCountries',
    latestSigchain: 'latestSigchain/getLatestSigchain'
  }),
  destroyed() {
    clearInterval(this.intervalTx)
    clearInterval(this.intervaldrawLine)
  },
  mounted: function() {
    this.intervalTx = setInterval(this.getLatestTx, 60000)
    const chartData = []
    const countriesData = []
    let countries = this.networkCountries
    let cities = this.networkCities
    cities.forEach(city => {
      chartData.push({
        latitude: Number(city.latitude),
        longitude: Number(city.longitude),
        name: city.city,
        count: city.count
      })
    })
    countries.forEach(country => {
      countriesData.push({
        id: country.country_code,
        value: country.count
      })
    })
    var chart = am4core.create(this.$refs.chartdiv, am4maps.MapChart)
    // Set map definition
    chart.geodata = am4geodataWorldLow
    chart.zoomControl = new am4maps.ZoomControl()

    // Set projection
    chart.projection = new am4maps.projections.Miller()

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries())

    // Exclude Antartica
    polygonSeries.exclude = ['AQ']

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true
    polygonSeries.heatRules.push({
      property: 'fill',
      target: polygonSeries.mapPolygons.template,
      min: am4core.color('#e8f4fe'),
      max: am4core.color('#45a7f5')
    })
    polygonSeries.data = countriesData

    // Place series
    var placeSeries = chart.series.push(new am4maps.MapImageSeries())
    placeSeries.data = chartData
    placeSeries.tooltip.getFillFromObject = false
    placeSeries.tooltip.background.fill = am4core.color('#45a7f5')
    placeSeries.tooltip.label.fill = am4core.color('#fff')

    var place = placeSeries.mapImages.template
    place.tooltipText = '{name} {count}'
    place.nonScaling = true
    place.propertyFields.latitude = 'latitude'
    place.propertyFields.longitude = 'longitude'

    var marker = place.createChild(am4core.Circle)
    marker.radius = 4
    marker.hoverable = true
    marker.fill = am4core.color('#1791F2')
    marker.strokeWidth = 1
    marker.stroke = am4core.color('#fff')

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template
    polygonTemplate.tooltipText = '{name} {value}'
    polygonTemplate.fill = am4core.color('#e8f4fe')
    polygonSeries.tooltip.getFillFromObject = false
    polygonSeries.tooltip.background.fill = am4core.color('#1791F2')
    polygonSeries.tooltip.label.fill = am4core.color('#fff')

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create('hover')
    hs.properties.fill = am4core.color('#1791F2')

    // Add line series
    var lineSeries = chart.series.push(new am4maps.MapArcSeries())
    lineSeries.mapLines.template.strokeWidth = 4
    lineSeries.mapLines.controlPointDistance = 0.5
    lineSeries.mapLines.template.stroke = am4core.color('#2bd289')
    lineSeries.mapLines.template.nonScalingStroke = true

    var line = lineSeries.mapLines.create()

    var activeNodeSeries = chart.series.push(new am4maps.MapImageSeries())
    activeNodeSeries.tooltip.getFillFromObject = false
    activeNodeSeries.tooltip.background.fill = am4core.color('#1791F2')
    activeNodeSeries.tooltip.label.fill = am4core.color('#fff')

    var activeNode = activeNodeSeries.mapImages.template
    activeNode.tooltipText = '{name}'
    activeNode.nonScaling = true
    activeNode.propertyFields.latitude = 'latitude'
    activeNode.propertyFields.longitude = 'longitude'

    var activeNodeMarker = activeNode.createChild(am4core.Circle)
    activeNodeMarker.radius = 8
    activeNodeMarker.hoverable = true
    activeNodeMarker.fill = am4core.color('#2BD289')
    activeNodeMarker.strokeWidth = 1
    activeNodeMarker.stroke = am4core.color('#fff')

    const drawLine = () => {
      let latestTx = this.latestSigchain.sigchain_elems
      let txPath = []
      let activeNodesData = []
      latestTx.forEach(function(node) {
        if (node.latitude) {
          txPath.push({
            latitude: node.latitude,
            longitude: node.longitude
          })
          activeNodesData.push({
            latitude: Number(node.latitude),
            longitude: Number(node.longitude),
            name: node.city
          })
        }
      })
      if (txPath.length) {
        activeNodeSeries.data = []
        activeNodeSeries.data = activeNodesData
        line.multiGeoLine = [txPath]
      }
    }
    drawLine()
    this.intervaldrawLine = setInterval(drawLine, 65000)

    chart.homeZoomLevel = 1

    this.chart = chart
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
    }
  },
  methods: {
    getLatestTx() {
      this.$store.dispatch('latestSigchain/updateLatestSigchain')
    }
  }
}
</script>
