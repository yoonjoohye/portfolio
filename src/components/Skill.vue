<template>
    <section class="mb-10 sm:mb-8">
        <div class="mb-8">
            <span class="text-3xl border-b-4 border-orange-800 sm:text-xl sm:border-b-2">Skill</span>
        </div>
        <div class="flex flex-row-m justify-center mb-5 sm:mb-0 " v-for="list in skill">
            <div class="font-medium text-lg w-1/3 text-right mr-10 sm:mr-0 sm:mb-2 sm:text-center sm:text-base sm:w-full">
                {{list.type}}
            </div>
            <div class="w-2/3 sm:w-full">
                <Icon v-for="item in list.data" :name="item.name" :img="item.img"></Icon>
            </div>
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