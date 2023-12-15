<script setup lang="ts">
import SimpleLink from '../common/SimpleLink.vue'
</script>
        
<template>
    <div class="footer mt-auto py-4">
        <div class="container d-flex align-items-center justify-content-center">
            <span>
                Licensed under the
                <SimpleLink url="https://github.com/ebenjs/gpt-shell?tab=Apache-2.0-1-ov-file#readme" target="_blank"
                    title="Apache License 2.0" :underline="false" />.
            </span>
            <span class="ms-3 d-flex">
                <span>
                    Made with
                </span>
                <span class="material-symbols-outlined favorite-icon ms-2">
                    favorite
                </span>
                <span class="ms-2">
                    by
                </span>
                <span class="ms-1">
                    <SimpleLink url="https://github.com/ebenjs" target="_blank" title="@ebenjs" :underline="false" />.
                </span>
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    @include light-border;
    background-color: $default-bg;
    color: $default-color-grey;
    border-top: solid 0.5px rgb(39, 39, 39);

    .favorite-icon {
        color: #ff0000;
    }
}
</style>