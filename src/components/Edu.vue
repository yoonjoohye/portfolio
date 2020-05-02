<template>
    <section class="mb-10 w-full sm:mb-5">
        <div class="mb-8">
            <span class="text-3xl border-b-4 border-orange-800 sm:text-xl">Edu</span>
        </div>
        <div>
            <div class="mb-5" @click="goMirim">
                <img class="h-10 cursor-pointer sm:h-6 md:h-8" :src="require('../assets/images/logo/mirim.png')"/>
            </div>
            <div class="md:text-left">
                <div class="mb-5">
                    <div class="text-xl font-normal mb-3 sm:text-base">학교소개</div>
                    <div class="sm:text-sm">웹 개발자 양성 마이스터 고등학교</div>
                </div>
                <div class="mb-5">
                    <div class="text-xl font-normal mb-3 sm:text-base">재학기간</div>
                    <div class="sm:text-sm">2016.03~2019.02 (졸업)</div>
                </div>
                <div class="mb-5">
                    <div class="text-xl font-normal mb-3 sm:text-base">교육과정</div>
                    <li class="sm:text-sm">1학년 : HTML, CSS, Javascript, Java, C</li>
                    <li class="sm:text-sm">2학년 : PHP, MySQL, JQuery, C++ 운영체제, 자료구조</li>
                    <li class="sm:text-sm">3학년 : Spring, JSP, ASP, C#, Oracle, 정보보호</li>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Edu",
        methods: {
            goMirim: () => {
                window.open('https://www.e-mirim.hs.kr/main.do', '_blank');
            }
        }
    }
</script>

<style scoped>

</style>