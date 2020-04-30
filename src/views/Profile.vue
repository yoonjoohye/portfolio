<template>
    <section class="w-full flex flex-col justify-center items-center ">
        <div class="container profile">
            <!--소개-->
            <About/>
            <!--스킬-->
            <Skill/>
            <!--포폴-->
            <Record/>
        </div>
    </section>
</template>

<script>
    import About from '../components/About.vue';
    import Skill from '../components/Skill.vue';
    import Record from '../components/Record.vue';


    export default {
        name: "Profile",
        components: {
            About, Skill, Record
        },
    }
</script>

<style lang="scss">
</style>