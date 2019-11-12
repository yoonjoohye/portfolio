<template>
    <div class="cursor-pointer max-w-sm rounded shadow-lg mr-5 mb-5" @click="$emit('open')">
        <img class="w-full" :src="require(`@/assets/images/portfolio/${thumbnail}`)" :alt="title">
        <div class="p-4">
            <div class="font-medium text-xl mb-2">{{title}}</div>
            <p class="mb-5">{{content}}</p>
            <div class="flex flex-wrap">
                <span class="keep-all font-normal text-xs px-2 py-1 rounded bg-gray-200 mr-2 mb-2" v-for="item in skill"># {{item}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Portfolio",
        props: {thumbnail: String, title: String, content: String, skill: Array},
    }
</script>

<style scoped>

</style>