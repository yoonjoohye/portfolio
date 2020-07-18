<template>
    <section>
        <!--이력서-->
        <Float></Float>
        <!--뒷쪽-->
        <Greeting></Greeting>
        <!--프로필-->
        <Profile></Profile>
    </section>
</template>

<script>
    // @ is an alias to /src
    import Greeting from '@/views/Greeting.vue';
    import Profile from '@/views/Profile.vue';
    import Float from '@/components/Float.vue';


    export default {
        name: 'Index',
        beforeCreate() {
            document.body.className = 'overflow-auto';
        },
        components: {
            Greeting, Profile, Float
        },
    }
</script>


