<template>
    <section class="w-full flex flex-col justify-center items-center">
        <div class="bg-image w-full h-8 sm:h-4"></div>
        <div class="container">
            <div class="text-center text-5xl font-medium sm:text-2xl">{{portfolio.title}}</div>
            <div class="mb-5 sm:mb-3 text-small text-center">
                <div v-if="portfolio.url!==''">
                    <a class="underline text-gray-700 hover:text-gray-600" :href="portfolio.url"
                       target="_blank">{{portfolio.url}}</a>
                </div>
                <div v-if="portfolio.github!==''">
                    <a class="underline text-gray-700 hover:text-gray-600" :href="portfolio.github"
                       target="_blank">{{portfolio.github}}</a>
                </div>
                <div class="underline text-gray-700 hover:text-gray-600" v-if="portfolio.report">
                    관련기사::
                    <a v-for="report in portfolio.report" :href="report.url" target="_blank">{{report.name}}</a>
                </div>
            </div>
            <div class="text-small">개발 기간 - {{portfolio.date}}</div>
            <div class="mb-10 sm:mb-5 text-small">개발 인원 - {{portfolio.team}}명 / Front-end 개발 기여도 100%</div>


            <div class="mb-10 sm:mb-5">
                <div class="border-l-4 border-gray-700 pl-3 text-xl sm:text-lg font-normal mb-3">서비스 소개</div>
                <p class="text-small" v-html="portfolio.content"></p>
            </div>
            <div class="mb-10 sm:mb-5">
                <div class="border-l-4 border-gray-700 pl-3 text-xl sm:text-lg font-normal mb-3">만든 이유</div>
                <p class="text-small" v-html="portfolio.devReason"></p>
            </div>
            <div class="mb-10 sm:mb-5" v-if="portfolio.service">
                <div class="border-l-4 border-gray-700 pl-3 text-xl sm:text-lg font-normal mb-3">서비스 기능</div>
                <div class="mb-2 sm:mb-1" v-for="(item,data) in portfolio.service">
                    <div class="font-medium mb-2 sm:mb-1 text-lg sm:text-base">{{item.title}}</div>
                    <div class="flex text-small mb-1" v-for="content in item.contents">
                        <li/>
                        <div class="keep-all">{{content}}</div>
                    </div>
                </div>
            </div>
            <div class="mb-10 sm:mb-5">
                <div class="border-l-4 border-gray-700 pl-3 text-xl sm:text-lg font-normal mb-3">어떻게 만들었는가?</div>
                <div class="flex flex-wrap mb-3">
                    <span class="text-sm sm:text-xs border border-gray-700 rounded font-normal px-2 py-1 mr-2 mb-1 sm:mr-1"
                          v-for="skill in portfolio.skill"># {{skill}}</span>
                </div>

                <div class="flex text-small mb-2 sm:mb-1" v-for="(item,index) in portfolio.devStory">
                    <li/>
                    <div class="keep-all">{{item}}</div>
                </div>
            </div>

            <div>
                <div class="border-l-4 border-gray-700 pl-3 text-xl sm:text-lg font-normal mb-3">스크린샷</div>
                <div class="masonry-detail">
                    <div class="item cursor-pointer" v-for="item in portfolio.img" @click="view(item)">
                        <img class="mb-4 shadow-lg rounded-lg"
                             :src="`https://d2ajlnsxcxj87x.cloudfront.net/portfolio/${item}`">
                    </div>
                </div>
            </div>
        </div>

        <Modal v-if="showModal" :imgSrc="imgSrc" @close="close"/>
    </section>
</template>

<script>
    import db from '../assets/db/db.json';
    import Modal from '../components/Modal.vue';

    export default {
        components: {
            Modal
        },
        data() {
            return {
                portfolio: db.portfolio,
                showModal: false,
                imgSrc: ''
            }
        },
        mounted() {
            this.portfolio = this.portfolio[this.$route.params.id];
        },
        methods: {
            view(img) {
                document.body.className = 'overflow-hidden';
                this.showModal = true;
                this.imgSrc = img;
            },
            close() {
                document.body.className = 'overflow-auto';
                this.showModal = false;
            }
        }
    }
</script>

<style lang="scss">

</style>