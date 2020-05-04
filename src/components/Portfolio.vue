<template>
    <div class="cursor-pointer border border-gray-200" @click="open(index)">
        <img class="w-full h-64" :src="`https://d2ajlnsxcxj87x.cloudfront.net/portfolio/${thumbnail}`" :alt="title">
        <div class="px-5 py-4">
            <div class="font-medium text-xl mb-2 sm:text-base">{{title}}</div>
            <p class="text-sm ellipsis mb-5 sm:text-xs" v-html="content"></p>
<!--            <div class="flex flex-wrap items-center">-->
<!--                <span class="font-normal text-xs px-2 py-1 bg-white text-gray-700 border mr-2 mb-2 sm:text-xs"-->
<!--                      v-for="item in skill"># {{item}}</span>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Portfolio",
        props: {thumbnail: String, title: String, content: String, skill: Array, index: Number},
        methods: {
            open(idx) {
                this.$router.push(`/detail/${idx}`);
            }
        }

    }
</script>

<style lang="scss">

</style>