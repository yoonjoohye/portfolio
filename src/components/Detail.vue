<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="flex justify-between relative">
                        <slot name="img">
                        </slot>
                        <button class="modal-default-button" @click="$emit('close')">X</button>
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
    }
</script>

<style scoped>

</style>