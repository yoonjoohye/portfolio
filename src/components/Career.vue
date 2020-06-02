<template>
    <section class="mb-10 w-full sm:mb-8 mr-10 sm:mr-0">
        <div class="mb-8">
            <span class="text-3xl border-b-4 border-orange-800 sm:text-xl sm:border-b-2">Career</span>
        </div>
        <div class="flex items-center justify-center sm:justify-start">
            <div class="border-r border-gray-500 pr-5 mr-5 mb-5" @click="goComento">
                <img class="w-20 h-20 cursor-pointer sm:h-16 sm:w-16" :src="require('../assets/images/logo/comento.png')"/>
            </div>
            <div>
                <div class="text-xl font-normal mb-3 sm:text-base">(주)코멘토</div>
                <div class="text-gray-600 font-light sm:text-sm keep-all">Front-end 개발 (인턴)</div>
                <div class="text-gray-600 font-light sm:text-sm keep-all">2019.01~2019.08 (8개월)</div>
<!--                <div>-->
<!--                    <li class="sm:text-sm cursor-pointer hover:text-green-500" @click="goDetail(3)">현장매칭 서비스 개발 및 리팩토링 ></li>-->
<!--                    <li class="sm:text-sm cursor-pointer hover:text-green-500" @click="goDetail(4)">대학/기관 제휴 서비스 개발 ></li>-->
<!--                    <li class="sm:text-sm cursor-pointer hover:text-green-500" @click="goDetail(5)">AI 자기소개서 분석기 리팩토링 ></li>-->
<!--                    <li class="sm:text-sm cursor-pointer hover:text-green-500" @click="goDetail(7)">직무부트캠프 서비스 개발 및 실험 ></li>-->
<!--                    <li class="sm:text-sm cursor-pointer hover:text-green-500" @click="goDetail(8)">BIZ 채용공고 서비스 리팩토링 ></li>-->
<!--                </div>-->
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        name: "About",
        methods: {
            goComento: () => {
                window.open('https://comento.kr', '_blank');
            },
            goDetail:(idx)=>{
                location.href=`/detail/${idx}`;

            }
        }
    }
</script>

<style scoped>

</style>