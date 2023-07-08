<template>
  <q-layout>
    <q-page padding>
      <div class="flex container">
        <CardsComponent />
        <GraphicsComponent />
        <ImagesComponent/>
      </div>
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import CardsComponent from 'src/components/cards/CardsComponent.vue';
import GraphicsComponent from 'src/components/graphics/GraphicsComponent.vue';
import ImagesComponent from 'src/components/images/ImagesComponent.vue';
</script>

<style lang="scss">
.container{
  gap: 40px;
}
</style>
