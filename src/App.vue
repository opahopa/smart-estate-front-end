<template>
  <v-app>
    <app-nav></app-nav>
    <v-content class="pages-router-content">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import AppNav from '@/components/AppNav.vue';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {
    'app-nav': AppNav
  }
})
export default class Main extends Vue {}

</script>
<style>
  .pages-router-content > div:first-child {
    background-color: #fff;
    border-color: #fff;
    color: rgba(0,0,0,.87);
  }
  /*#pages-content {*/
    /*background-color: #fff !important;*/
    /*border-color: #fff !important;*/
    /*color: rgba(0,0,0,.87) !important;*/
  /*}*/
</style>