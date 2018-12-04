export default {
  favorites: [],

  /**
   * Add a tvShow to favorites
   */
  addFavorite(tvShow) {
    this.favorites.push(tvShow)
    console.log(this.favorites)
  },

  /**
   * Remove a tvShow from favorites
   */
  removeFavorite(tvShow) {
    const favIndex = this.favorites.findIndex(item => item.id === tvShow.id)
    this.favorites.splice(favIndex, 1)
    console.log(this.favorites)
  },

  /**
   * Check if the tvShow is part of favorites
   */
  isFavorite(tvShow) {
    return this.favorites.find(item => item.id === tvShow.id)
  }
}
