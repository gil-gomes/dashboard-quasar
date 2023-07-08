<template>
  <div class="graphics-container flex">
    <div class="graphic">
      <apexchart
        width="500"
        type="bar"
        :options="options"
        :series="series"
      ></apexchart>
    </div>

    <div class="graphic">
      <apexchart
        width="500"
        type="pie"
        :options="chartPieOptions"
        :series="chartPieSeries"
      ></apexchart>
    </div>

    <div class="graphic">
      <apexchart
        width="500"
        type="bar"
        :options="chartColumnOptions"
        :series="chartColumnSeries"
      ></apexchart>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommentsStore } from 'src/stores/comments-store';
import { usePotsStore } from 'src/stores/posts-store';
import { useProductsStore } from 'src/stores/products-store';
import { useUsersStore } from 'src/stores/users-store';
import { ref, watchEffect } from 'vue';

// Store
const commentsStore = useCommentsStore();
const postsStore = usePotsStore();
const productsStore = useProductsStore();
const usersStore = useUsersStore();

// Bar Chart
const options = ref({
  chart: {
    id: 'vuechart-Bar',
  },
  xaxis: {
    categories: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
  },
  title: {
    text: 'Gráfico de Comentários',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      fontFamily: undefined,
      color: '#263238',
    },
  },
});

const series = ref([
  {
    name: 'Comments',
    data: [10, 15, 40, 45, 50, 49, 60, 70, 75, 80, 91, 81],
  },
]);

// Pie Chant
const chartPieSeries = ref();
const chartPieOptions = {
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Comentários', 'Usuários', 'Posts', 'Produtos'],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
  title: {
    text: 'Gráfico Pizza',
    floating: true,
    offsetY: -6,
    // offsetX: -50,
    align: 'center',
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      fontFamily: undefined,
      color: '#000',
    },
  },
  colors: ['#AB47BC', '#26A69A', '#1976D2', '#F2C037'],
};

const createChartPie = () => {
  chartPieSeries.value = [
    commentsStore.getData.total,
    postsStore.getData.total,
    productsStore.getData.total,
    usersStore.getData.total,
  ];
};

// Column Chart
const chartColumnSeries = ref([
  {
    name: 'Comentários',
    data: [44, 55, 57, 56, 61, 58, 63, 60],
  },
  {
    name: 'Usuários',
    data: [76, 85, 101, 98, 87, 105, 91, 114],
  },
  {
    name: 'Posts',
    data: [35, 41, 36, 26, 45, 48, 52, 53],
  },
  {
    name: 'Produtos',
    data: [35, 41, 36, 26, 45, 48, 52, 53],
  },
]);

const chartColumnOptions = ref({
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val: string) {
        return 'R$ ' + val;
      },
    },
  },
  title: {
    text: 'Gráfico Colunas',
    floating: true,
    offsetY: -6,
    offsetX: 0,
    align: 'center',
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      fontFamily: undefined,
      color: '#000',
    },
  },
  colors: ['#AB47BC', '#26A69A', '#1976D2', '#F2C037'],
});

watchEffect(() => {
  createChartPie();
});
</script>

<style lang="scss">
.graphics-container {
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.graphic {
  display: flex;
  gap: 10px;
}
</style>
