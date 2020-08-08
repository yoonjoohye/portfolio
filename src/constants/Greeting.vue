<template>
    <section class="fixed z-10 bg-white w-full flex flex-col shadow-lg ">

<!--        <img class="absolute left-10 bottom-0 w-32 h-32 sm:w-20 sm:h-20" src="../assets/images/logo/gooddoc.png"/>-->
        <div class="text-3xl sm:text-3xl">YoonJoohye</div>
<!--        <div class="absolute right-10 text-left text-blue-800 only-pc">-->
<!--            <div class="text-4xl md:text-3xl italic">-->
<!--                # 변화는 있지만,<br/>-->
<!--                # 변함없는 개발자-->
<!--            </div>-->
<!--        </div>-->
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
