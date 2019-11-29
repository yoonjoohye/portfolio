<template>
    <section class="w-full flex flex-col justify-center items-center border-b">
        <div class="container profile">
            <div class="flex flex-row-m justify-center">
                <div class="w-1/4 only-pc"><img class="w-full" src="https://gkofsflkibbo3126162.cdn.ntruss.com/yoonjoohye.png"></div>
                <div>
                    <div class="flex">
                        <div class="text-xl font-medium">윤주혜 <span class="font-normal mr-5">(Yoon Joo Hye)</span></div>
<!--                        <a class="bg-black font-normal text-base text-white flex justify-center items-center px-3 py-1"-->
<!--                           href="https://drive.google.com/drive/folders/1kGlwKXYWo4R4-TAou7fAHpNHTIX6Gy9n?usp=sharing"-->
<!--                           target="_blank">-->
<!--                            <img class="inline h-5 mr-1" src="@/assets/images/logo/download.svg" alt="download">이력서-->
<!--                        </a>-->
                    </div>
                    <div class="border-b py-3 pr-3">
                        <div>2000.12.15</div>
                        <div>010-9977-3841</div>
                        <div class="text-blue-500 underline"><a href="mailto:besoftyoon@gmail.com" target="_blank">besoftyoon@gmail.com</a>
                        </div>
                    </div>
                    <div class="border-b py-3 pr-3">
                        <div class="font-normal">미림여자정보과학고등학교(졸업)</div>
                        <div>인터랙티브미디어과</div>
                        <div>2016.03 ~ 2019.02</div>
                    </div>
                    <div class="border-b py-3 pr-3">
                        <div class="font-normal">(주)코멘토</div>
                        <div>Front-End Developer Intern</div>
                        <div>2019.01 ~ 2019.08 (8개월)</div>
                    </div>
                    <div class="py-3 pr-3">
                        <Icon v-for="item in skill" :name="item.name" :img="item.img"></Icon>
                    </div>
                </div>
            </div>

            <!--포트폴리오-->
            <div class="flex justify-between flex-wrap py-5">
                <Portfolio v-for="(item,index) in portfolio" :thumbnail="item.thumbnail" :title="item.title"
                           :content="item.content"
                           :skill="item.skill" :index="index"></Portfolio>
            </div>

            <!--활동-->
            <div class="masonry py-3">
                <Activity v-for="(item,index) in activity" :thumbnail="item.thumbnail" :title="item.title"
                          :type="item.type"></Activity>
            </div>
        </div>
    </section>
</template>

<script>
    import Icon from '../components/Icon.vue'
    import Portfolio from '../components/Portfolio.vue'
    import Activity from '../components/Activity.vue'
    import db from '../assets/db/db.json';

    export default {
        name: "Profile",
        components: {
            Icon, Portfolio, Activity
        },
        data() {
            return {
                skill: [
                    {name: 'Vue.JS', img: 'vue.png'},
                    {name: 'Nuxt.JS', img: 'nuxt.png'},
                    {name: 'Less', img: 'less.png'},
                    {name: 'Scss', img: 'scss.png'},
                    {name: 'TailWind Css', img: 'tailwind.png'},
                    {name: 'BootStrap', img: 'bootstrap.png'}
                ],
                portfolio: db.portfolio,
                activity: db.activity,
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
</style>