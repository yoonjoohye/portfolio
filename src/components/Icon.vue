<template>
    <div class="inline-block mr-2 mb-2">
        <div class="border px-3 py-2 flex flex-row justify-center items-center">
            <img class="h-5 mr-1" :src="require(`@/assets/images/logo/${img}`)">
            <span class="text-sm text-gray-700">{{name}}</span>
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