import Vue from 'vue';

Vue.filter('slugify', (value: string) => {
    if (!value) {
        return '';
    }

    return  value.toString()
        .toLowerCase()
        .trim()
        .replace(/&/g, '-and-') //
        .replace(/[\s\W-]+/g, '-')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '');
})