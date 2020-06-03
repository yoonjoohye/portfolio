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
                <div class="text-xl font-normal mb-3 sm:text-base sm:mb-2">(주)코멘토</div>
                <div class="text-gray-600 font-light sm:text-sm keep-all">Front-end 개발 (인턴)</div>
                <div class="text-gray-600 font-light sm:text-sm keep-all">2019.01~2019.08 (8개월)</div>
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