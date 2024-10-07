<template>
  <Toolbar></Toolbar>
  
  <v-btn color="secondary"
    class="ma-2"
    v-if="$vuetify.display.mobile"
    @click.stop="permanent = !permanent"
    :icon="'fas ' + (permanent ? 'fa-angle-down' : 'fa-angle-up')">
  </v-btn>

  <v-navigation-drawer 
    color="secondary lighten-1"
    class="pt-2"
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    :permanent="permanent"
    clipped
    fixed
    app
    rail
    expand-on-hover>
      <v-list-item 
        nav
        class="plain-opacity ma-1 text-primary"
        color="primary"
        value="true"
        v-for="item in items"
        :key="item.currentPage"
        @click.prevent="selectedPage = item.currentPage"
        :prepend-icon="'fas ' + item.icon"
        :title="item.title">
      </v-list-item>

      <v-list-item
        style="background-color: #D32F2F;"
        href="CV_website.pdf" 
        target="#"
        class="ma-1"
        key="cv">
          <template v-slot:prepend>
            <v-icon icon="fas fa-file-pdf"></v-icon>
          </template>
          <v-list-item-title align="end" class="text-secondary text--lighten-1 text-subtitle-2">CV au format PDF</v-list-item-title>
      </v-list-item>
  </v-navigation-drawer>

  <v-container fluid>
  <!--<FormationCategory currentPage="formation" :selectedPage="selectedPage"/>
  <ExperienceCategory currentPage="experiences" :selectedPage="selectedPage"/>
  <KnowledgeCategory currentPage="knowledges" :selectedPage="selectedPage"/>
  <HobbyCategory currentPage="hobbies" :selectedPage="selectedPage"/>
  <LinkCategory currentPage="links" :selectedPage="selectedPage"/> -->
  </v-container>

</template>

<script lang="ts">
import Toolbar from './Toolbar.vue';
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Cv',
  props: {
    msg: String
  },
  data () {
    return {
      permanent: false,
      miniVariant: false,
      selectedPage: 'experiences',
      drawer: null,
      items: [
      {
        icon: 'fa-briefcase',
        title: 'Expériences',
        currentPage: 'experiences'
      },
        {
        icon: 'fa-chalkboard-teacher',
        title: 'Formation',
        currentPage: 'formation'
      },
      {
        icon: 'fa-chart-line',
        title: 'Compétences',
        currentPage: 'knowledges'
      },
      {
        icon: 'fa-hand-peace',
        title: 'Centres d\'intérêt',
        currentPage: 'hobbies'
      }
      ]     
    }
  }
});
</script>

<style scoped>
.plain-opacity .v-list-item__prepend > .v-icon {
    opacity: 1;
}
</style>