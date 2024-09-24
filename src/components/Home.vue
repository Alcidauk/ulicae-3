<template>
  <div class="d-flex flex-column fill-height flex-1-0">
    <v-row class="justify-center align-center bg-primary-lighten-1 pt-3">
      <v-container text-center>
        <div class="toolbar-title bg-3 pb-3" align="center" justify="center">
          <div>
            <span class="text-h3 text-md-h1 title-font text-secondary"
            >Ulicae</span>
            <span class="text-h5 text-md-h3 extension-font text-secondary text-secondary">
              .com
            </span>
          </div>
          <span
          class="text-h5 text-md-h3 subtitle-font text-primary-lighten-3 text-lg-right">
          Pierre Rognon
        </span>
      </div>
      <div
      class="mt-1 mb-5 text-secondary text-subtitle-1 text-md-h6"
      align="center">
      Bienvenue sur mon site. Développeur depuis plusieurs années, vous
      pourrez trouver quelques ressources personnelles et professionnelles.
    </div>
    
    <v-row class="flex-1-1">
      <v-col
      class="link-buttons"
      v-bind:class="{ 'small-link-buttons': $vuetify.display.smAndDown }"
      v-for="n in 3"
      :key="n"
      align="center">
      <v-btn 
      :to="{ path: tabs[n - 1].path }" 
      :x-large="!$vuetify.display.mobile" 
      :large="$vuetify.display.smAndUp" 
      color="primary">
      <v-icon 
      :icon="'fas ' + tabs[n - 1].icon" 
      color="secondary"
      :size="!$vuetify.display.mobile ? 30 : $vuetify.display.smAndUp ? 25 : 20">
    </v-icon>
  </v-btn>
</v-col>
</v-row>
<v-row>
  <v-col
  class="link-buttons"
  align="center"
  v-for="n in 3"
  :key="n">
  <v-flex class="mt-2 label-text text-secondary text-h6">{{ tabs[n - 1].name }}</v-flex>
</v-col>
</v-row>
</v-container>
</v-row>

<v-row class="justify-center align-center bg-cinelog_secondary text-cinelog_primary-lighten-2 pt-3">
  <v-container text-center>
    <div class="toolbar-title pb-3" align="center">
      <div>
        <span
        class="text-h3 text-md-h1 title-font">
        Cinelog
      </span>
    </div>
  </div>
  <div align="center"
  class="mb-5 cinelog_primary text--lighten-3 text-subtitle-1 text-md-h6"
  >
  CineLog est une application mobile permettant de sauvegarder et de
  noter les films et séries que vous regardez.
</div>

<v-row>
  <v-col
  class="link-buttons"
  v-bind:class="{ 'small-link-buttons': $vuetify.display.smAndDown }"
  align="center">
  <v-btn :to="{ path: '/cinelog/home' }">
    <v-img
    :width="$vuetify.display.smAndDown ? 78 : 128"
    :height="$vuetify.display.smAndDown ? 78 : 128"
    :src="cinelogImg"
    />
  </v-btn>
</v-col>
</v-row>
</v-container>
</v-row>
</div>
</template>

<script setup lang="ts">
import cinelogImg from '../assets/cinelog_big.png'

const tabs = [
  {
    path: "/cv",
    icon: "fa-address-card",
    name: "CV",
  },
  {
    path: "/notes",
    icon: "fa-clipboard",
    name: "Notes",
  },        
  {
    path: "/portfolio",
    icon: "fa-images",
    name: "Portfolio",
  },
]
</script>

<style scoped>
.fill-height {
  height: 100%;
}

a {
  text-decoration: none;
}

.container-fill {
  padding: 0px;
  height: 100%;
  width: 100%;
}
.toolbar-title {
  margin-right: 25px;
  line-height: 0.9;
}

.title-font {
  font-family: "library" !important;
  font-weight: 600;
}

.extension-font {
  font-family: "library" !important;
}

.subtitle-font {
  font-family: "library" !important;
}

.link-buttons > .v-btn {
  height: 128px;
  width: 128px;
  border-radius: 50%;
}

.small-link-buttons > .v-btn {
  height: 78px;
  width: 78px;
}
</style>

