<template>
    <v-container>
        <v-layout
                text-xs-center
                wrap
        >

        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        components: { }
    })
    export default class HelloWorld extends Vue {
        @Prop({ default: 'default value' }) prop!: string;
    }
</script>

<style>

</style>
