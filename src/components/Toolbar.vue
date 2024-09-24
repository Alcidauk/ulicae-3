<template>
  <v-app-bar :elevation="2" color="primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon 
      v-if="$vuetify.display.mobile"
      class="text-secondary" 
      @click="$emit('toggle-navigate')">
    </v-app-bar-nav-icon>
  </template>
  
  <v-app-bar-title class="toolbar-title">
    <span class="title-font text-secondary">{{ title }}</span>
    <span class="extension-font text-secondary">.com</span>
    
    <div class="subtitle-font text-primary-lighten-2">
      Pierre Rognon
    </div>
  </v-app-bar-title>
  
  <div class="text-center mr-3"  v-if="!$vuetify.display.mobile">
    <v-btn prepend-icon="fas fa-home" :to="{ path: '/home' }" class="primary accent-2 text-secondary">
      <template v-slot:prepend>
        <v-icon color="accent-1"></v-icon>
      </template> 
      Accueil
    </v-btn>
    <v-btn prepend-icon="fas fa-address-card" :to="{ path: '/cv' }" color="primary accent-2 text-secondary">
      <template v-slot:prepend>
        <v-icon color="accent-1"></v-icon>
      </template> 
      CV
    </v-btn>
    <v-btn prepend-icon="fas fa-clipboard" :to="{ path: '/notes' }" color="primary accent-2 text-secondary">
      <template v-slot:prepend>
        <v-icon color="accent-1"></v-icon>
      </template> 
      Notes
    </v-btn>
    <v-btn prepend-icon="fas fa-images" :to="{ path: '/portfolio' }" color="primary accent-2 text-secondary">
      <template v-slot:prepend>
        <v-icon color="accent-1"></v-icon>
      </template> 
      Albums
    </v-btn>
    <v-btn :to="{ path: '/cinelog/home' }" class="text-cinelog_secondary-darken-1 bg-cinelog_primary">
    <v-img :height="30" :width="30" class="mr-2" :src="imgUrl"/>
    CineLog
    </v-btn>
</div>
</v-app-bar>
</template>

<script setup lang="ts">
import imgUrl from '../assets/cinelog.png'

const title = "Ulicae"
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbar-title {
  margin-right: 25px;
  line-height: 0.9;
}

.title-font {
  font-family: "library";
  font-size: 1.4em;
}

.extension-font {
  font-family: "library";
  font-size: 0.8em;
}

/* need important due to vuetify use of important */
.subtitle-font {
  font-family: "library" !important;
  font-size: 1em;
}
</style>

