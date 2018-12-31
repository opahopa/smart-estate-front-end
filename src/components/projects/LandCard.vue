/* eslint-disable */
<template>
    <v-layout>
        <v-flex xs12 class="pa-3">
            <v-card>
                <v-img
                        class="white--text"
                        height="200px"
                        :src="require(`../../assets/download${getRndNumber(4)}.jpeg`)"
                >
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline">{{this.project.name}}</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-img>
                <v-card-title>
                    <div>
                        <router-link :to="{ name: 'project', params: { address: this.project.address, slug: slugifyTitle(this.project.name) }}">
                            <h3 class="title">{{this.project.name}}</h3>
                        </router-link>
                        <span class="text-truncate">Lat: {{this.latlng.latitude}} Long: {{this.latlng.longitude}}</span><br>
                        <span class="grey--text">Owner: {{this.project.creator}}</span>
                    </div>
                </v-card-title>
                <v-card-actions class="card-actions">
                    <v-btn flat :to="{ name: 'project-govern', params: { address: this.project.address, slug: slugifyTitle(this.project.name) }}" color="primary">Governance</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
    import geohash from "ngeohash";
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        components: { }
    })
    export default class LandCard extends Vue {
        @Prop({ default: null }) project!: {
            geoHash: string;
        };
        latlng = {};

        //filter doesn't work in :to {{}}
        slugifyTitle(s: string) {
            return this.$options.filters.slugify(s)
        }

        getRndNumber(max: number) {
            return Math.floor((Math.random()*max) + 1);
        }

        mounted() {
            this.latlng =  geohash.decode(this.project.geoHash);
        }
    }
</script>

<style>
    .card-actions {
        justify-content: center;
    }
</style>
