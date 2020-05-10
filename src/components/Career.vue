<template>
    <section class="mb-10 w-full sm:mb-5">
        <div class="mb-8">
            <span class="text-3xl border-b-4 border-orange-800 sm:text-xl sm:border-b-2">Career</span>
        </div>
        <div class="flex flex-col items-center">
            <div class="mb-5" @click="goComento">
                <img class="h-10 cursor-pointer sm:h-6" src="https://d2ajlnsxcxj87x.cloudfront.net/logo/comento.svg"/>
            </div>
            <div class="">
                <div class="mb-5">
                    <div class="text-xl font-normal mb-3 sm:text-base">회사소개</div>
                    <div class="sm:text-sm keep-all">'취업 정보와 기회의 평등'이라는 비전으로 취업 멘토링을 서비스 중인 스타트업</div>
                </div>
                <div class="mb-5">
                    <div class="text-xl font-normal mb-3 sm:text-base">재직기간</div>
                    <div class="sm:text-sm">2019.01~2019.08 (8개월)</div>
                </div>
                <div class="mb-5">
                    <div class="text-xl font-normal mb-3 sm:text-base">주요업무</div>
                    <li class="sm:text-sm cursor-pointer underline" @click="goDetail(3)">현장매칭 서비스 개발 및 리팩토링 ></li>
                    <li class="sm:text-sm cursor-pointer underline" @click="goDetail(4)">대학/기관 제휴 서비스 개발 ></li>
                    <li class="sm:text-sm cursor-pointer underline" @click="goDetail(5)">AI 자기소개서 분석기 리팩토링 ></li>
                    <li class="sm:text-sm cursor-pointer underline" @click="goDetail(7)">직무부트캠프 서비스 개발 및 실험 ></li>
                    <li class="sm:text-sm cursor-pointer underline" @click="goDetail(8)">BIZ 채용공고 서비스 리팩토링 ></li>
                </div>
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