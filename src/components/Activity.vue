<template>
    <div class="relative" @mouseover="onHover" @mouseout="onOut">
        <div class="flex justify-center items-center rounded-lg w-full h-68" :class="isHover? 'portfolio-img' : null" :style="`background-color:${color};`">
            <img class="w-auto h-56" :src="`https://d2ajlnsxcxj87x.cloudfront.net/portfolio/${thumbnail}`"
                 :alt="title"/>
        </div>
        <figcaption class="z-2 w-full h-full rounded-lg top-0 bottom-0 absolute text-white p-8 overflow-hidden bg-black-opacity sm:p-6" :class="isHover? 'bg-black-opacity-dark blur' : ''">
            <div class="text-xsmall font-light keep-all ">{{date}}</div>
            <div class="font-medium font-white text-2xl sm:text-lg sm:mb-2">{{title}}</div>
            <div class="portfolio-border mb-2" :class="isHover ?'portfolio-border-hover':''"/>

            <div class="flex flex-wrap items-center portfolio-skill" :class="isHover? 'portfolio-skill-hover':''">
                <div class="font-light text-sm keep-all">{{contents}}</div>
            </div>
        </figcaption>
    </div>
</template>

<script>
    export default {
        name: "Activity",
        props: {color: String, date: String, thumbnail: String, title: String, type: String, contents: String},
        data(){
            return{
                isHover:false
            }
        },
        methods:{
            onHover(){
                this.isHover = !this.isHover;
            },
            onOut(){
                this.isHover = !this.isHover;
            }
        }

    }
</script>

<style lang="scss">

</style>