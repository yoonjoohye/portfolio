<template>
    <section class="bg-gray w-screen p-20 flex flex-col justify-center items-center">
        <div class="flex justify-center">
            <div class="mr-8">
                <img class="profile-img" src="@/assets/images/yoonjoohye.png" alt="윤주혜">
            </div>
            <div>
                <div class="border-b pb-3">
                    <div class="text-2xl font-medium mb-3">윤주혜 <span class="font-normal">(Yoon Joo Hye)</span></div>
                    <div>010-9977-3841</div>
                    <div>besoftyoon@gmail.com</div>
                </div>
                <div class="border-b py-3">
                    <div class="font-normal">미림여자정보과학고등학교(졸업)</div>
                    <div>인터랙티브미디어과</div>
                    <div>2016.03 ~ 2019.02</div>
                </div>
                <div class="border-b py-3">
                    <div class="font-normal">(주)코멘토 (인턴)</div>
                    <div>Front-End 개발</div>
                    <div>2019.01 ~ 2019.08</div>
                </div>
                <div class="w-full py-3">
                    <div class="font-normal mb-2">스킬</div>
                    <Icon v-for="item in skill" :name="item.name" :img="item.img"></Icon>
                </div>
            </div>
        </div>
        <!--포트폴리오-->
        <div class="flex justify-center flex-wrap py-3">
            <Portfolio v-for="(item,index) in portfolio" :thumbnail="item.thumbnail" :title="item.title"
                       :content="item.content"
                       :skill="item.skill" @open="open(index)"></Portfolio>
        </div>

        <Detail v-if="showDetail" @close="showDetail=false">

            <swiper :options="swiperOption" slot="img">
                <swiper-slide v-for="item in portfolio[showDetailIndex].img"><img
                        :src="require(`@/assets/images/portfolio/${item}`)"/></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>

            <template slot="body">
                <div v-for="(item,index) in portfolio" v-if="index===showDetailIndex">
                    <div>{{item.title}}</div>
                    <p>{{item.content}}</p>
                    <div>{{item.date}}</div>
                    <div>{{item.team}}</div>
                    <div><a :href="item.url">{{item.url}}</a></div>
                    <span v-for="skill in item.skill"># {{skill}}</span>
                </div>
            </template>

        </Detail>
    </section>
</template>

<script>
    import Icon from '../components/Icon.vue'
    import Portfolio from '../components/Portfolio.vue'
    import Detail from '../components/Detail.vue';


    export default {
        name: "Profile",
        components: {
            Icon, Portfolio, Detail
        },
        data() {
            return {
                skill: [
                    {name: 'Vue', img: 'vue.png'},
                    {name: 'Less', img: 'less.png'},
                    {name: 'Scss', img: 'scss.png'},
                    {name: 'TailWindCss', img: 'tailwind.png'},
                    {name: 'BootStrap', img: 'bootstrap.png'}
                ],
                portfolio: [
                    {
                        thumbnail: 'matching.png',
                        img: ['matching1.png', 'matching2.png', 'matching4.png', 'matching5.png', 'matching6.png', 'matching7.png', 'matching8.png', 'matching9.png', 'matching10.png', 'matching11.png', 'matching12.png', 'matching13.png', 'matching14.png'],
                        title: '현장매칭',
                        content: '현장매칭은 AI가 구직자가 입력한 정보를 바탕으로 채용박람회에 참여한 기업들을 매칭시켜주는 프로그램입니다.',
                        skill: ['Vue', 'Scss', 'TailWindCss', 'Laravel'],
                        url: 'https://jobfair.comento.kr/leading',
                        team: '2',
                        date: '2019.03 ~ 2019.08',
                    },
                    {
                        thumbnail: 'dashboard.png',
                        img: ['dashboard1.png', 'dashboard2.png', 'dashboard3.png', 'dashboard4.png'],
                        title: '대학/기관 제휴',
                        content: '코멘토의 서비스를 대학과 기관에서 사용할 수 있도록 만든 제품입니다.',
                        skill: ['Vue', 'Less', 'Slim'],
                        link: 'https://comento.info/univ/dashboard',
                        team: '2',
                        date: '2019.07 ~ 2019.08',
                    },
                    {
                        thumbnail: 'ai.png',
                        img: ['ai1.png', 'ai2.png', 'ai3.png', 'ai4.png', 'ai5.png'],
                        title: 'AI 자기소개서 분석기',
                        content: 'AI로 자기소개서를 분석하여 강점과 성향을 알려주는 프로그램입니다.',
                        skill: ['Vue', 'Less', 'Laravel'],
                        url: 'https://comento.kr/analytics/report',
                        team: '2',
                        date: '2019.07 ~ 2019.07',
                    },
                    {
                        thumbnail: 'b2b.png',
                        img: ['b2b1.png', 'b2b2.png'],
                        title: 'B2B 영업용 페이지',
                        content: 'B2B팀의 영업용 페이지입니다.',
                        skill: ['Vue', 'Less', 'Slim'],
                        url: 'https://comento.kr/product/mentoring',
                        team: '2',
                        date: '2019.07 ~ 2019.07',
                    },
                    {
                        thumbnail: 'edu.png',
                        img: ['edu1.png', 'edu2.png', 'edu3.png', 'edu4.png', 'edu5.png', 'edu6.png', 'edu7.png'],
                        title: '직무부트캠프',
                        content: '실무 경험을 하면 취업에 도움이 될것이다는 가설로, 실제 현직자 강의를 들을 수 있는 프로그램입니다.',
                        skill: ['Vue', 'Less', 'Laravel'],
                        link: 'https://comento.kr/edu',
                        team: '2',
                        date: '2019.03 ~ 2019.06',
                    },
                    {
                        thumbnail: 'biz.png',
                        img: ['biz1.png','biz2.png','biz3.png','biz4.png','biz5.png','biz6.png','biz7.png','biz8.png','biz9.png'],
                        title: 'BIZ 리팩토링',
                        content: '코멘토 채용에 올릴 수 있는 회사 담당자가 채용 매칭 서비스를 이용할 수 있도록 제작 된 것입니다.',
                        skill: ['Vue', 'Less', 'Laravel'],
                        link: 'https://biz.comento.kr/',
                        team: '2',
                        date: '2019.01 ~ 2019.02',
                    }
                ],
                showDetail: false,
                showDetailIndex: null,
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
            open(index) {
                this.showDetail = true;
                this.showDetailIndex = index;
            },
        }
    }
</script>

<style lang="scss">
    .swiper-button {
        &-prev, &-next {
            position:fixed!important;
            top: 50%!important;

        }
        &-prev{
            margin-left:30%!important;
        }
        &-next{
            margin-right:30%!important;
        }
    }
    .swiper-pagination{
        position:fixed!important;
        bottom: 0!important;
        margin-bottom: 22%!important;
    }

    .profile-img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        padding: 10px;
        border: 2px solid #02c9da;
    }
</style>