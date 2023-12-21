<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/header/AppHeader.vue'
import AppFooter from './components/footer/AppFooter.vue';
</script>

<template>
  <div class="container-fluid h-100">
    <div class="row">
      <div class="col">
        <header>
          <AppHeader />
        </header>
      </div>
    </div>
    <div class="row body-content">
      <div class="col h-100">
        <main class="h-100">
          <div class="container h-100">
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

.body-content {
  min-height: calc(100% - 100px);
}
</style>
