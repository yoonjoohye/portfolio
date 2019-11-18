<template>
    <section class="padding bg-image w-screen h-screen flex flex-col justify-center">
        <div class="text-big text-white font-semibold py-3 border-b">
            안녕하세요,<br>
            Front-End 개발자<br class="only-mobile"> 윤주혜입니다.
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Greeting',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
