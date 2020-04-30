<template>
    <div class="inline-block mr-3 mb-3">
        <div class="rounded px-3 py-2 flex flex-row justify-center items-center">
            <img class="h-5 mr-1" :src="`https://d2ajlnsxcxj87x.cloudfront.net/logo/${img}`">
            <span class="text-gray-800">{{name}}</span>
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