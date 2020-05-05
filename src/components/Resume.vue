<template>
    <div class="z-10 fixed bottom-10 right-10">
        <div v-for="item in info" class="relative mb-5 btn-resume rounded  py-2 px-3" :class="item.color">
            <a class="flex justify-center items-center"
               :href="item.url"
               target="_blank">
                <div class="w-full text-center text-small text-white mr-2">{{item.title}}</div>
                <img class="inline h-5 mr-1" src="https://d2ajlnsxcxj87x.cloudfront.net/logo/arrow.svg"
                     alt="화살표 이미지">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Resume",
        data(){
            return{
                info:[
                    {
                        title: '깃허브 보러가기',
                        url: 'https://github.com/yoonjoohye',
                        color:'bg-red-500'
                    },
                    {
                        title: '개발 블로그 보러가기',
                        url: 'https://medium.com/@besoftyoon',
                        color:'bg-orange-500'
                    }
                ]
            }
        }

    }
</script>

<style scoped>

</style>