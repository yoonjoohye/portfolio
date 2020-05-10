<template>
    <section>
        <!--이력서-->
        <Float></Float>
        <!--인사말-->
        <Greeting></Greeting>
        <!--프로필-->
        <Profile></Profile>
        <!--연락처-->
        <Contact></Contact>
    </section>
</template>

<script>
    // @ is an alias to /src
    import Greeting from '@/views/Greeting.vue';
    import Profile from '@/views/Profile.vue';
    import Contact from '@/views/Contact.vue';
    import Float from '@/components/Float.vue';


    export default {
        name: 'Index',
        components: {
            Greeting, Profile, Contact,Float
        },
    }
</script>
