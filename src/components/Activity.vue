<template>
    <div class="item">
        <figure class="activity-box mb-4">
            <img class="activity-img rounded-lg" :src="`https://d2ajlnsxcxj87x.cloudfront.net/portfolio/${thumbnail}`"
                 :alt="title">
            <figcaption class="activity-content rounded-lg">
<!--                <span class="text-white px-2 text-xs font-normal text-white mb-1 only-pc">{{type}}</span>-->
                <div class="text-lg sm:text-xs font-medium text-white mb-5">{{title}}</div>
            </figcaption>
        </figure>
    </div>
</template>

<script>
    export default {
        name: "Activity",
        props: {thumbnail: String, title: String, type:String},

    }
</script>

<style lang="scss">

</style>