<template>
    <project-list v-if="!loading" v-bind:projects="units"></project-list>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import unitsRegistryContract from "../services/UnitsRegistry";
import ProjectList from '@/components/projects/LandList.vue'; // @ is an alias to /src

@Component({
  components: {
    'project-list': ProjectList,
  }
})
export default class Home extends Vue {
  list: any[] = [...Array(6).keys()];
  number = 10;
  loading = true;
  units = [];

  async created() {

    const numEstates = await unitsRegistryContract.methods.numSpUnits().call();
    await Promise.all([...Array(parseInt(numEstates)).keys()].map(async (i) =>{
        const addr = await unitsRegistryContract.methods.keys(i).call();
        const unit = await unitsRegistryContract.methods.getSpatialUnit(addr).call();
        unit.address = addr;

        this.units.push(unit);
    }));
    this.loading = false;
  }
}
</script>
