<script>
import Category from './Category.vue'
import { BookmarkIcon, CubeTransparentIcon, CubeIcon, EllipsisHorizontalCircleIcon, PuzzlePieceIcon } from '@heroicons/vue/24/solid'
export default {
    components: {
        Category,
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
    }
}
</script>

<template>
    <div class="categories">
        <Category v-for="category in categories" :key="category.name" :name="category.name">
            <component :is="category.icon" class=""></component>
        </Category>
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
