<template>
    <div>
        <ArrowDownIcon v-if="direction === 'down'" class="icon" />
        <ArrowUpIcon v-else class="icon" />
        <span>{{ change }}</span>
        <span>%</span>
    </div>
</template>

<script>
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/24/solid'
import store from '../store'

export default {
    components: {
        ArrowDownIcon,
        ArrowUpIcon
    },
    computed: {
        change() {
            return store.state.change
        },
        direction() {
            return this.change > 0 ? 'up' : 'down'
        }
    },
}
</script>

<style scoped lang="scss"></style>
