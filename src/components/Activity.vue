<template>
    <div class="item">
        <img :src="require(`@/assets/images/portfolio/${thumbnail}`)" :alt="title">
    </div>
</template>

<script>
    export default {
        name: "Activity",
        props: {thumbnail: String, title: String, content: String},

    }
</script>

<style scoped>

</style>