<template>
    <div class="relative cursor-pointer" @mouseover="onHover" @mouseout="onOut">
        <div class="flex justify-center items-center rounded-lg w-full h-68" :style="`background-color:${color};`">
            <img class="w-auto h-56 sm:h-40" :src="`https://d2ajlnsxcxj87x.cloudfront.net/portfolio/${thumbnail}`"
                 :alt="title"/>
        </div>
        <figcaption class="z-2 w-full h-full rounded-lg top-0 bottom-0 absolute text-white p-8 overflow-hidden bg-black-opacity sm:p-6" :class="isHover? 'bg-black-opacity-dark' : ''">
            <div class="text-xsmall font-light keep-all ">{{date}}</div>
            <div class="font-normal font-white text-2xl mb-2 sm:mb-1 sm:text-lg" :class="isHover? 'border-b-2 border-white' : ''">
                {{title}}
            </div>
            <div class="flex flex-wrap items-center portfolio-skill" :class="isHover? 'portfolio-skill-hover':''">
                <div class="text-small keep-all">{{contents}}</div>
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