<script>
export default {
    data() {
        return {
            startY: 0,
        }
    },
    methods: {
        onDragStart(event) {
            this.startY = event.clientY
        },
        onDragEnd(event) {
            const currentY = event.clientY;
            const delta = currentY - this.startY;
            delta > 0 ? this.$store.commit('showKeyboard') : this.$store.commit('hideKeyboard');
        },
    },
}
</script>

<template>
    <div draggable class="notch" @dragstart="onDragStart" @dragend="onDragEnd">
        drag
    </div>
</template>

<style scoped lang="scss">
.notch {
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
}
</style>