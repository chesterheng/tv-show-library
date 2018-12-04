<template>
  <div>
    <h1>{{ title }}</h1>
    <TvShow v-for="tvShow in tvShows" :tvShowData="tvShow" :key="tvShow.id"/>
  </div>
</template>

<script>
import TvShow from "@/components/TvShow.vue";
import FavoriteService from "@/services/favorites.service";
export default {
  components: {
    TvShow
  },
  data() {
    return {
      title: "Favorites",
      tvShows: FavoriteService.favorites
    };
  }
};
</script>

<style>
</style>
