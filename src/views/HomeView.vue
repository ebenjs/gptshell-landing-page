<script setup lang="ts">
import AppHero from '@/components/AppHero.vue'
import CustomButton from '@/components/common/CustomButton.vue';
import SimpleLink from '@/components/common/SimpleLink.vue';
import HeroTerminal from '@/components/HeroTerminal.vue'
import { computed, ref } from 'vue';
import { SpeedInsights } from "@vercel/speed-insights/next"

const showOtherPlatforms = ref(false);
const currentOS = computed(() => {
  let platform = null;
  if (navigator.userAgent.indexOf('Win') != -1) platform = 'windows';
  if (navigator.userAgent.indexOf('Mac') != -1) platform = 'mac';
  if (navigator.userAgent.indexOf('Linux') != -1) platform = 'linux';
  return platform;
});

</script>

<template>
  <SpeedInsights/>
  <main>
    <AppHero />
    <HeroTerminal />
    <div class="mt-4 d-flex align-items-center justify-content-center">
      <CustomButton v-if="currentOS === 'windows'" title="Download for Windows" :is-svg="true">
        <template #icon>
          <img src="/images/microsoft-windows-11.svg" height="20" alt="windows" />
        </template>
      </CustomButton>
      <CustomButton v-else-if="currentOS === 'linux'" title="Download for Linux" :is-svg="true">
        <template #icon>
          <img src="/images/linux-logo.svg" height="20" alt="windows" />
        </template>
      </CustomButton>
      <CustomButton v-else-if="currentOS === 'mac'" title="Download for Mac" :is-svg="true">
        <template #icon>
          <img src="/images/mac-logo.svg" height="20" alt="windows" />
        </template>
      </CustomButton>
      <CustomButton v-else title="Download" icon="download" />
    </div>
    <div class="mt-3 d-flex align-items-center justify-content-center">
      <SimpleLink title="Other platfoms" @click="showOtherPlatforms = !showOtherPlatforms" />
    </div>
    <div v-if="showOtherPlatforms" class="mt-4 d-flex align-items-center justify-content-center">
      <table class="table w-75 text-center">
        <caption>Other platforms binaries</caption>
        <thead>
          <tr>
            <th scope="col">Platform</th>
            <th scope="col">Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Windows</td>
            <td>
              <SimpleLink title="version-0.1.0-win-x64.zip"
                url="https://github.com/ebenjs/gpt-shell/archive/refs/tags/version-0.1.0.zip" />
            </td>
          </tr>
          <tr>
            <td>Linux</td>
            <td>
              <SimpleLink title="version-0.1.0.zip for Linux"
                url="https://github.com/ebenjs/gpt-shell/archive/refs/tags/version-0.1.0.zip" />
            </td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>
              <SimpleLink title="version-0.1.0.zip for Mac"
                url="https://github.com/ebenjs/gpt-shell/archive/refs/tags/version-0.1.0.zip" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.table {
  border-radius: 100px;
  border: 1px solid $terminal-bg;

  th {
    background-color: $terminal-bg;
    color: #fff;
  }

  td,
  tr {
    color: #fff;
    background-color: transparent;

    &:hover {
      background-color: $terminal-bg;
    }
  }

  caption {
    color: $default-color-grey;
    text-align: center;
  }
}
</style>
