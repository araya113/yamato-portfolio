<script setup lang="ts">
defineProps<{ id?: string; title: string; subtitle?: string }>()
</script>

<template>
  <section :id="id" class="py-24 max-w-5xl mx-auto px-8">
    <div class="text-center mb-20">
      <h2 class="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">{{ title }}</h2>
      <p
        v-if="subtitle"
        class="text-xl text-gray-600 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
      >
        {{ subtitle }}
      </p>
    </div>
    <div>
      <slot />
    </div>
  </section>
</template>

<style scoped>
section {
  position: relative;
}

section:not(:first-child)::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.06), transparent);
}
</style>
