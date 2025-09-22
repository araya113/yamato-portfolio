<script setup lang="ts">
defineProps<{
  title: string
  tags: string[]
  description: string
  repo?: string
  demo?: string
  thumb?: string
}>()
</script>

<template>
  <article
    class="group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 hover:border-gray-300/50 transition-all duration-500 ease-out"
  >
    <div v-if="thumb" class="relative overflow-hidden">
      <img
        :src="thumb"
        alt=""
        class="w-full aspect-video object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>
    </div>

    <div class="p-10 space-y-6">
      <h3 class="text-xl font-light text-gray-900 tracking-wide leading-tight">
        {{ title }}
      </h3>

      <div class="flex flex-wrap gap-3">
        <span
          v-for="t in tags"
          :key="t"
          class="text-sm px-4 py-2 rounded-full bg-gray-100/60 text-gray-700 border border-gray-200/50 font-medium tracking-wide"
        >
          {{ t }}
        </span>
      </div>

      <p class="text-gray-600 leading-relaxed font-light text-lg tracking-wide">
        {{ description }}
      </p>

      <div class="flex gap-6 pt-2">
        <a
          v-if="repo"
          :href="repo"
          target="_blank"
          class="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm tracking-wide transition-colors duration-300"
        >
          Repository
          <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </a>
        <a
          v-if="demo"
          :href="demo"
          target="_blank"
          class="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm tracking-wide transition-colors duration-300"
        >
          Demo
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
