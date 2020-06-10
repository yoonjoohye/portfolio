<template>
    <section class="mb-10 w-full sm:mb-8">
        <div class="mb-8">
            <span class="text-3xl border-b-4 border-orange-800 sm:text-xl sm:border-b-2">Edu</span>
        </div>
        <div class="flex items-center justify-center sm:justify-start">
            <div class="border-r border-gray-500 pr-5 mr-5 mb-5" @click="goMirim">
                <img class="w-20 h-20 cursor-pointer sm:h-16 sm:w-16" src="https://d2ajlnsxcxj87x.cloudfront.net/logo/mirim.png"/>
            </div>
            <div>
                <div class="text-lg font-medium sm:text-base mb-2">미림여자정보과학고등학교</div>
                <div class="text-gray-600 font-light sm:text-sm keep-all">인터랙티브미디어과</div>
                <div class="text-gray-600 font-light sm:text-sm keep-all">2016.03~2019.02 (졸업)</div>
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