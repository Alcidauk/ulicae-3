<template>
  <Toolbar></Toolbar>
  
  <v-container fluid class="fill-height child-flex background lighten-1">
    <v-container >
      <v-row>
        <v-col align="center">
          <v-flex class="align-center justify-center layout">
            <h1>Portfolio</h1>
          </v-flex>
        </v-col>
      </v-row>
      
      
      <v-row>
          <v-layout class="justify-center mb-2">
            <router-link to="/portfolio/besancon">
              <v-avatar contain size="64">
                <v-img
                  :src="sampleImageUrl"
                  aspect-ratio="1">
                  <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height ma-0">
                      <v-progress-circular
                      color="grey-lighten-4"
                      indeterminate
                      ></v-progress-circular>
                    </div>
                  </template>
                </v-img>
              </v-avatar>
            </router-link>
          </v-layout>
      </v-row>

      <v-row>
        <router-view xs12></router-view>
      </v-row>
  </v-container>
</v-container>
</template>

<script setup lang="ts">
import Toolbar from './Toolbar.vue';
import sampleImageUrl from '../assets/portfolio/besancon/1.jpg'

</script>

<style scoped>
.portfolio-avatar {
  border-radius: 50%;
}
</style>

