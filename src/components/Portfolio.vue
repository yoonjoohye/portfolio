<template>
    <div class="margin cursor-pointer max-w-md rounded shadow-lg mb-5" @click="open(index)">
        <img class="w-full" :src="require(`@/assets/images/portfolio/${thumbnail}`)" :alt="title">
        <div class="p-4">
            <div class="font-medium text-xl mb-2">{{title}}</div>
            <p class="mb-5">{{content}}</p>
            <div class="flex flex-wrap">
                <span class="keep-all font-normal text-xs px-2 py-1 border rounded mr-2 mb-2"
                      v-for="item in skill"># {{item}}</span>
            </div>
            <div class="text-right text-sm">
                자세히 보기 >
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