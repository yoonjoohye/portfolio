<template>
    <!--프로필-->
    <Profile></Profile>
</template>

<script>
    // @ is an alias to /src
    import Profile from '@/views/Profile.vue';

    export default {
        name: 'Index',

        beforeCreate() {
            document.body.className = 'overflow-auto';
        },
        components: {
             Profile
        },
    }
</script>


