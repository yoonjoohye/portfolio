<template>
    <section class="mb-10">
        <div class="flex flex-row">
            <div class="w-1/2">
                <div class="inline-block text-right text-3xl border-b-4 border-orange-800 text-orange-800 mb-5">
                    Career
                </div>
                <div class="text-center py-5">
                    <div class="mb-5" @click="goComento">
                        <img class="w-full h-12 cursor-pointer" :src="require('../assets/images/logo/comento.svg')"/>
                    </div>
                    <div class="mb-5">
                        <div class="text-2xl font-normal mb-3">회사소개</div>
                        <div>'취업 정보와 기회의 평등'이라는 비전으로 취업 멘토링을 서비스 중인 스타트업</div>
                    </div>
                    <div class="mb-5">
                        <div class="text-2xl font-normal mb-3">재직기간</div>
                        <div>2019.01~2019.08 (8개월)</div>
                    </div>
                    <div class="mb-5">
                        <div class="text-2xl font-normal mb-3">주요업무</div>
                        <li>현장매칭 서비스 개발 및 리팩토링</li>
                        <li>제휴 대학/기관 서비스 개발</li>
                        <li>AI 자기소개서 분석기 리팩토링</li>
                        <li>직무부트캠프 서비스 개발 및 실험</li>
                        <li>BIZ 채용공고 서비스 리팩토링</li>
                    </div>

                </div>
            </div>

            <div class="w-1/2">
                <div class="inline-block text-right text-3xl border-b-4 border-orange-800 text-orange-800 mb-5">
                    Edu
                </div>
                <div class="text-center py-5">
                    <div class="flex justify-center mb-5" @click="goMirim">
                        <img class="h-12 cursor-pointer" :src="require('../assets/images/logo/mirim.png')"/>
                    </div>
                    <div class="mb-5">
                        <div class="text-2xl font-normal mb-3">학교소개</div>
                        <div>웹 개발자 양성 마이스터 고등학교</div>
                    </div>
                    <div class="mb-5">
                        <div class="text-2xl font-normal mb-3">재학기간</div>
                        <div>2016.03~2019.02 (졸업)</div>
                    </div>
                    <div class="mb-5">
                        <div class="text-2xl font-normal mb-3">교육과정</div>
                        <li>1학년 : HTML, CSS, Javascript, Java, C</li>
                        <li>2학년 : PHP, MySQL, JQuery, C++ 운영체제, 자료구조</li>
                        <li>3학년 : Spring, JSP, ASP, C#, Oracle, 정보보호</li>
                    </div>
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
                window.open('https://comento.kr','_blank');
            },
            goMirim: () => {
                window.open('https://www.e-mirim.hs.kr/main.do','_blank');
            }
        }
    }
</script>

<style scoped>

</style>