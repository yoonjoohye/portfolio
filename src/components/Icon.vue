<template>
    <div class="inline-block border border-gray-600 rounded mr-3 mb-3 sm:mr-2 sm:mb-2">
        <div class="px-2 py-1 flex justify-center items-center">
            <img class="h-4 mr-1" :src="`https://d2ajlnsxcxj87x.cloudfront.net/logo/${img}`">
            <div class="font-normal text-sm sm:text-xs">{{name}}</div>
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