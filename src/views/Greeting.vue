<template>
    <section class="h-64 sm:h-40 bg-image w-full flex flex-col justify-center fixed z-0">
            <div class="text-center text-white text-6xl font-normal sm:text-3xl">윤주혜</div>
            <div class="text-center text-white text-xl sm:text-sm">변화는 있지만, 변함없는 개발자</div>
    </section>
</template>

<script>
    export default {
        name: 'Greeting',
        props: {
            msg: String
        },
        data(){
            return{

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
