<script>
import store from '../../store'
import { BookmarkIcon } from '@heroicons/vue/24/solid'

export default {
    components: {
        BookmarkIcon
    },
    computed: {
        count: {
            get() {
                return store.state.user.bookmarks.length
            }
        }
    }
}
</script>

<template>
    <button>
        <BookmarkIcon class="icon" />
        <span>Bookmarks</span>
        <span class="counter" v-if="count">{{ count }}</span>
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

.counter {
    width: 14px;
    height: 14px;
    background-color: rgb(195, 195, 195);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    position: absolute;
    right: 4px;
    top: 4px;
    z-index: 2;
    border-radius: 50%;
}
</styles>