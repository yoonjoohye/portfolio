<template>
    <router-link :to="`/detail/${index}`">
        <div class="cursor-pointer relative" @mouseover="onHover()" @mouseout="onOut()">
            <div class="flex justify-center items-center rounded-lg w-full h-68"
                 :class="isHover? 'portfolio-img' : null"
                 :style="`background-color:${color};`">
                <img class="w-auto h-56 sm:h-48" :src="`https://d2ajlnsxcxj87x.cloudfront.net/portfolio/${thumbnail}`"
                     :alt="title"/>
            </div>

            <figcaption
                    class="z-2 w-full h-full rounded-lg top-0 bottom-0 absolute text-white p-8 bg-black-opacity overflow-hidden sm:p-6"
                    :class="isHover? 'bg-black-opacity-dark blur' : ''">
                <div class="font-normal font-white text-2xl sm:text-lg sm:mb-2">{{title}}</div>
                <div class="portfolio-border mb-2" :class="isHover ?'portfolio-border-hover':''"/>
                <div class="flex flex-wrap items-center portfolio-skill" :class="isHover? 'portfolio-skill-hover' : ''">
                    <span class="font-light text-small text-white px-4 py-1 rounded-full border border-white sm:border mr-1 mb-2"
                          v-for="item in skill">{{item}}</span>
                </div>
            </figcaption>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "Portfolio",
        props: {thumbnail: String, color: String, title: String, content: String, skill: Array, index: Number},
        data() {
            return {
                isHover: false,
            }
        },
        methods: {
            open(idx) {
                this.$router.push(`/detail/${idx}`);
            },
            onHover() {
                this.isHover = !this.isHover;
            },
            onOut() {
                this.isHover = !this.isHover;
            }
        }

    }
</script>

<style lang="scss">

</style>