<template>
    <div class="cursor-pointer relative" @mouseover="onHover()" @mouseout="onOut()" @click="open(index)">
                <div class="flex justify-center items-center rounded-lg w-full h-68" :class="isHover? 'portfolio-img' : null" :style="`background-color:${color};`">
                    <img class="w-auto h-56" :src="`https://d2ajlnsxcxj87x.cloudfront.net/portfolio/${thumbnail}`" :alt="title"/>
                </div>
                <figcaption class="z-2 w-full h-full rounded-lg top-0 bottom-0 absolute text-white p-8 bg-black-opacity overflow-hidden" :class="isHover? 'bg-black-opacity-dark' : ''">
                    <div class="font-normal font-white text-2xl mb-2 sm:text-base" :class="isHover? 'portfolio-title' : ''">{{title}}</div>
<!--                    <p class="text-sm ellipsis mb-5 sm:text-xs" v-html="content"></p>-->
                    <div class="flex flex-wrap items-center portfolio-skill" :class="isHover? 'portfolio-skill-hover' : ''">
                        <span class="font-medium text-small text-white px-2 rounded-full border-2 border-white sm:border mr-1 mb-1 "
                              v-for="item in skill"># {{item}}</span>
                    </div>
                </figcaption>


<!--        <figure class="relative w-full h-full">-->
<!--            <div class="absolute z-1 bg-gradient rounded-lg p-3 h-32">-->
<!--                <div class="font-semibold text-white text-xl mb-2 sm:text-base border-b border-white">{{title}}</div>-->
<!--                <p class="hidden text-white text-sm ellipsis sm:text-xs" v-html="content"></p>-->
<!--            </div>-->
<!--            <img class="relative z-2 w-full h-68 shadow-top rounded" :src="`https://d2ajlnsxcxj87x.cloudfront.net/portfolio/${thumbnail}`" :alt="title">-->
<!--        </figure>-->

        <!--        <figure class="relative overflow-hidden w-100 h-100">-->
        <!--            <img class="w-full h-68" :src="`https://d2ajlnsxcxj87x.cloudfront.net/portfolio/${thumbnail}`"-->
        <!--                 :alt="title">-->
        <!--            <figcaption class="absolute w-100 h-100 z-1 bg-black-opacity top-0 bottom-0 ">-->
        <!--                <span class="text-white text-3xl px-2 font-normal text-white mb-1 only-pc">{{title}}</span>-->
        <!--                <div class="text-white mb-5">{{content}}</div>-->
        <!--            </figcaption>-->
        <!--        </figure>-->
    </div>
</template>

<script>
    export default {
        name: "Portfolio",
        props: {thumbnail: String, color:String, title: String, content: String, skill: Array, index: Number},
        data(){
            return{
                isHover:false,
            }
        },
        methods: {
            open(idx) {
                this.$router.push(`/detail/${idx}`);
            },
            onHover(){
                this.isHover=!this.isHover;
            },
            onOut(){
                this.isHover=!this.isHover;
            }
        }

    }
</script>

<style lang="scss">

</style>