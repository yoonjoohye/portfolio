<template>
    <section class="w-full flex flex-col justify-center items-center border-b">
        <div class="container profile">
        <!--포트폴리오-->
        <div class="flex justify-between flex-wrap py-5">
            <Portfolio v-for="(item,index) in portfolio" :thumbnail="item.thumbnail" :title="item.title"
                       :content="item.content"
                       :skill="item.skill" :index="index"></Portfolio>
        </div>

        <!--활동-->
        <div class="masonry py-5">
            <Activity v-for="(item,index) in activity" :thumbnail="item.thumbnail" :title="item.title"
                      :type="item.type"></Activity>
        </div>
        </div>
    </section>
</template>

<script>
    import Portfolio from '../components/Portfolio.vue'
    import Activity from '../components/Activity.vue'
    import db from '../assets/db/db.json';

    export default {
        name: "Record",
        components: {
            Portfolio, Activity
        },
        data() {
            return {
                portfolio: db.portfolio,
                activity: db.activity
            }
        }
    }
</script>

<style scoped>

</style>