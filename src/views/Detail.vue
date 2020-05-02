<template>
    <section class="w-full flex flex-col justify-center items-center">
        <div class="container">
            <div class="">
                <div class="text-5xl font-medium mb-5">{{portfolio.title}}</div>
                <div class="mb-5" v-if="portfolio.url!==''">
                    <a class="text-sm underline text-gray-700" :href="portfolio.url"
                       target="_blank">{{portfolio.url}}</a>
                </div>
                <div class="border-l-4 border-gray-700 flex flex-wrap mb-5">
                            <span class="font-normal  px-2 py-1 mr-1 mb-1"
                                  v-for="skill in portfolio.skill"># {{skill}}</span>
                </div>
            </div>
            <div class="mb-5">(프론트엔드 개발 기여도 100%)</div>
            <p class="text-small mb-5" v-html="portfolio.content"></p>

            <div class="text-xsmall underline text-gray-400 mb-5" v-if="portfolio.report">
                관련기사::
                <a v-for="report in portfolio.report" :href="report.url" target="_blank">{{report.name}}</a>
            </div>

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