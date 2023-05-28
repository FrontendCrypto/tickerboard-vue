<template>
    <Transition>
        <div :class="['configuration']" v-show="configuration">
            <div class="configuration-item">
                <v-switch label="¿Show categories?" inset v-model="categories" @click="toggleCategories"></v-switch>
                <v-switch label="¿Show actions?" inset v-model="actions" @click="toggleActions"></v-switch>
                <v-select v-model="select" :items="items" item-title="state" item-value="abbr"
                    label="Select favorite currency" persistent-hint return-object single-line></v-select>
            </div>
            <v-btn variant="text" block @click="hideConfiguration">
                Close
            </v-btn>
        </div>
    </Transition>
</template>

<script>
import store from '../store'
export default {
    data() {
        return {
            select: { state: 'Euro (€)', abbr: 'EUR' },
            items: [
                { state: 'Euro (€)', abbr: 'EUR' },
                { state: 'United Stated Dollar ($)', abbr: 'EUR' },
            ],
        }
    },
    methods: {
        toggleCategories() {
            this.$store.commit('toggleCategories')
        },
        toggleActions() {
            this.$store.commit('toggleActions')
        },
        showConfiguration() {

        },
        hideConfiguration() {
            this.$store.commit('toggleConfiguration')
        }
    },
    computed: {
        categories() {
            return store.state.user.configuration.showCategories
        },
        actions() {
            return store.state.user.configuration.showActions
        },
        configuration() {
            return store.state.user.configuration.show
        }
    }
}
</script>

<style scoped lang="scss">
.configuration {
    width: 100%;
    padding: 16px;
    background-color: black;
    position: absolute;
    bottom: 0;
    z-index: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter {
    transform: translateY(100%);
}

.slide-leave-to {
    transform: translateY(100%);
}

.slide-leave {
    transform: translateY(0);
}
</style>