<template>
    <section class="fixed top-0 bottom-0 left-0 right-0 bg-black-opacity-dark overflow-scroll sm:flex sm:items-center" @click="$emit('close')">
        <div class="flex items-center justify-center p-10">
            <img class="w-10/12  sm:w-1/2 rounded-lg" :src="`https://d2ajlnsxcxj87x.cloudfront.net/portfolio/${imgSrc}`"/>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Modal",
        props:{imgSrc:String}
    }
</script>

<style scoped>

</style>