<template>
    <section class="mb-10 w-full sm:mb-8">
        <div class="mb-8">
            <span class="text-3xl border-b-4 border-orange-800 sm:text-xl sm:border-b-2">Edu</span>
        </div>
        <div class="flex items-center justify-center sm:justify-start">
            <div class="border-r border-gray-500 pr-5 mr-5 mb-5" @click="goMirim">
                <img class="w-20 h-20 cursor-pointer sm:h-16 sm:w-16" :src="require('../assets/images/logo/mirim1.png')"/>
            </div>
            <div>
                <div class="text-xl font-normal mb-3 sm:text-base">미림여자정보과학고등학교</div>
                <div class="text-gray-600 font-light sm:text-sm keep-all">인터랙티브미디어과</div>
                <div class="text-gray-600 font-light sm:text-sm keep-all">2016.03~2019.02 (졸업)</div>
            </div>
        </div>
        <!--        <div class="flex flex-col items-center sm:items-start">-->
        <!--            <div class="w-full flex flex-col items-center">-->
        <!--                <div class="mb-5" @click="goMirim">-->
        <!--                    <img class="h-10 cursor-pointer sm:h-6" src="https://d2ajlnsxcxj87x.cloudfront.net/logo/mirim.png"/>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--            <div>-->
        <!--                <div class="mb-5">-->
        <!--                    <div class="text-xl font-normal mb-3 sm:text-base">학교소개</div>-->
        <!--                    <div class="sm:text-sm">웹 개발자 양성 마이스터 고등학교</div>-->
        <!--                </div>-->
        <!--                <div class="mb-5">-->
        <!--                    <div class="text-xl font-normal mb-3 sm:text-base">재학기간</div>-->
        <!--                    <div class="sm:text-sm">2016.03~2019.02 (졸업)</div>-->
        <!--                </div>-->
        <!--                <div class="mb-5">-->
        <!--                    <div class="text-xl font-normal mb-3 sm:text-base">교육과정</div>-->
        <!--                    <li class="sm:text-sm"> 1학년 : C, Java, HTML, CSS, Javascript</li>-->
        <!--                    <li class="sm:text-sm">2학년 : C++, JQuery, PHP, MySQL, 운영체제, 자료구조</li>-->
        <!--                    <li class="sm:text-sm">3학년 : C# JSP, Spring, ASP.NET, MS-SQL, Oracle, 정보보호</li>-->
        <!--                </div>-->
        <!--            </div>-->
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