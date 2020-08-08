<template>
    <!--프로필-->
    <Profile></Profile>
</template>

<script>
    // @ is an alias to /src
    import Profile from '@/constants/Profile.vue';

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


