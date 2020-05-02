<template>
    <section class="w-full flex flex-col justify-center items-center">
        <div class="container">
            <div class="text-5xl font-medium mb-5">{{portfolio.title}}</div>
            <div class="mb-5" v-if="portfolio.url!==''">
                <a class="underline text-gray-700" :href="portfolio.url"
                   target="_blank">{{portfolio.url}}</a>
            </div>
            <div class="text-xsmall underline text-gray-400 mb-5" v-if="portfolio.report">
                관련기사::
                <a v-for="report in portfolio.report" :href="report.url" target="_blank">{{report.name}}</a>
            </div>

            <div class="mb-5">개발 인원 {{portfolio.team}}명</div>
            <div class="mb-5">Front-end 기여도 100%</div>
            <div class="border-l-4 border-gray-700 flex flex-wrap mb-5">
                <span class="font-normal px-2 py-1 mr-1 mb-1" v-for="skill in portfolio.skill"># {{skill}}</span>
            </div>


            <div class="mb-5">
                <div class="text-xl font-normal">서비스 소개</div>
                <p class="text-small" v-html="portfolio.content"></p>
            </div>
            <div class="mb-5">
                <div class="text-xl font-normal">만든 이유는?</div>
                <p class="text-small" v-html="portfolio.devReason"></p>
            </div>
            <div class="mb-5">
                <div class="text-xl font-normal">어떻게 구현했는지?</div>
                <p class="text-small" v-html="portfolio.devStory"></p>
            </div>
            <div class="mb-5">
                <div class="text-xl font-normal">깨달은 점은?</div>
                <p class="text-small" v-html="portfolio.devReview"></p>
            </div>

            <!--스크린샷-->
            <div class="masonry-detail">
                <div class="item" v-for="item in portfolio.img">
                    <img class="mb-4 shadow-lg" :src="`https://d2ajlnsxcxj87x.cloudfront.net/portfolio/${item}`">
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