
<script setup>
import sections from './SectionData.js';
import ProjectSections from './ProjectSections.vue';
</script>

<template>

<div class="absolute w-dvw pt-72 h-max justify-center">
    <h1>Project Portfolio</h1>
    <br></br>
    <br></br>
    
    <ProjectSections :sections="sections" />
</div>

</template>
<style scoped>
img{
    @apply rounded-3xl shadow-2xl
}</style>