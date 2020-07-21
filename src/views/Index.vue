<template>
    <section>
        <!--인사말-->
        <Greeting></Greeting>
        <!--프로필-->
        <Profile></Profile>
    </section>
</template>

<script>
    // @ is an alias to /src
    import Greeting from '@/views/Greeting.vue';
    import Profile from '@/views/Profile.vue';

    export default {
        name: 'Index',

        beforeCreate() {
            document.body.className = 'overflow-auto';
        },
        components: {
            Greeting, Profile
        },
    }
</script>


