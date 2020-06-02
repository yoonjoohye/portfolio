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

    .circular-menu {
        position: fixed;
        bottom: 1em;
        right: 1em;
    }

    .circular-menu:after {
        display: block;
        content: ' ';
        width: 3.5em;
        height: 3.5em;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -2;
        box-shadow:0 0 10px rgba(0, 0, 0, 0.13);
        background: rgba(255, 255, 255, 0.90);
        /*background:linear-gradient(to right, #55d8ff, #ffda3b);*/
        transition: all .3s ease;
    }

    .circular-menu.active:after {
        transform: scale3d(5.5, 5.5, 1);
        transition-timing-function: cubic-bezier(.68, 1.55, .265, 1);
    }

    .menu-item {
        position: absolute;
        top: .2em;
        right: .2em;
        z-index: -1;
        display: block;
        text-decoration: none;
        color: hsl(0, 0%, 100%);
        font-size: 1em;
        width: 3em;
        height: 3em;
        border-radius: 50%;
        text-align: center;
        line-height: 3;
        background-color: rgba(0, 0, 0, 0.70);
        transition: transform .3s ease-in-out, background .2s ease-in-out;
    }

    .circular-menu .menu-item:hover {
        background-color: rgba(0, 0, 0, 0.80);
    }

    .circular-menu.active .menu-item {
        transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);;
    }

    .circular-menu.active .menu-item:nth-child(1) {
        transform: translate3d(-0.5em, -7em, 0);
    }

    .circular-menu.active .menu-item:nth-child(2) {
        transform: translate3d(-4.8em, -5em, 0);
    }

    .circular-menu.active .menu-item:nth-child(3) {
        transform: translate3d(-7em, -0.5em, 0);
    }

    .floating-btn {
        display: block;
        width: 3.5em;
        height: 3.5em;
        border-radius: 50%;
        background-color: black;
        box-shadow: 0 10px 10px 0 hsla(0, 0%, 0%, .26);
        color: white;
        text-align: center;
        line-height: 3.9;
        cursor: pointer;
        outline: 0;
    }
</style>