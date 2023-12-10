<script setup lang="ts"></script>

<template>
  <div class="row header">
    <div class="col">
      <nav class="header-nav">
        <a class="header-nav-link" href="/plugins">Plugins</a
        ><a class="header-nav-link" href="/themes">Themes</a
        ><a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/vercel/hyper"
          class="header-nav-link"
          >GitHub</a
        ><a class="header-nav-link" href="/#installation">Download</a
        ><a class="header-nav-link" href="/blog">Blog</a>
      </nav>
    </div>
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
