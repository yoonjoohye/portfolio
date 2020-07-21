<template>
    <div class="circular-menu z-10" :class="isOpen? 'active' : ''">
        <a v-show="isOpen" v-for="(item,index) in info" class="menu-item flex flex-col justify-center items-center p-3" :class="item.color" :href="item.url"
           :target="item.target">
            <img class="w-5 h-5" :src="`https://d2ajlnsxcxj87x.cloudfront.net/logo/${item.img}`">
            <span class="text-white text-xxs h-full mt-1 only-pc">{{item.title}}</span>
        </a>

        <button class="floating-btn" @click="isOpen=!isOpen">
            ?
        </button>

    </div>
</template>

<script>
    export default {
        name: "Float",
        mounted() {
            if (screen.width <= 480 || location.pathname==='/resume') {
                this.isOpen = false;
            }

            if(location.pathname==='/resume'){
                this.info.push(
                    {
                        title: '포폴',
                        url: '/',
                        img: 'resume.svg',
                        target:'_self'

                    }
                );
            }else{
                this.info.push(
                    {
                        title: '이력서',
                        url: '/resume',
                        img: 'resume.svg',
                        target:'_self'

                    }
                );
            }
        },
        data() {
            return {
                isOpen: true,
                isHover: false,
                info: [
                    {
                        title: '블로그',
                        url: 'https://medium.com/@besoftyoon',
                        img: 'medium.svg',
                        target:'_blank'
                    },
                    {
                        title: '깃허브',
                        url: 'https://github.com/yoonjoohye',
                        img: 'github.svg',
                        target:'_blank'
                    }
                ]
            }
        },
        methods: {
            open: () => {

            }
        }

    }
</script>

<style scoped>
</style>