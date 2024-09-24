<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
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

ul {
  padding-left: 24px;
}

code {
    background-color: rgba(0,0,0,.05);
    color: var(--v-primary-code);

    background: rgb(var(--v-theme-code_bg));
}

</style>
