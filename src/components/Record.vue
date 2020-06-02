<template>
    <section class="mb-10 sm:mb-8">
        <div class="mb-8">
            <span class="text-3xl border-b-4 border-orange-800 sm:text-xl sm:border-b-2">Portfolio</span>
        </div>
        <!--포트폴리오-->
        <div class="grid grid-cols-3-m gap-3 mb-8">
            <Portfolio v-for="(item,index) in portfolio" :thumbnail="item.thumbnail" :title="item.title"
                       :content="item.content"
                       :color="item.color"
                       :skill="item.skill" :index="index"></Portfolio>
        </div>
        <div class="mb-8">
            <span class="text-3xl border-b-4 border-orange-800 sm:text-xl sm:border-b-2">Activity</span>
        </div>
        <!--활동-->
        <div class="grid grid-cols-3-m gap-3 mb-8">
            <Activity v-for="(item,index) in activity" :color="item.color" :date="item.date" :thumbnail="item.thumbnail"
                      :title="item.title"
                      :type="item.type"
                      :contents="item.contents"></Activity>
        </div>
        <!--        <div class="masonry">-->
        <!--            <Activity v-for="(item,index) in activity" :thumbnail="item.thumbnail" :title="item.title"-->
        <!--                      :type="item.type"></Activity>-->
        <!--        </div>-->
    </section>
</template>

<script>
    import Portfolio from './Portfolio.vue'
    import Activity from './Activity.vue'
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