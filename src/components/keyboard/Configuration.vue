<template>
    <div class="configuration" ref="configuration">
        <div class="configuration-wrapper">
            <div class="configuration-item">
                <v-switch label="¿Show actions?" inset v-model="actions" @click="actions"></v-switch>
                <v-select v-model="currencySelect" :items="curencies" item-title="state" item-value="abbr"
                    label="Select favorite currency" persistent-hint return-object single-line></v-select>
                <v-select v-model="languageSelect" :items="languages" item-title="state" item-value="abbr"
                    label="Select language" persistent-hint return-object single-line></v-select>
            </div>
            <v-btn variant="text" block @click="hideConfiguration">
                Close
            </v-btn>
        </div>
    </div>
</template>

<script>
import store from '../../store'
import anime from 'animejs/lib/anime.es.js';

export default {
    data() {
        return {
            currencySelect: { state: 'Euro (€)', abbr: 'EUR' },
            languageSelect: { state: 'English', abbr: 'EN' },
            curencies: [
                { state: 'Euro (€)', abbr: 'EUR' },
                { state: 'United Stated Dollar ($)', abbr: 'EUR' },
            ],
            // Refactor, move to store or data object
            languages: [
                { state: 'Español', abbr: 'ES' },
                { state: 'English', abbr: 'EN' },
            ],
        }
    },
    methods: {
        hideConfiguration() {
            this.$store.commit('toggleConfiguration')
            this.hide()
        },
        hide() {
            anime({
                targets: this.$refs.configuration,
                translateY: 0,
                borderRadius: 0
            });
        },
        show() {
            anime({
                targets: this.$refs.configuration,
                translateY: -this.keyboardHeight - 44,
                borderRadius: 16
            });
        }
    },
    watch: {
        isVisible(isVisible) {
            isVisible ? this.show() : this.hide()
        }
    },
    computed: {
        actions: {
            get() {
                return store.state.user.configuration.showActions
            },
            set(value) {
                this.$store.commit('toggleActions', value)
            }
        },
        isVisible: {
            get() {
                return store.state.user.configuration.show
            }
        },
        keyboardHeight: {
            get() {
                return this.$refs.configuration.clientHeight
            }
        }
    }
}
</script>

<style scoped lang="scss">
.configuration {
    position: absolute;
    top: 0;
    z-index: 0;
    width: 100%;
    left: 0;
    padding: 0 16px;
}

.configuration-wrapper {
    width: 100%;
    padding: 16px;
    background-color: hsl(0, 0%, 99%);
    border-radius: 16px;
}
</style>