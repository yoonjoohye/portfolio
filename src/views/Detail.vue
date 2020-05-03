<template>
    <section class="w-full flex flex-col justify-center items-center">
        <div class="bg-image w-full h-8 sm:h-4"></div>
        <div class="container">
            <div class="flex flex-row items-center justify-between mb-5">
                <div class="text-5xl font-medium sm:text-2xl">{{portfolio.title}}</div>
                <div class="text-xsmall">
                    <div v-if="portfolio.url!==''">
                        <a class="underline text-gray-700" :href="portfolio.url"
                           target="_blank">{{portfolio.url}}</a>
                    </div>
                    <div class="underline text-gray-700" v-if="portfolio.report">
                        관련기사::
                        <a v-for="report in portfolio.report" :href="report.url" target="_blank">{{report.name}}</a>
                    </div>
                </div>
            </div>
            <div class="mb-3 text-small sm:mb-2">개발 기간 - {{portfolio.date}}</div>
            <div class="mb-10 text-small">개발 인원 - {{portfolio.team}}명 / Front-end 개발 기여도 100%</div>


            <div class="mb-10">
                <div class="border-l-4 border-gray-700 pl-3 text-xl sm:text-lg font-normal mb-3">서비스 소개</div>
                <p class="text-small" v-html="portfolio.content"></p>
            </div>
            <div class="mb-10">
                <div class="border-l-4 border-gray-700 pl-3 text-xl sm:text-lg font-normal mb-3">만든 이유</div>
                <p class="text-small" v-html="portfolio.devReason"></p>
            </div>
            <div class="mb-10">
                <div class="border-l-4 border-gray-700 pl-3 text-xl sm:text-lg font-normal mb-3">어떻게 구현했는가?</div>
                <div class="flex flex-wrap mb-3">
                    <span class="text-sm sm:text-xs border border-gray-700 rounded font-normal px-2 py-1 mr-2 mb-1 sm:mr-1"
                          v-for="skill in portfolio.skill"># {{skill}}</span>
                </div>
                <div class="text-small" v-for="(item,index) in portfolio.devStory">
                    <li>{{item}}</li>
                </div>
            </div>
            <div class="mb-10">
                <div class="border-l-4 border-gray-700 pl-3 text-xl sm:text-lg font-normal mb-3">느낀 점</div>
                <p class="text-small" v-html="portfolio.devReview"></p>
            </div>

            <div>
                <div class="border-l-4 border-gray-700 pl-3 text-xl sm:text-lg font-normal mb-3">스크린샷</div>
                <div class="masonry-detail">
                    <div class="item" v-for="item in portfolio.img">
                        <img class="mb-4 shadow-lg" :src="`https://d2ajlnsxcxj87x.cloudfront.net/portfolio/${item}`">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import db from '../assets/db/db.json';

    export default {
        data() {
            return {
                portfolio: db.portfolio,
            }
        },
        mounted() {
            this.portfolio = this.portfolio[this.$route.params.id];
        },
    }
</script>

<style lang="scss">

</style>