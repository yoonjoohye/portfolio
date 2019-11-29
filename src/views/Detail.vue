<template>
    <div class="w-full flex justify-center items-center">
        <div class="container detail">
            <div class="masonry-detail">
                <div class="item" v-for="item in portfolio.img">
                    <img class="mb-4 shadow-lg" :src="`https://gkofsflkibbo3126162.cdn.ntruss.com/portfolio/${item}`">
                </div>
            </div>
        </div>
        <div class="bg-black-85 py-5 text-white fixed bottom-0 w-full flex justify-center items-center">
            <div class="detail-box">
                <div class="flex flex-row-m justify-between mb-3">
                    <div class="flex flex-row-m">
                        <div class="text-lg font-medium mr-2">{{portfolio.title}}</div>
                        <div class="mb-1">
                            <a class="text-sm underline text-green-400" :href="portfolio.url"
                               target="_blank">{{portfolio.url}}</a>
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                            <span class="text-xsmall font-normal border px-2 py-1 mr-1 mb-1"
                                  v-for="skill in portfolio.skill"># {{skill}}</span>
                    </div>
                </div>
                <p class="text-small mb-3" v-html="portfolio.content"></p>

                <div class="text-xsmall underline text-gray-400" v-if="portfolio.report">
                    관련기사::
                    <a v-for="report in portfolio.report" :href="report.url" target="_blank">{{report.name}}</a>
                </div>
            </div>
        </div>
    </div>
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