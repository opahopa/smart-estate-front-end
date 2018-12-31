<template>
  <v-layout
    justify-center
    align-center>
    <!--<v-card fill-height xs12>-->
      <v-container
              fluid
              grid-list-sm
              offset-sm3>
        <v-layout row wrap>
          <v-flex v-for="p in projects">
            <project-card v-bind:project="p"></project-card>
          </v-flex>
        </v-layout>
      </v-container>
    <!--</v-card>-->
  </v-layout>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import ProjectCard from '@/components/projects/LandCard.vue';


  @Component({
    components: {
      ProjectCard
    }
  })
  export default class LandList extends Vue {
    @Prop(Array) public projects!: [Number];

      mounted() {
        console.log(this.projects)
      }
  }
</script>

<style>

</style>
