<script setup>

const props = defineProps({
    text: {
        type: String,
        default: "Hello world!"
    }
});

</script>

<template>

<p>{{ props.text }}</p>

</template>
