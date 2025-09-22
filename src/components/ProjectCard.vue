<script setup lang="ts">
type Link = { label: string; url: string }
defineProps<{
  title: string
  period: string
  role: string
  stack: string[]
  summary: string
  links?: Link[]
}>()
</script>

<template>
  <article
    class="group bg-white/70 backdrop-blur-sm rounded-3xl p-10 border border-gray-200/50 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 hover:border-gray-300/50 transition-all duration-500 ease-out"
  >
    <div class="space-y-6">
      <header class="flex items-start justify-between gap-6">
        <h3 class="text-2xl font-light text-gray-900 tracking-wide leading-tight">
          {{ title }}
        </h3>
        <span
          class="text-sm text-gray-500 bg-gray-100/50 px-4 py-2 rounded-full font-medium tracking-wide"
        >
          {{ period }}
        </span>
      </header>

      <p class="text-lg text-gray-700 font-medium tracking-wide">{{ role }}</p>

      <div class="flex flex-wrap gap-3">
        <span
          v-for="s in stack"
          :key="s"
          class="text-sm px-4 py-2 rounded-full bg-gray-100/60 text-gray-700 font-medium tracking-wide border border-gray-200/50"
        >
          {{ s }}
        </span>
      </div>

      <p class="text-gray-600 leading-relaxed font-light text-lg tracking-wide">{{ summary }}</p>

      <div v-if="links?.length" class="flex flex-wrap gap-6 pt-2">
        <a
          v-for="l in links"
          :key="l.url"
          :href="l.url"
          target="_blank"
          class="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm tracking-wide transition-colors duration-300"
        >
          {{ l.label }}
          <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </article>
</template>
