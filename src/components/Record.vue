<template>
    <section class="mb-10 sm:mb-8">
        <div class="mb-8">
            <span class="text-3xl font-semibold border-l-6 pl-3 border-orange-800 sm:text-xl sm:border-l-4">Project</span>
        </div>
        <!--포트폴리오-->
        <div class="grid grid-cols-2-m gap-3 mb-8">
            <Project v-for="(item,index) in portfolio" :thumbnail="item.thumbnail" :title="item.title"
                       :content="item.content"
                       :color="item.color"
                       :skill="item.skill" :index="index"></Project>
        </div>
        <div class="mb-8">
            <span class="text-3xl font-semibold border-l-6 pl-3 border-orange-800 sm:text-xl sm:border-l-4">Activity</span>
        </div>
        <!--활동-->
        <div class="grid grid-cols-2-m gap-3 mb-8">
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
    import Project from './Project.vue'
    import Activity from './Activity.vue'
    import db from '../assets/db/db.json';

    export default {
        name: "Record",
        components: {
            Project, Activity
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