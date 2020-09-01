<template>
    <section class="fixed z-10 bg-white w-full flex flex-col justify-center items-center shadow-lg"
             :class="show? 'down' :'up' ">
        <div class="w-full h-56 sm:h-32 flex flex-col justify-center items-center">
            <img class="w-32 h-32 sm:w-16 sm:h-16 rounded-full mb-3 sm:mb-1"
                 src="https://d2ajlnsxcxj87x.cloudfront.net/yoonjoohye.jpg"/>
            <div class="text-2xl font-bold sm:text-lg ">윤주혜</div>
            <div class="text-xsmall rounded px-3 py-1 bg-image text-white">Front-end Developer</div>
        </div>
        <div class="w-full py-3 flex justify-around text-3xl font-semibold sm:text-lg">
            <router-link to="/">
                <span class="cursor-pointer" :class="!(currentPage==='/' || currentPage.includes('/detail')) && 'text-gray-500'">Portfolio</span>
            </router-link>
            <router-link to="/resume" >
                <span class="cursor-pointer" :class="!currentPage.includes('/resume') && 'text-gray-500'">Resume</span>
            </router-link>
            <router-link to="/contact">
                <span class="cursor-pointer" :class="!currentPage.includes('/contact') && 'text-gray-500'">Contact</span>
            </router-link>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                scrolled: 0,
                show: true
            }
        },
        created() {
            window.addEventListener('scroll', this.onScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.onScroll);
        },
        computed:{
            currentPage(){
                return this.$route.path;
            }
        },
        methods: {
            onScroll() {
                this.scrolled = window.scrollY;

                if (this.scrolled < 30) {
                    this.show = true;
                } else {
                    this.show = false;
                }

            }
        }
    }
</script>

<style scoped>

</style>