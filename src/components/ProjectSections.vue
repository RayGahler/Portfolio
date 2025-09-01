<template>
  <div>
    <div
      v-for="(section, idx) in sections"
      :key="idx"
  class="relative w-full max-w-7xl mx-auto h-fit flex flex-col items-center mb-24"
    >
    <div class="text-wrap relative bg-[#555] shadow-2xl rounded-2xl shadow-slate-500 flex flex-col items-center justify-center min-h-[120px] w-full">
      <a :href="section.link"><h2 class="relative text-4xl text-[#ddd] mb-4">{{ section.title }}</h2></a>
      <img :src="section.image" class="relative shadow-slate-500 mb-4" :alt="section.title" />
      <h3 class="relative text-3xl text-[#ddd] text-center">{{ section.description }}</h3>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSections",
  props: {
    sections: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
img {
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(30, 41, 59, 0.5);
}
</style>
