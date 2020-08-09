<template>
    <section class="w-full">
            <div class="container bg-white">
                <article class="mb-12 sm:mb-10">
                    <div class="flex justify-between items-center mb-5 sm:mb-1">
                        <div class="text-4xl sm:text-2xl font-semibold">윤주혜 (JUICE)</div>
                        <div>
                            <a class="flex items-center text-small py-2 px-4 text-white text-center rounded-lg bg-image hover:bg-yellow-500"
                               href="https://d2ajlnsxcxj87x.cloudfront.net/윤주혜_추천서.pdf" target="_blank" download>
                                <img class="w-5 h-5 sm:w-4 sm:h-4 mr-2" src="https://d2ajlnsxcxj87x.cloudfront.net/logo/download.svg"/>
                                추천서<span class="ml-2 only-pc"> 다운로드</span>
                            </a>
                        </div>
                    </div>
                    <div class="mb-3 sm:mb-1">
                        <img class="inline w-5 h-5 mr-3 sm:w-3" src="../assets/images/icon/phone.svg">
                        <span class="sm:text-xs">010-9977-3841</span>
                    </div>
                    <div class="mb-3 sm:mb-1">
                        <img class="inline w-5 h-5 mr-3 sm:w-3" src="../assets/images/icon/email.svg">
                        <a class="sm:text-xs" href="mailto:besoftyoon@gmail.com"
                           target="_blank">besoftyoon@gmail.com</a>
                    </div>
                    <div class="mb-3 sm:mb-1">
                        <img class="inline w-5 h-5 mr-3 sm:w-3" src="../assets/images/icon/github.svg">
                        <a class="sm:text-xs" href="https://github.com/yoonjoohye" target="_blank">Github |
                            https://github.com/yoonjoohye</a>
                    </div>
                    <div>
                        <img class="inline w-5 h-5 mr-3 sm:w-3" src="../assets/images/icon/medium.svg">
                        <a class="sm:text-xs" href="https://medium.com/@besoftyoon" target="_blank">Medium |
                            https://medium.com/@besoftyoon</a>
                    </div>
                </article>

                <div v-for="(resm, index) in resume">
                    <!--경력사항--->
                    <article class="mb-8 sm:mb-5">
                        <div class="mb-8 sm:mb-5">
                            <span class="text-3xl font-semibold border-l-6  pl-3 border-orange-800 sm:text-xl sm:border-l-4">경력사항</span>
                        </div>
                        <div class="flex flex-row-m" v-for="(item,index) in resm.career">
                            <div class="w-1/4 sm:w-full  fit-content font-light text-small mr-5 sm:mb-1">{{item.date}}
                            </div>
                            <div class="w-3/4 sm:w-full mb-5">
                                <div class="text-2xl sm:text-lg font-semibold mb-3 sm:mb-1">{{item.title}}</div>
                                <div class="mb-3">
                                    <a class="underline text-small text-gray-700 hover:text-gray-600" :href="item.url"
                                       target="_blank">{{item.url}}</a>
                                </div>
                                <div class="flex mb-2 text-small" v-for="(content,index) in item.contents">
                                    <li/>
                                    <div class="keep-all">{{content}}</div>
                                </div>
                            </div>
                        </div>
                    </article>

                    <!--교과 외 활동--->
                    <article class="mb-8 sm:mb-5">
                        <div class="mb-8 sm:mb-5">
                            <span class="text-3xl font-semibold border-l-6 pl-3 border-orange-800 sm:text-xl sm:border-l-4">교과 외 활동</span>
                        </div>
                        <div class="flex flex-row-m" v-for="(item,index) in resm.activity">
                            <div class="w-1/4 sm:w-full fit-content font-light text-small mr-5 sm:mb-1">{{item.date}}
                            </div>
                            <div class="w-3/4 sm:w-full mb-5">
                                <div class="text-2xl sm:text-lg font-semibold mb-3 sm:mb-1">{{item.title}}</div>
                                <div class="text-lg sm:text-base mb-3">{{item.role}}</div>
                                <div class="flex mb-2 text-small" v-for="(content,index) in item.contents">
                                    <li/>
                                    <div class="keep-all">{{content}}</div>
                                </div>
                            </div>
                        </div>
                    </article>

                    <!--수상내역--->
                    <article class="mb-8 sm:mb-5">
                        <div class="mb-8 sm:mb-5">
                            <span class="text-3xl font-semibold border-l-6  pl-3 border-orange-800 sm:text-xl sm:border-l-4">수상내역</span>
                        </div>
                        <div class="flex flex-row-m" v-for="(item,index) in resm.awards">
                            <div class="w-1/4 sm:w-full fit-content font-light text-small mr-5 sm:mb-1">{{item.date}}
                            </div>
                            <div class="w-3/4 sm:w-full mb-5">
                                <div class="text-2xl sm:text-lg font-semibold mb-3 sm:mb-1">{{item.title}}</div>
                                <div class="text-lg sm:text-base mb-3">{{item.name}}</div>
                                <div class="flex mb-2 text-small" v-for="(content,index) in item.contents">
                                    <li/>
                                    <div class="keep-all">{{content}}</div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <!--학력-->
                    <article class="mb-8 sm:mb-5">
                        <div class="mb-8 sm:mb-5">
                            <span class="text-3xl font-semibold border-l-6 pl-3 border-orange-800 sm:text-xl sm:border-l-4">학력사항</span>
                        </div>
                        <div class="flex flex-row-m" v-for="(item,index) in resm.school">
                            <div class="w-1/4 sm:w-full fit-content font-light text-small mr-5 sm:mb-1">{{item.date}}
                            </div>
                            <div class="w-3/4 sm:w-full mb-5">
                                <div class="text-2xl sm:text-lg font-semibold mb-3 sm:mb-1">{{item.school}}</div>
                                <div class="text-lg sm:text-base mb-3">{{item.major}}</div>
                                <div class="keep-all mb-2 text-small" v-for="(subject,index) in item.edu">{{subject}}
                                </div>
                            </div>
                        </div>
                    </article>

                    <!--기타-->
                    <div class="mb-8 sm:mb-5">
                        <span class="text-3xl font-semibold border-l-6 pl-3 border-orange-800 sm:text-xl sm:border-l-4">기타</span>
                    </div>
                    <div class="flex flex-row-m" v-for="(item,index) in resm.certificate">
                        <div class="w-1/4 sm:w-full fit-content font-light text-small mr-5 sm:mb-1">{{item.date}}</div>
                        <div class="w-3/4 sm:w-full flex flex-row mb-5">
                            <div class=" font-medium text-small border-r pr-5 mr-5 sm:mr-1 sm:pr-1">{{item.title}}</div>
                            <div class="keep-all text-small">{{item.contents}}</div>
                        </div>
                    </div>

                </div>

            </div>
    </section>
</template>

<script>
    import db from '../assets/db/db.json';

    export default {
        name: 'Resume',
        data() {
            return {
                resume: db.resume
            }
        }
    }
</script>

<style scoped>

</style>