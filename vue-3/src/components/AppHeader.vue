<script setup lang="ts">
import { userName } from "@store/meta/metadata.store";
</script>

<template>
  <div class="app-header-container">
    <h1 class="user-name">{{ userName }}</h1>
    <img src="/icons/divertise-asia.webp" />
  </div>
</template>

<style scoped lang="scss">
.app-header-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .user-name {
    margin-right: 0.5rem;
    background: -webkit-linear-gradient(#5990af, #53ccc3, #2d506c);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
