<template>
    <div class="p-10 pb-40 bg-gray w-full flex flex-col justify-center items-center">
        <div class="masonry-detail">
            <div class="item" v-for="item in portfolio.img">
                <img class="mb-4 shadow-lg" :src="require(`../assets/images/portfolio/${item}`)">
            </div>
        </div>
        <div class="bg-black-85 py-5 text-white fixed bottom-0 w-full flex justify-center items-center">
            <div class="w-1/2">
                <div class="flex justify-between mb-5">
                    <div class="flex flex-row">
                        <div class="text-lg font-medium mr-2">{{portfolio.title}}</div>
                        <div>
                            <a class="text-sm underline text-green-400" :href="portfolio.url"
                                target="_blank">{{portfolio.url}}</a>
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <span class="text-xs font-normal border px-2 py-1 mr-1"
                              v-for="skill in portfolio.skill"># {{skill}}</span>
                    </div>
                </div>
                <p class="">{{portfolio.content}}</p>
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