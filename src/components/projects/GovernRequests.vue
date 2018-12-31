<template>
    <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1"
    >
        <template slot="headerCell" slot-scope="props">
            <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
                <span>
          {{ props.header.text }}
        </span>
            </v-tooltip>
        </template>
        <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.description }}</td>
            <td class="text-xs-left">{{ props.item.value }}</td>
            <td class="text-xs-left">{{ props.item.votes }}</td>
            <td class="text-xs-left">{{ props.item.end }}</td>
        </template>
    </v-data-table>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        components: { }
    })
    export default class HelloWorld extends Vue {
        @Prop({ default: 'default value' }) prop!: string;

        headers = [
            {
                text: 'Action',
                align: 'left',
                sortable: false,
                value: 'name'
            },
            { text: 'Description', value: 'description' },
            { text: 'Value', value: 'value' },
            { text: 'Votes', value: 'votes' },
            { text: 'End', value: 'emd' }
        ];
        desserts = [
            {
                name: 'Use: Build farm',
                description: 'Build the animal farm business',
                value: 15000,
                votes: 15,
                end: '30days'
            },
            {
                name: 'Use: Natural Resourses conservation',
                description: 'We might not be able to use this land for business. \n Conserve this land, apply for govt preservation program, hire caretaker.',
                value: 2000,
                votes: 3,
                end: '30days'
            },
            {
                name: 'Use: Lease',
                description: 'Lease our land to PropertyDevelopers ltd. for 40 years',
                value: 15000,
                votes: 15,
                end: '30days'
            },
            {
                name: 'Use: Sell',
                description: "Sell our land to PropertyDevelopers ltd.",
                value: 1500000,
                votes: 10,
                end: '30days'
            },
            {
                name: 'Manage: hire caretaker',
                description: "We can't do anything yet. Hire caretaker to preserve the land.",
                value: 2000,
                votes: 3,
                end: '30days'
            },
            {
                name: 'Manage: build fence',
                description: "Build it :)",
                value: 1000,
                votes: 3,
                end: '30days'
            }
        ]
    }
</script>

<style>

</style>
