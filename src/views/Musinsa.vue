<template>
    <section class="w-full flex flex-col justify-center items-center">
        <div class="container musinsa text-center keep-all">
            <!--            1. 설문조사를 하게 된 이유-->
            <!--            2. 설문조사 결과는 어떤지-->
            <!--            3. 어떤 생각을 했는지-->
            <!--            4. UI/UX를 어떻게 바꿨는지-->
            <!--            5. 기존과 뭐가 다른지-->
            <div class="text-2xl border-b border-t border-black py-2 inline-block mb-20"><span class="font-normal">MUSINSA STORE</span> 메인화면 개선 중</div>
            <img src="../assets/images/musinsa/musinsa4.png">
            <div class="py-10">
                처음 무신사 스토어를 이용할때 기능이 많아 레이아웃 적응이 쉽지 않았다.<br>
                그래서 '무신사를 한번 개선해보자!'라는 생각을 했다.<br>
            </div>
            <div class="mb-10" v-for="x in 2">.</div>
            <img src="../assets/images/musinsa/musinsa3.png">
            <div class="py-10">
                무신사 서비스를 개선하기 위해 어떤 점 문제인지 알아야했다.<br>
                그래서 구글폼에 무신사 서비스 사용에 대한 설문지를 작성했다.<br>
                총 21명에게 응답 받았고, 결과는 <u>사이트 속도와 UI/UX에 의해 상품을 찾기 어렵다는 것</u>이 문제였다.
            </div>
            <div class="mb-10" v-for="x in 2">.</div>
            <img src="../assets/images/musinsa/musinsa5.png">
            <div class="py-10">↓</div>
            <img src="../assets/images/musinsa/musinsa1.png">
            <div class="py-10">
                <u>사용자들이 상품을 잘 찾도록 만드는 것</u>이 목적이었기 때문에 UI/UX는 위 사진처럼 개선했다.<br>
                <br>
                본질에 집중하고자 <u>최대한 기능을 간소화</u>해봤다.<br>
                <br>
                <u>햄버거 버튼을 클릭</u>하면 전체 메뉴를 볼 수 있도록 했다.<br>
                상품을 찾기 위해서는 사용자가 검색을 많이 이용할 것이라 생각하여, <u>검색창을 크게</u> 만들었다.<br>
                디자이너와 브랜드는 사용자가 상품을 찾는데에 중요한 역할을 한다고 생각하여 메인화면에 두었다.<br>
                세일 상품, 랭킹 상품, 무신사 추천 등 <u>상품이 사용자 눈에 많이 띌 수 있는 위주</u>로 배치했다.<br>
                쇼핑이슈, 기획전 등 사용자가 알아야하는 소식을 한 눈에 볼 수 있게 <u>스와이핑 되는 배너</u>로 만들었다.<br>
                <br>
                <u>vue와 nuxt.js를 사용</u>하고, <u>Lazy-loading을 적용</u>하여 사이트 속도를 개선하려고 노력했다.
            </div>

            <div class="flex justify-center text-sm py-10">
                <span class="only-pc">참조::</span>
                <a class="text-blue-500 " href="https://github.com/yoonjoohye/musinsa_renewal" target="_blank">https://github.com/yoonjoohye/musinsa_renewal</a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Musinsa"
    }
</script>

<style scoped>

</style>