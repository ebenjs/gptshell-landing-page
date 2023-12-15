<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    isSvg: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        reqired: false
    }
})
</script>
            
<template>
    <button class="custom-button d-flex align-items-center justify-content-center">
        <span class="icon" v-if="isSvg">
            <slot name="icon"></slot>
        </span>
        <span v-else-if="icon" class="icon">
            <span class="material-symbols-outlined">
                {{ icon }}
            </span>
        </span>
        <div>{{ title }}</div>
    </button>
</template>


<style lang="scss" scoped>
.custom-button {
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    height: 43px;
    color: #000;

    .icon {
        margin-right: 5px;
        display: flex;
    }
}
</style>