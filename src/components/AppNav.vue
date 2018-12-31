<template>
    <v-toolbar row wrap>
        <v-layout align-center justify-space-between row fill-height>
            <v-toolbar-title xs2 class="title">
                <span to="/" class="red--text">SmartEstate</span>
            </v-toolbar-title>
            <v-flex xs7>
                <v-text-field
                        class="nav-search-text"
                        hide-details
                        single-line
                        fill-height
                        color="primary"
                        prepend-inner-icon="search"
                        label="Search"
                ></v-text-field>
            </v-flex>
            <v-toolbar-items xs4>
                <v-btn flat to="/" active-class="''" color="primary">Home</v-btn>
                <v-btn flat to="/about" active-class="''" color="primary">About</v-btn>
                <v-btn icon large>
                    <v-icon color="primary">account_circle</v-icon>
                    <!--<v-avatar size="32px" tile>-->
                        <!--<img-->
                                <!--src="https://cdn.vuetifyjs.com/images/logos/logo.svg"-->
                                <!--alt="Vuetify"-->
                        <!--&gt;-->
                    <!--</v-avatar>-->
                </v-btn>
            </v-toolbar-items>
        </v-layout>
    </v-toolbar>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: { },
    })
    export default class AppNav extends Vue {
    }
</script>

<style>
.nav-search-text {
    padding-top: 0px;
}
</style>
