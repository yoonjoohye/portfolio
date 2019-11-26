<template>
    <div class="item">
        <figure class="activity-box mb-4">
            <img class="activity-img" :src="require(`@/assets/images/portfolio/${thumbnail}`)"
                 :alt="title">
            <figcaption class="activity-content">
                <div class="text-xs text-white mb-1 only-pc">{{type}}</div>
                <div class="text-xsmall text-white mb-5">{{title}}</div>
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