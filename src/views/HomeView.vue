<script setup lang="ts">
import AppHero from '@/components/AppHero.vue'
import CustomButton from '@/components/common/CustomButton.vue';
import SimpleLink from '@/components/common/SimpleLink.vue';
import HeroTerminal from '@/components/HeroTerminal.vue'
import { computed } from 'vue';

const currentOS = computed(() => {
  let platform = null;
  if (navigator.userAgent.indexOf('Win') != -1) platform = 'windows';
  if (navigator.userAgent.indexOf('Mac') != -1) platform = 'mac';
  if (navigator.userAgent.indexOf('Linux') != -1) platform = 'linux';
  return platform;
});

</script>

<template>
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
    <div class="mt-1 d-flex align-items-center justify-content-center">
      <SimpleLink title="Other platfoms" />
    </div>
  </main>
</template>
