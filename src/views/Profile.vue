<template>
    <section class="w-full h-screen sm:h-auto flex flex-col justify-center items-center border-b">
        <div class="container profile">
            <div class="flex flex-row md:flex-col justify-center py-10">
                <div class="w-64 mr-24 md:hidden">
                    <img class="w-full" src="https://d2ajlnsxcxj87x.cloudfront.net/yoonjoohye.png"/>
                </div>
                <div>
                    <div class="flex items-center">
                        <div class="text-4xl font-medium mr-5">윤주혜</div>
                        <a class="bg-orange-400 font-normal text-base text-white flex justify-center items-center w-24 h-10"
                           href="https://drive.google.com/drive/folders/1kGlwKXYWo4R4-TAou7fAHpNHTIX6Gy9n?usp=sharing"
                           target="_blank">
                            <img class="inline h-5 mr-1" src="https://d2ajlnsxcxj87x.cloudfront.net/logo/download.svg" alt="download">이력서
                        </a>
                    </div>
                    <div class="text-lg border-b border-gray-200 py-5 pr-3">
<!--                        <div>2000.12.15</div>-->
                        <div>010-9977-3841</div>
                        <div class="underline">
                            <a href="mailto:besoftyoon@gmail.com" target="_blank">besoftyoon@gmail.com</a>
                        </div>
                    </div>
                    <div class="border-b border-gray-200 py-5 pr-3">
                        <div class="text-lg font-normal">(주)코멘토</div>
                        <div>Front-End Developer Intern</div>
                        <div>2019.01 ~ 2019.08 (8개월)</div>
                    </div>
                    <div class="border-b border-gray-200 py-5 pr-3">
                        <div class="text-lg font-normal">미림여자정보과학고등학교</div>
                        <div>인터랙티브미디어과</div>
                        <div>2016.03 ~ 2019.02(졸업)</div>
                    </div>
                    <div class="py-5 pr-3">
                        <Icon v-for="item in skill" :name="item.name" :img="item.img"></Icon>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Icon from '../components/Icon.vue'
    import db from '../assets/db/db.json';

    export default {
        name: "Profile",
        components: {
            Icon
        },
        data() {
            return {
                skill:db.skill
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
</style>