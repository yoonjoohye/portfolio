<template>
    <section class="mb-10">
        <div class="inline-block text-center text-3xl border-b-4 border-orange-800 text-orange-800 mb-5">
            Skill
        </div>
        <div class="text-center py-5">
            <Icon v-for="item in skill" :name="item.name" :img="item.img"></Icon>
        </div>
    </section>
</template>

<script>
    import Icon from '../components/Icon.vue'
    import db from '../assets/db/db.json';
    export default {
        name: "Skill",
        components:{
            Icon
        },
        data(){
            return{
                skill:db.skill
            }
        }
    }
</script>

<style scoped>

</style>