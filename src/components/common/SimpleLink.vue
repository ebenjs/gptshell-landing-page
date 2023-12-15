<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps({
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
    },
    underline: {
        type: Boolean,
        default: true
    }
})

const emit = defineEmits(['click'])

const computeClass = computed(() => {
    return `simple-link ${props.underline ? 'underline' : ''}`
})
</script>
        
<template>
    <span @click="emit('click')">
        <a :href="url" :target="target" :class="computeClass">
            {{ title }}
        </a>
    </span>
</template>


<style lang="scss" scoped>
.simple-link {
    color: lightcoral;
    text-decoration: none;
}

.underline {
    text-decoration: underline;
}
</style>