<template>
  <v-app>
    <Toolbar></Toolbar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Toolbar from './components/Toolbar.vue';

  //
</script>

<style>
@font-face {
  font-family: "library";
  src: url("./assets/fonts/Library 3 am.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "sawarabi";
  src: url("./assets/fonts/Farro-Regular.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: sawarabi, Arial, sans-serif;
}

.cinelog-item {
  background-color: #320b86;
}

html { overflow-y: auto }

</style>
