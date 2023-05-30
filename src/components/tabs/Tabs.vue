<script>
import store from '../../store'
import { Cog6ToothIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import BookmarkTab from '../tabs/BookmarkTab.vue'
import CategoriesTab from '../tabs/CategoriesTab.vue'

export default {
  components: {
    Cog6ToothIcon,
    MagnifyingGlassIcon,
    BookmarkTab,
    CategoriesTab
  },
  props: {
    ticker: String,
  },
  data() {
    return {
      search: false
    }
  },
  methods: {
    toggleConfiguration() {
      this.$store.commit('toggleConfiguration')
    },
    // Move this to search component (single responsability)
    toggleInput() {
      this.search = !this.search
    },
  },
};
</script>

<template>
  <div class="tab">
    <button @click="toggleInput" class="search">
      <MagnifyingGlassIcon class="icon" />
    </button>
    <div class="input" v-show="this.search">
      <v-text-field density="compact" focused placeholder="Search coins"></v-text-field>
    </div>
    <CategoriesTab class="categories" v-show="!this.search" />
    <BookmarkTab class="bookmarks" v-show="!this.search" />
    <button @click="toggleConfiguration" class="configuration">
      <Cog6ToothIcon class="icon" />
    </button>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/button.scss';

.tab {
  background-color: #ffffff;
  display: grid;
  grid-template-rows: 48px;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}

.search {
  grid-column: 1/2;
}

.configuration {
  grid-column: 4/5;
}

.input {
  width: 100%;
  grid-column: 2/4;
}

.categories {
  grid-column: 2/3;
}

.bookmarks {
  grid-column: 3/4;
}
</style>
