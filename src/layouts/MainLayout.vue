<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Dashboard </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <div>
          <q-btn flat icon="notifications"> </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          <q-icon name="dashboard" size="20px"/>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const essentialLinks = [
  {
    title: 'Github',
    caption: 'github.com/gil-gomes',
    icon: 'code',
    link: 'https://github.com/gil-gomes',
  },
  {
  title: 'Linkedin',
    caption: 'linkedin.com/in/gil-anderson-gomes',
    icon: 'group',
    link: 'https://www.linkedin.com/in/gil-anderson-gomes-67696a125/',
  },
  {
  title: 'Instagram',
    caption: 'gil__anderrson',
    icon: 'public',
    link: 'https://www.instagram.com/gil__anderrson/',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style lang="scss">
.q-layout__section--marginal{
  background-color: #363636;
}
</style>
