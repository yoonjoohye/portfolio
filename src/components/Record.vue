<template>
    <section>
        <!--포트폴리오-->
        <div class="inline-block text-center text-3xl border-b-4 border-orange-800 text-orange-800 mb-5">Portfolio
        </div>
        <div class="grid grid-cols-4-m gap-3 py-5">
            <Portfolio v-for="(item,index) in portfolio" :thumbnail="item.thumbnail" :title="item.title"
                       :content="item.content"
                       :skill="item.skill" :index="index"></Portfolio>
        </div>

        <!--활동-->
        <div class="masonry py-5">
            <Activity v-for="(item,index) in activity" :thumbnail="item.thumbnail" :title="item.title"
                      :type="item.type"></Activity>
        </div>
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