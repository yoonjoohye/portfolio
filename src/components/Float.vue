<template>
    <div class="circular-menu z-10" :class="isOpen? 'active' : ''">
        <a v-show="isOpen" v-for="item in info" class="menu-item p-3" :class="item.color"
           :href="item.url"
           target="_blank">
            <img class="w-full" :src="`https://d2ajlnsxcxj87x.cloudfront.net/logo/${item.img}`">
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
            if (screen.width <= 480) {
                this.isOpen = false;
            }
        },
        data() {
            return {
                isOpen: true,
                info: [
                    {
                        title: '개발 블로그',
                        url: 'https://medium.com/@besoftyoon',
                        img: 'medium.svg',
                        color: 'bg-yellow-500'
                    },
                    {
                        title: '깃허브',
                        url: 'https://github.com/yoonjoohye',
                        img: 'github.svg',
                        color: 'bg-orange-500'
                    },
                    {
                        title: '이력서',
                        url: 'https://drive.google.com/drive/folders/1kGlwKXYWo4R4-TAou7fAHpNHTIX6Gy9n',
                        img: 'resume.svg',
                        color: 'bg-red-500'
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