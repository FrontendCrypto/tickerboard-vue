<script>
import Action from './keyboard/Action.vue'
import { ArrowsUpDownIcon, ChevronDoubleUpIcon, ChevronDoubleDownIcon, ArrowDownLeftIcon, ArrowUpRightIcon, BookmarkIcon, BookmarkSlashIcon } from '@heroicons/vue/24/solid'
export default {
    components: {
        Action,
        ArrowsUpDownIcon,
        ChevronDoubleDownIcon,
        ChevronDoubleUpIcon,
        ArrowDownLeftIcon,
        ArrowUpRightIcon,
        BookmarkIcon,
        BookmarkSlashIcon,
    },
    props: {
        isFavorite: Boolean,
    }
    // data() {
    //     return {
    //     }
    // }
}
</script>

<template>
    <div class="actions">
        <Action name="Buy">
            <ChevronDoubleDownIcon class="icon" />
        </Action>
        <Action name="Swap">
            <ArrowsUpDownIcon class="icon" />
        </Action>
        <Action name="Sell">
            <ChevronDoubleUpIcon class="icon" />
        </Action>
        <!-- <Action name="Deposit">
            <ArrowDownLeftIcon class="icon" />
        </Action>
        <Action name="Withdraw">
            <ArrowUpRightIcon class="icon" />
        </Action> -->
        <Action :name="isFavorite ? 'Bookmarked' : 'Bookmark'" @click="isFavorite = !isFavorite">
            <BookmarkSlashIcon v-if="isFavorite" class="icon" />
            <BookmarkIcon v-else class="icon" />
        </Action>

    </div>
</template>

<style scoped lang="scss">
.actions {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 48px;
    grid-auto-flow: column;
}
</style>
