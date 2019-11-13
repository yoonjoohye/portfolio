<template>
    <div class="item">
        <figure class="cursor-pointer activity-box">
            <img class="activity-img" :src="require(`@/assets/images/portfolio/${thumbnail}`)"
                 :alt="title">
            <figcaption class="activity-content">
                <div class="text-sm text-white mb-1 only-pc ">활동</div>
                <div class="text-small font-medium text-white mb-5">{{title}}</div>
            </figcaption>
        </figure>
    </div>
</template>

<script>
    export default {
        name: "Activity",
        props: {thumbnail: String, title: String},

    }
</script>

<style lang="scss">

</style>