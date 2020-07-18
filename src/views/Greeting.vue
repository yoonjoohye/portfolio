<template>
    <section class="flex flex-col justify-between w-full h-full bg-image fixed z-0">
        <div class="flex flex-col justify-center h-64 sm:h-40">
            <div class="text-center text-white text-6xl font-normal sm:text-3xl">윤주혜</div>
            <div class="text-center text-white text-xl sm:text-sm">변화는 있지만, 변함없는 개발자</div>
        </div>

        <div class="flex flex-col justify-center items-center h-64 sm:h-40 w-full">
            <div class="text-white">
                <!--github-->
                <div class="flex items-center mb-2 cursor-pointer">
                    <div><img class="w-5 mr-3 sm:w-3" src="https://d2ajlnsxcxj87x.cloudfront.net/logo/github.svg"></div>
                    <div class="sm:text-xs">
                        <a href="https://github.com/yoonjoohye" target="_blank">GitHub | https://github.com/yoonjoohye</a>
                    </div>
                </div>

                <!--medium>-->
                <div class="flex items-center mb-2 cursor-pointer">
                    <div><img class="w-5 mr-3 sm:w-3" src="https://d2ajlnsxcxj87x.cloudfront.net/logo/medium.svg"></div>
                    <div class="sm:text-xs">
                        <a href="https://medium.com/@besoftyoon" target="_blank">개발 블로그 | Medium</a>
                    </div>
                </div>

                <!--email-->
                <div class="flex items-center mb-2 cursor-pointer">
                    <div><img class="w-5 mr-3 sm:w-3" src="https://d2ajlnsxcxj87x.cloudfront.net/logo/email.svg"></div>
                    <div class="sm:text-xs">
                        <a href="mailto:besoftyoon@gmail.com" target="_blank">besoftyoon@gmail.com</a>
                    </div>
                </div>

                <!--contact-->
                <div class="flex items-center cursor-pointer">
                    <div><img class="w-5 mr-3 sm:w-3" src="https://d2ajlnsxcxj87x.cloudfront.net/logo/phone.svg"></div>
                    <div class="sm:text-xs">010-9977-3841</div>
                </div>
            </div>
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
