<template>
    <div class="portfolio-box cursor-pointer max-w-sm shadow-lg mb-4" @click="open(index)">
        <img class="w-full" :src="require(`@/assets/images/portfolio/${thumbnail}`)" :alt="title">
        <div class="p-4">
            <div class="font-medium text-xl mb-2">{{title}}</div>
            <p class="text-sm ellipsis mb-5">{{content}}</p>
            <div class="flex flex-wrap items-center">
                <span class="font-normal text-xs px-2 py-1 bg-white text-gray-700 border mr-2 mb-2"
                      v-for="item in skill"># {{item}}</span>
            </div>
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