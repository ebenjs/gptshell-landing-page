<script setup lang="ts"></script>

<template>
  <div class="row header">
    <div class="col-lg-2 offset-lg-1 d-flex">
      <img src="/images/command-line-development.svg" alt="logo" class="logo" />
      <span class="logo-text ms-3">gpt-shell</span>
    </div>
    <div class="col-lg-6">
      <nav class="header-nav">
        <router-link to="/" class="header-nav-link">Homepage</router-link>
        <router-link to="/documentation" class="header-nav-link">Documentation</router-link>
        <a href="/#download-section" class="header-nav-link">Download</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ebenjs/gpt-shell"
          class="header-nav-link">GitHub</a>
        <router-link to="/blog" class="header-nav-link">Blog</router-link>
        <router-link to="/support" class="header-nav-link">Support us</router-link>
      </nav>
    </div>
    <div class="col-lg-2 d-flex justify-content-end">
      <a href="#" class="header-logo-link">
        <img src="/images/powered-by-openai-badges/powered-by-openai-badge-outlined-on-dark.svg" alt="Hyper"
          height="30" />
      </a>
    </div>
    <div class="col-lg-1"></div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  @include light-border-bottom;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: $default-bg;

  .header-nav {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .header-nav-link {
      text-decoration: none;
      font-size: 14px;
      color: $default-color-grey;
      transition: color 0.2s ease;

      &:not(:last-child) {
        margin-right: 24px;
      }
    }
  }
}
</style>
