<script setup lang="ts">
import { computed } from "vue";
import {
  colorTiles,
  ColorTileKey,
  reShuffleAll,
} from "@store/color-tiles/color-tiles.store";
import SystemUiconsShuffle from "~icons/system-uicons/shuffle";

const colorTileKeys = computed(() => Object.keys(colorTiles) as ColorTileKey[]);
</script>

<template>
  <div class="main-app-container">
    <AppHeader />
    <div class="color-tiles-container">
      <ColorTile v-for="key of colorTileKeys" :color-tile-key="key" />
    </div>

    <div>
      <div class="button shuffle-all-icon" @click="reShuffleAll()">
        <SystemUiconsShuffle />
        <div>Shuffle All</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-app-container {
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .color-tiles-container {
    max-width: 40rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .shuffle-all-icon {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: var(--primary);
    color: white;
    font-weight: 500;
    width: 8rem;
  }
}
</style>
