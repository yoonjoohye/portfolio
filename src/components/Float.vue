<template>
    <div class="z-10 fixed bottom-10 right-10">
        <div v-for="item in info" class="relative mb-5 btn-resume rounded  py-2 px-3 sm:mb-3" :class="item.color">
            <a class="flex justify-center items-center"
               :href="item.url"
               target="_blank">
                <div class="w-full flex flex-row items-center text-small text-white mr-3">
                    <img class="w-5 mr-3 sm:w-3" :src="`https://d2ajlnsxcxj87x.cloudfront.net/logo/${item.img}`">
                    {{item.title}}
                </div>
                <img class="inline h-5 mr-1 sm:h-3" src="https://d2ajlnsxcxj87x.cloudfront.net/logo/arrow.svg"
                     alt="화살표 이미지">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Float",
        data(){
            return{
                info:[
                    {
                        title: '이력서 보러가기',
                        url: 'https://drive.google.com/drive/folders/1kGlwKXYWo4R4-TAou7fAHpNHTIX6Gy9n',
                        img:'resume.svg',
                        color:'bg-red-500'
                    },
                    {
                        title: '깃허브 보러가기',
                        url: 'https://github.com/yoonjoohye',
                        img:'github.svg',
                        color:'bg-orange-500'
                    },
                    {
                        title: '개발 블로그 보러가기',
                        url: 'https://medium.com/@besoftyoon',
                        img:'medium.svg',
                        color:'bg-yellow-500'
                    }
                ]
            }
        }

    }
</script>

<style scoped>

</style>