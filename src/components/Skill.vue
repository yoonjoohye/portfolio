<template>
    <section class="mb-10 sm:mb-5">
        <div class="mb-8">
            <span class="text-3xl border-b-4 border-orange-800 sm:text-xl">Skill</span>
        </div>
        <div class="text-center">
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