<script>
import store from '../../store'
import { BookmarkIcon, BookmarkSlashIcon } from '@heroicons/vue/24/solid'
export default {
    components: {
        BookmarkIcon,
        BookmarkSlashIcon
    },
    props: {
        name: String
    },
    computed: {
        isBookmarked() {
            return store.getters.isBookmarked
        }
    },
    methods: {
        updateStore() {
            this.$store.commit('updateBookmarks')
        },
        toggle() {
            if (this.isBookmarked) {
                this.$store.commit('removeBookmark')
            } else {
                this.$store.commit('addBookmark')
            }
        }
    }
}
</script>

<template>
    <button @click="this.toggle()">
        <BookmarkIcon v-if="isBookmarked" class="icon" />
        <BookmarkSlashIcon v-else class="icon" />
        <span>{{ name }}</span>
    </button>
</template>

<styles scoped lang="scss">
@import '../../assets/button.scss';
</styles>