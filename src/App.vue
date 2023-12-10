<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/header/AppHeader.vue'
</script>

<template>
  <div class="container-fluid">
    <header>
      <AppHeader />
    </header>
    <main>
      <div class="container">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
