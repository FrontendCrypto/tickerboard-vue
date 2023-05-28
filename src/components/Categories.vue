<script>
import Category from './Category.vue'
import Favorites from './Favorites.vue'

import { BookmarkIcon, CubeTransparentIcon, CubeIcon, EllipsisHorizontalCircleIcon, PuzzlePieceIcon } from '@heroicons/vue/24/solid'
export default {
    components: {
        Category,
        Favorites,
        CubeTransparentIcon,
        CubeIcon,
        EllipsisHorizontalCircleIcon,
        PuzzlePieceIcon,
        BookmarkIcon
    },
    data() {
        return {
            categories: [
                { name: 'All', icon: EllipsisHorizontalCircleIcon },
                { name: 'Favorites', icon: BookmarkIcon },
                { name: 'DeFi', icon: CubeTransparentIcon },
                { name: 'Gaming', icon: PuzzlePieceIcon },
                { name: 'PoW', icon: CubeIcon },
                { name: 'PoS', icon: EllipsisHorizontalCircleIcon },
            ]
        }
    },
    computed: {
        getslug(name) {
            return name.toLowerCase()
        }
    }
}
</script>

<template>
    <div class="categories">
        <component v-for="category in categories" :is="category.name == 'Favorites' ? 'Favorites' : 'Category'"
            :name="category.name" :key="category.name">
            <component :is="category.icon" class="icon"></component>
        </component>
    </div>
</template>

<style scoped lang="scss">
.categories {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 48px;
    overflow: hidden;
    grid-auto-flow: column;
    /* 1 line */
}
</style>
