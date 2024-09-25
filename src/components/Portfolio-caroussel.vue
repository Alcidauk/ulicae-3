<template>
  <v-container>
    <h2>{{name}}</h2>

    <v-container grid-list-md>
      <v-card color="primary lighten-1" class="pa-5">
        <v-layout class="justify-center" row wrap>
          <viewer 
            :images="images"
            class="viewer" 
            ref="viewer">
              <img
                width=128
                height=128
                class="ma-2 portfolio-avatar"
                v-for="(item) in numbers"
                :key="item" 
                :src="imageUrl(item)"/>
        </viewer>
        
        </v-layout>
      </v-card>
    </v-container>

  </v-container>
</template>

<script lang="ts">
import Viewer from "v-viewer";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PortfolioCaroussel",
  data () {
    return { 
      numbers: [ 1, 2, 3, 4, 5, 6 ],
      name: null,
      code: null,
      selected: null,
      images: [],
    }
  },
  methods: {
    imageUrl(imageNumber: any): any {
      return `/src/assets/portfolio/besancon/${imageNumber}_light.jpg`
    }
  },
});
</script>

<style scoped>
.portfolio-avatar {
  border-radius: 50%;
}
</style>

