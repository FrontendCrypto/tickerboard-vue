<script>
import store from '../../store'
import { EllipsisHorizontalCircleIcon } from '@heroicons/vue/24/solid'

export default {
    components: {
        EllipsisHorizontalCircleIcon,
    },
}
</script>

<template>
    <button>
        <EllipsisHorizontalCircleIcon class="icon" />
        <span>Categories</span>
    </button>
</template>

<styles scoped lang="scss">
@import '../../assets/button.scss';

button {
    position: relative;
}

.icon {
    width: 16px;
    color: rgb(70, 70, 70);
}
</styles>