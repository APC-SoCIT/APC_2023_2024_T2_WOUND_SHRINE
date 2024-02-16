<template>
      <div class="col-3">
        <q-card class="q-mx-md" bordered>
          <div class="flex flex-center column">
            <q-circular-progress        
              font-size="12px"
              size="250px"
              :thickness="0.22"
              color="green-7"
              track-color="red-2"
              class="q-ma-md"
            >
            </q-circular-progress>
            <div>
              <q-badge color="green-2" rounded class="q-mr-sm" />Woman 40%
            </div>
            <div class="q-mb-xl">
              <q-badge color="green-7" rounded class="q-mr-sm" />Man 60%
            </div>
          </div>
        </q-card>
      </div>

      <div>
    <apexchart type="bar" :options="chartOptions" :series="chartSeries" />
  </div>

</template>

<script>

import VueApexCharts from 'vue3-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'bar-chart',
        },
        xaxis: {
          categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
        },
      },
      chartSeries: [
        {
          name: 'Series 1',
          data: [40, 55, 75, 90],
        },
      ],
    };
  },
};

</script>

<style>
</style>
<!--
<template>
  <div>
    <Home/>
  </div>
</template>
-->

<!--
<script>
import Home from "@/pages/home.vue";
export default {
  name: "home",
  components: {
    Home,
  },
};
</script>
-->
