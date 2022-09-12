<script setup lang="ts">
import { computed } from "vue";
import {
  ColorTileKey,
  reShuffleAt,
  colorTiles,
} from "@store/color-tiles/color-tiles.store";

interface ColorTileProps {
  colorTileKey: ColorTileKey;
}

const props = defineProps<ColorTileProps>();

const backgroundColor = computed(() => colorTiles[props.colorTileKey]);
</script>

<template>
  <div class="color-tile-outer-container">
    <div class="color-tile-inner-container">
      <div class="color-tile"></div>
      <div class="color-code" @click="reShuffleAt(colorTileKey)">
        <div>
          <span>{{ backgroundColor }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.color-tile-outer-container {
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  margin: 0.4rem;
  transition: 0.2s;

  &:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.2);
  }

  .color-tile-inner-container {
    padding: 1rem;
    .color-tile {
      width: 10rem;
      height: 10rem;
      background-color: v-bind(backgroundColor);
    }

    .color-code {
      cursor: pointer;
      text-align: center;
      user-select: none;

      :hover:before {
        content: "shuffle ?";
      }

      :hover span {
        display: none;
      }
    }
  }
}
</style>
