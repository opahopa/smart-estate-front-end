<template>
    <v-card height="100%">
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap justify-center>
                <v-flex xs12 md6 lg6>
                    <v-img
                            class="white--text"
                            height="400px"
                            width="400px"
                            aspect-ratio="1.2"
                            :src="require(`../../assets/download2.jpeg`)"
                    ></v-img>
                </v-flex>
                <v-flex xs12 md6 lg6>
                    <div class="title">
                        This land is currently managed by caretaker: <br><br><div class="body-2">{{caretaker}}</div>
                    </div>
                    <br><br>
                    <div class="subheading">
                        His stake is: 1.52% (123 Eth)
                    </div>
                    <br>
                    <div class="subheading">
                        Growing by: 0.23% per year.
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import unitsRegistryContract from "../../services/UnitsRegistry";

    @Component({
        components: { }
    })
    export default class LandPage extends Vue {
        @Prop({ default: null }) project!: {};
        caretaker = '';

        async created() {
            const unit = await unitsRegistryContract.methods.getSpatialUnit(this.$route.params.address).call();
            this.caretaker = unit.creator;
        }
    }
</script>

<style>

</style>
