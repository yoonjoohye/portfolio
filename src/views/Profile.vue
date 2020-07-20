<template>
    <section class="w-full flex flex-col justify-center items-center">
        <div class="container bg-white shadow-top">
            <div class="flex flex-row-m">
                <!--경력-->
                <Career/>
                <!--교육-->
                <Edu/>
            </div>
            <!--스킬-->
            <Skill/>
            <!--포폴-->
            <Record/>
        </div>
    </section>
</template>

<script>
    import Career from '../components/Career.vue';
    import Edu from '../components/Edu.vue';
    import Skill from '../components/Skill.vue';
    import Record from '../components/Record.vue';


    export default {
        name: "Profile",
        components: {
            Career, Edu, Skill, Record
        },
    }
</script>

<style lang="scss">
</style>