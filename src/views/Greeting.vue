<template>
    <section class="container bg-image w-full flex flex-col justify-center">
        <div class="text-center text-white">
            <div class="text-6xl font-normal border-b border-white mb-5 sm:mb-4 sm:text-3xl">윤주혜</div>
            <div class="text-xl sm:text-sm">변화는 있지만, 변함없는 개발자</div>
        </div>
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
