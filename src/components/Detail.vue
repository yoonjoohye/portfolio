<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" @blur="close()">
                    <div class="flex justify-between relative">
                        <slot name="img">
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Detail",
        methods:{
            close() {
                console.log('sdfsdf');
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>

</style>