<template>
    <div class="h-68 shadow-right rounded-lg flex flex-row-m items-center p-5" >
        <img class="ml--2 w-56 sm:h-32 relative shadow-right rounded-lg mr-5 sm:ml-0 sm:mr-0 sm:mb-2" :src="`https://d2ajlnsxcxj87x.cloudfront.net/portfolio/${thumbnail}`"
             :alt="title">
        <div class="">
            <div class="text-xsmall font-light keep-all ">{{date}}</div>
            <div class="text-2xl font-medium sm:text-base mb-5 sm:mb-2 keep-all">{{title}}</div>
            <div class="text-small keep-all">{{contents}}</div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Activity",
        props: {color:String, date:String, thumbnail: String, title: String, type:String, contents:String},

    }
</script>

<style lang="scss">

</style>