<template>
    <section class="mb-10 w-full sm:mb-8 mr-10 sm:mr-0">
        <div class="mb-8">
            <span class="text-3xl font-semibold border-l-6 pl-3 border-orange-800 sm:text-xl sm:border-l-4">Career</span>
        </div>
        <div class="flex items-center justify-center sm:justify-start">
            <div class=" pr-5 mr-5 mb-5" @click="goComento">
                <img class="w-20 h-20 cursor-pointer sm:h-16 sm:w-16" src="https://d2ajlnsxcxj87x.cloudfront.net/logo/comento.png"/>
            </div>
            <div>
                <div class="text-lg font-semibold mb-2 sm:text-base">(주)코멘토</div>
                <div class="text-gray-700 font-normal sm:text-sm keep-all">프론트엔드 개발 (인턴)</div>
                <div class="text-gray-700 font-normal sm:text-sm keep-all">2019.01~2019.08 (8개월)</div>
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
            }
        }
    }
</script>

<style scoped>

</style>