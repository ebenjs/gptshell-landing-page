<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/header/AppHeader.vue'
import AppFooter from './components/footer/AppFooter.vue';
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <header>
          <AppHeader />
        </header>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <main>
          <div class="container">
            <RouterView />
          </div>
        </main>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col p-0">
        <footer>
          <AppFooter />
        </footer>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
