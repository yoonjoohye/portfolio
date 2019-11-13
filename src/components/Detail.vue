<template>
    <transition name="modal">
        <div class="flex justify-center items-center modal-mask" @click="close($event)">
            <div class="flex justify-center modal-container">
                <div class="modal-img">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="item in portfolio[showDetailIndex].img">
                            <img :src="require(`@/assets/images/portfolio/${item}`)"/>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>

                <div class="modal-body">
                    <div v-for="(item,index) in portfolio" v-if="index===showDetailIndex">
                        <div class="text-lg font-medium">{{item.title}}</div>
                        <div><a class="text-sm underline text-blue-600" :href="item.url"
                                target="_blank">{{item.url}}</a></div>

                        <div class="text-sm">{{item.date}}</div>
                        <!--                            <div>{{item.team}}명</div>-->
                        <div class="flex flex-wrap mb-2">
                            <span class="text-xs font-normal rounded bg-gray-200 px-2 py-1 mb-1 mr-1"
                                  v-for="skill in item.skill"># {{skill}}</span>
                        </div>
                        <p class="">{{item.content}}</p>
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
        methods:{
            close(event){
                this.$emit('close',event);
            },
        }
    }
</script>

<style lang="scss">

</style>