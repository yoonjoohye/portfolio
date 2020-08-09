<template>
    <div class="inline-block rounded-full px-4 py-2">
        <div class="flex justify-center items-center">
            <img class="h-4 mr-1" :src="`https://d2ajlnsxcxj87x.cloudfront.net/logo/${img}`">
            <div class="font-medium text-sm sm:text-xs">{{name}}</div>
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