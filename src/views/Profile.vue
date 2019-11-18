<template>
    <section class="padding bg-gray w-screen flex flex-col justify-center items-center">
        <div class="flex flex-row-m justify-center">
<!--            <img class="profile-img only-pc" src="@/assets/images/yoonjoohye.png" alt="윤주혜">-->
            <div class="flex flex-col justify-center">
                <div class="flex flex-row text-2xl font-medium">
                    윤주혜 <span class="font-normal mr-3">(Yoon Joo Hye)</span>
                    <a class="btn-resume flex justify-center items-center text-red-600 font-normal text-base border border-red-600 rounded px-3 py-1"
                       href="https://drive.google.com/drive/folders/1kGlwKXYWo4R4-TAou7fAHpNHTIX6Gy9n?usp=sharing"
                       target="_blank">
                        <img class="inline h-5 mr-1" src="@/assets/images/logo/pdf.svg" alt="pdf">이력서
                    </a>
                </div>

                <div class="border-b py-3">
                    <div class="font-normal">(주)코멘토</div>
                    <div>Front-End Intern</div>
                    <div>2019.01 ~ 2019.08 (9개월)</div>
                </div>
                <div class="border-b py-3">
                    <div class="font-normal">미림여자정보과학고등학교(졸업)</div>
                    <div>인터랙티브미디어과</div>
                    <div>2016.03 ~ 2019.02</div>
                </div>
                <div class="py-3">
<!--                    <div class="font-normal mb-2">스킬</div>-->
                    <Icon v-for="item in skill" :name="item.name" :img="item.img"></Icon>
                </div>
            </div>
        </div>

        <!--포트폴리오-->
        <div class="flex justify-center flex-wrap py-5">
            <Portfolio v-for="(item,index) in portfolio" :thumbnail="item.thumbnail" :title="item.title"
                       :content="item.content"
                       :skill="item.skill" :index="index"></Portfolio>
        </div>

        <!--활동-->
        <div class="masonry py-3">
            <Activity v-for="(item,index) in activity" :thumbnail="item.thumbnail" :title="item.title"></Activity>
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
                    {name: 'Vue', img: 'vue.png'},
                    {name: 'Less', img: 'less.png'},
                    {name: 'Scss', img: 'scss.png'},
                    {name: 'TailWindCss', img: 'tailwind.png'},
                    {name: 'BootStrap', img: 'bootstrap.png'}
                ],
                portfolio:db.portfolio,
                activity:db.activity,
            }
        },
        methods:{

        }
    }
</script>

<style lang="scss">
</style>