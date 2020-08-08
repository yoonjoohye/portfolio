<template>
    <section class="fixed z-10 py-3 bg-white w-full flex flex-col justify-center items-center shadow-lg">
        <transition name="fade" mode="out-in">
            <div class="w-full flex flex-col justify-center items-center" v-if="show">
                <img class="w-32 h-32 sm:w-12 sm:h-12 rounded-full mb-3"
                     src="https://d2ajlnsxcxj87x.cloudfront.net/yoonjoohye.jpg"/>
                <div class="text-xl sm:text-lg ">YoonJooHye</div>
                <div class="text-xs px-3 py-1 bg-image text-white mb-10">Front-end Developer</div>
            </div>

        </transition>

        <div class="w-full flex justify-around text-3xl font-semibold sm:text-lg">
            <div>
                <span class="cursor-pointer" :class="path!=='/' && 'text-gray-500'" onClick="location.href='/'">Portfolio</span>
            </div>
            <div>
                <span class="cursor-pointer" :class="path!=='/resume' && 'text-gray-500'"
                      onClick="location.href='/resume'">Resume</span>
            </div>
<!--            <div>-->
<!--                        <span class="cursor-pointer" :class="path!=='/contact' && 'text-gray-500'"-->
<!--                              onClick="location.href='/contact'">Contact</span>-->
<!--            </div>-->
        </div>

    </section>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                scrolled: 0,
                show: true,
                path: location.pathname
            }
        },
        created() {
            window.addEventListener('scroll', this.onScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.onScroll);
        },
        methods: {
            onScroll() {
                this.scrolled = window.scrollY;

                if (this.scrolled ===0) {
                    this.show = true;
                } else {
                    this.show = false;
                }

            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: transform .2s, opacity .2s;

    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        transform: translateY(-100px);
        opacity: 0;
    }
</style>