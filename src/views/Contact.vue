<template>
    <section>
        <div class="container sm:pb-0 flex flex-col justify-center">
            <div class="mb-10">
                <p class="text-2xl sm:text-lg keep-all">
                    안녕하세요! 예쁘게 만드는 것을 좋아하는 <span class="font-semibold">FE 개발자 윤주혜</span>입니다.<br/>
                    유저지향적 서비스와 예쁜 서비스 두마리의 토끼를 잡고 싶어하는 개발자입니다.<br/>
                </p>
            </div>
            <div class="text-lg sm:text-sm font-medium">
                <!--contact-->
                <div class="flex items-center mb-5 cursor-pointer">
                    <div><img class="w-10 mr-5 sm:w-5" src="../assets/images/icon/phone.svg"></div>
                    <div>010-9977-3841</div>
                </div>
                <!--email-->
                <div class="flex items-center mb-5 cursor-pointer">
                    <div><img class="w-10 mr-5 sm:w-5" src="../assets/images/icon/email.svg"></div>
                    <div>
                        <a href="mailto:besoftyoon@gmail.com" target="_blank">besoftyoon@gmail.com</a>
                    </div>
                </div>
                <!--github-->
                <div class="flex items-center mb-5 cursor-pointer">
                    <div><img class="w-10 mr-5 sm:w-5" src="../assets/images/icon/github.svg"></div>
                    <div>
                        <a href="https://github.com/yoonjoohye" target="_blank">GitHub |
                            https://github.com/yoonjoohye</a>
                    </div>
                </div>
                <!--medium>-->
                <div class="flex items-center cursor-pointer">
                    <div><img class="w-10 mr-5 sm:w-5" src="../assets/images/icon/medium.svg"></div>
                    <div>
                        <a href="https://medium.com/@besoftyoon" target="_blank">Medium |
                            https://medium.com/@besoftyoon</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>