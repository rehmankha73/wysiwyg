<template>
  <div id="chart">
    <h2> This is chart page!</h2>
    <apexchart
        :options="chartOptions"
        :series="series"
        height="350"
        type="bar"
    ></apexchart>
     {{ years }} <br>
     {{ populations }}
  </div>
</template>

<script>
// import dayjs from 'dayjs'
import axios from 'axios';

export default {
  name: "LineChart",

  mounted() {
    axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        .then((response) => {
          this.api_data = response.data.data

          this.years = this.api_data.map(y => y['Year'])
          console.log(this.years)

          this.populations = this.api_data.map(y => y['Population'])
          console.log(this.populations)

          this.updateData();
        })
        .catch((error) => {
          console.log(error, 'error')
        })
  },
  data() {
    return {
      api_data: null,
      years: [],
      populations: [],
      series: [{
        name: 'Populations',
        data: [1,2,3,4,5,6,7],
        // data: this.populations ? this.populations : [],
      }],

      chartOptions: {
        xaxis: {
          categories: [1,2,3,4,5,6,7],
          position: 'top',
          axisBorder: {
            show: false
          },
          // categories: [2012,2013,2014,2015,2016,2017,2018],
          // categories: this.years ? this.years : [],
        },
        title: {
          text: 'Populations Data of US',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      },
    }
  },
  methods: {
    updateData() {
      // const max = 90;
      // const min = 20;
      // const newData = this.series[0].data.map(() => {
      //   return Math.floor(Math.random() * (max - min + 1)) + min
      // })

      // const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']

      // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
      // this.chartOptions = {
      //   colors: [colors[Math.floor(Math.random()*colors.length)]]
      // };
      // In the same way, update the series option
      this.series = [{
        data: this.populations
      }]

      this.chartOptions = {
        xaxis: {categories: this.years}
        };

      console.log(this.chartOptions)
    }
  }
}
</script>

<style scoped>

</style>