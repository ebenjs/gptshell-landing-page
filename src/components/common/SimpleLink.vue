<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        default: '#'
    },
    target: {
        type: String,
        default: '_self'
    }
})
</script>
        
<template>
    <span>
        <a :href="url" :target="target" class="simple-link">
            {{ title }}
        </a>
    </span>
</template>


<style lang="scss" scoped>
.simple-link {
    color: lightcoral;
}
</style>