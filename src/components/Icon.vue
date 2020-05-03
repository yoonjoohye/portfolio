<template>
    <div class="inline-block mr-3 mb-3">
        <div class="p-2 flex justify-center items-center">
            <img class="h-5 mr-1" :src="`https://d2ajlnsxcxj87x.cloudfront.net/logo/${img}`">
            <div class="text-gray-800 sm:text-sm">{{name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {name: String, img: String},
    }
</script>

<style scoped>

</style>