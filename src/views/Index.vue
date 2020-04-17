<template>
    <section>
        <!--인사말-->
        <Greeting></Greeting>

        <!--프로필-->
        <Profile></Profile>

        <!--이력-->
        <Record></Record>

        <!--연락-->
        <Contact></Contact>
    </section>
</template>

<script>
    // @ is an alias to /src
    import Greeting from '@/views/Greeting.vue';
    //import Musinsa from '@/views/Musinsa.vue';
    import Profile from '@/views/Profile.vue';
    import Record from '@/views/Record.vue';
    import Contact from '@/views/Contact.vue';


    export default {
        name: 'Index',
        components: {
            Greeting, Profile, Record, Contact
        }
    }
</script>
