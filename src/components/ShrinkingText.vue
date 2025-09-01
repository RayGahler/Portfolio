<script setup>
    const props = defineProps({
        text: String,
        size : Number,
        scroll : Number,
        _class : String
    })

</script>

<template>
    <p :class="_class" :style="{'font-size' : `${size * (scroll/100)}rem`}">{{ text }}</p>
</template>