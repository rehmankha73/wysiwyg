<template>
  <v-container id="chart">
    <span class="text-subtitle-1 mb-4">Implementation of Apex-chart in vue components</span>
    <v-card v-if="true" class="pa-4 my-10">
      <span class="text-h4"> Line Chart</span>
      <apexchart
          :options="line_chart.chartOptions"
          :series="line_chart.series"
          class="my-4"
          height="350"
          type="line"
      ></apexchart>
    </v-card>

    <v-card v-if="true" class="pa-4 my-10">
      <span class="text-h4"> Column/Bar Chart</span>
      <apexchart
          :options="line_chart.chartOptions"
          :series="line_chart.series"
          height="350"
          type="bar"
      ></apexchart>
    </v-card>

    <v-card v-if="true" class="pa-4 my-10">
      <span class="text-h4"> Area Chart</span>
      <apexchart
          :options="line_chart.chartOptions"
          :series="line_chart.series"
          height="350"
          type="area"></apexchart>
    </v-card>

    <v-card v-if="true" class="pa-4 my-10">
      <span class="text-h4"> Column Chart</span>
      <apexchart :options="column_chart.chartOptions" :series="column_chart.series" height="350" type="bar"></apexchart>
    </v-card>

    <v-card v-if="true" class="pa-4 my-10">
      <span class="text-h4"> Bar Chart</span>
      <apexchart :options="line_chart.chartOptions" :series="line_chart.series" height="430" type="bar"></apexchart>
    </v-card>

    <v-card v-if="true" class="pa-4 my -10">
      <span class="text-h4">Mixed Type Chart</span>
      <apexchart :options="mixed.chartOptions" :series="mixed.series" height="350" type="line"></apexchart>
    </v-card>

    <v-card v-if="true" class="pa-4 my-10">
      <span class="text-h4">Pie Type Chart</span>
      <apexchart type="pie" width="380" :options="pie.chartOptions" :series="pie.series"></apexchart>
    </v-card>

    <v-card v-if="true" class="pa-4 my-10">
      <span class="text-h4">Donut Type Chart</span>
      <apexchart type="donut" width="380" :options="donut.chartOptions" :series="donut.series"></apexchart>
    </v-card>

  </v-container>
</template>

<script>
// import axios from 'axios';
import {api_data} from "@/api/data";

export default {
  name: "LineChart",
  data() {
    return {
      line_chart: {
        series: [
          {
            name: "Mangoes %",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 57, 12],
          },
          {
            name: "Bananas %",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 57, 12]
          },
          {
            name: "Oranges %",
            data: [23, 67, 23, 12, 65, 76, 89, 70, 54, 34, 29]
          }
        ],
        chartOptions: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true
            },
            toolbar: {
              autoSelected: 'zoom'
            }
          },
          dataLabels: {
            enabled: true
          },
          stroke: {
            curve: 'smooth',
          },
          title: {
            text: 'Productivity in % of Mangoes in Multan',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
          },
          yaxis: {
            title: {
              text: 'Per year Productions of Mangoes in % '
            },
            min: 0,
            max: 100,
            // min: Math.min(...api_data.map(d => d.production)),
            // max: Math.max(...api_data.map(d => d.production))
          },
        },
      },

      column_chart: {
        series: [{
          name: 'Servings',
          data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
        }],
        chartOptions: {
          annotations: {
            points: [{
              x: 'Bananas',
              seriesIndex: 0,
              label: {
                borderColor: '#775DD0',
                offsetY: 0,
                style: {
                  color: '#fff',
                  background: '#775DD0',
                },
                text: 'Bananas are good',
              }
            }]
          },
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '50%',
            }
          },
          dataLabels: {
            enabled: true
          },
          stroke: {
            width: 1,
            dashArray: 5
          },

          grid: {
            row: {
              colors: ['#fff', '#f2f2f2']
            }
          },
          xaxis: {
            labels: {
              rotate: -45
            },
            categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
              'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
            ],
            tickPlacement: 'on'
          },
          yaxis: {
            title: {
              text: 'Servings',
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              type: "horizontal",
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 0.85,
              opacityTo: 0.85,
              stops: [50, 0, 100]
            },
          }
        },
      },

      mixed: {
        series: [{
          name: 'TEAM A',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        }, {
          name: 'TEAM B',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
          name: 'TEAM C',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        },
          {
            name: 'TEAM D',
            type: 'line',
            data: [35, 28, 30, 20, 50, 65, 74, 42, 39, 26, 39]
          }
        ],
        chartOptions: {
          chart: {
            height: 350,
            type: 'line',
            stacked: false,
          },
          stroke: {
            width: [0, 2, 5],
            curve: 'smooth'
          },
          plotOptions: {
            bar: {
              columnWidth: '50%'
            }
          },

          fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
              inverseColors: false,
              shade: 'light',
              type: "vertical",
              opacityFrom: 0.85,
              opacityTo: 0.55,
              stops: [0, 100, 100, 100]
            }
          },
          labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
            '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
          ],
          dataLabels: {
            enabled: true
          },
          markers: {
            size: 0
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            title: {
              text: 'Points',
            },
            min: 0
          },
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function (y) {
                if (typeof y !== "undefined") {
                  return y.toFixed(0) + " points";
                }
                return y;

              }
            }
          }
        },
      },

      pie: {
        series: [44, 55, 13, 43, 22],
        chartOptions: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },

      },

      donut: {
        series: [44, 55, 41, 17, 15],
        chartOptions: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      },

      // just in case of external apis.
      years: [],
      production: [],
      series: [{
        name: 'production',
        data: [1, 2, 3, 4, 5, 6, 7],
        // data: this.production ? this.production : [],
      }],
      chartOptions: {
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7],
          position: 'top',
          axisBorder: {
            show: false
          },
          // categories: [2012,2013,2014,2015,2016,2017,2018],
          // categories: this.years ? this.years : [],
        },
        title: {
          text: 'production Data of US',
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
  mounted() {
    console.log(api_data, 'from internal apis')
    this.updateLineChartData();

    // for setting data from external apis
    // axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    //     .then((response) => {
    //       this.years = response.data.data.map(y => y['Year'])
    //       this.production = response.data.data.map(y => y['Population'])
    //       this.updateData();
    //     })
    //     .catch((error) => {
    //       console.log(error, 'error')
    //     })
  },
  methods: {
    updateLineChartData() {
      this.line_chart.series[0].data = api_data.map(d => d.production)
      this.line_chart.chartOptions = {
        xaxis: {categories: api_data.map(d => d.year)}
      }
    },
    updateData() {
      this.series = [{
        data: this.production
      }]

      this.chartOptions = {
        xaxis: {categories: this.years}
      };
    }
  }
}
</script>

<style scoped>

</style>