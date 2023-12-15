<script setup lang="ts"></script>

<template>
  <div class="row header">
    <div class="col-lg-2 offset-lg-1 d-flex">
      <img src="/images/command-line-development.svg" alt="logo" class="logo" />
      <span class="logo-text ms-3">gpt-shell</span>
    </div>
    <div class="col-lg-6">
      <nav class="header-nav">
        <a class="header-nav-link" href="/plugins">Documentation</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ebenjs/gpt-shell"
          class="header-nav-link">GitHub</a>
        <a class="header-nav-link" href="/#installation">Download</a><a class="header-nav-link" href="/blog">Blog</a>
        <a class="header-nav-link" href="/themes">Donate</a>
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
  height: 65px;
  border-bottom: solid 0.5px rgb(39, 39, 39);
  display: flex;
  align-items: center;
  justify-content: center;

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
