<template>
    <transition name="modal">
        <div class="flex justify-center items-center modal-mask">
            <div class="flex justify-center modal-container">
                <div class="modal-wrapper">
                    <swiper :options="swiperOption">
                    <swiper-slide v-for="item in portfolio[showDetailIndex].img">
                        <img :src="require(`@/assets/images/portfolio/${item}`)"/>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
                <div class="w-1/4">
                    <div class="modal-body">
                        <div v-for="(item,index) in portfolio" v-if="index===showDetailIndex">
                            <div class="text-lg font-normal">{{item.title}}</div>
                            <div class="">{{item.date}}</div>
                            <div>{{item.team}}</div>
                            <span v-for="skill in item.skill"># {{skill}}</span>
                            <p class="">{{item.content}}</p>
                            <div><a class="text-blue-600" :href="item.url">{{item.url}}</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Detail",
        props: {portfolio: Array, showDetailIndex: Number},
        data() {
            return {
                swiperOption: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: false,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
        methods: {
            close() {
                // console.log('sdfsdf');
                this.$emit('close');
            }
        }
    }
</script>

<style lang="scss">

</style>