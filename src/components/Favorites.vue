<script>
import store from '../store'

export default {
    computed: {
        numberOfFavorites() {
            return store.state.user.favorites.length
        }
    }
}
</script>

<template>
    <button>
        <slot></slot>
        <span>Favorites</span>
        <span>{{ numberOfFavorites }}</span>
    </button>
</template>

<styles scoped lang="scss">
@import '../assets/button.scss';

.icon {
    width: 16px;
    color: rgb(70, 70, 70);
}
</styles>