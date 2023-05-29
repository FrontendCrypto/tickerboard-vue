<script>
import Action from './keyboard/Action.vue'
import BookmarkAction from './keyboard/BookmarkAction.vue'
import { ArrowsUpDownIcon, ChevronDoubleUpIcon, ChevronDoubleDownIcon } from '@heroicons/vue/24/solid'
export default {
    components: {
        Action,
        BookmarkAction,
        ArrowsUpDownIcon,
        ChevronDoubleDownIcon,
        ChevronDoubleUpIcon,
    },
    props: {
        isFavorite: Boolean,
    }
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
        <BookmarkAction />
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
