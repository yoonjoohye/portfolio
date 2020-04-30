<template>
    <section>
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


    export default {
        name: 'Index',
        components: {
            Greeting, Profile, Contact
        }
    }
</script>
