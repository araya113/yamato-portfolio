<script setup lang="ts">
import Section from './components/Section.vue'
import ProjectCard from './components/ProjectCard.vue'
import SkillList from './components/SkillList.vue'
import WorkCard from './components/WorkCard.vue'

import { projects } from './data/projects'
import { skills } from './data/skills'
import { works } from './data/works'

const name = 'Yamato Araya'
const title = 'Full-Stack Engineer / Frontend Focus'
const links = [
  { label: 'GitHub', url: 'https://github.com/araya113' },
  { label: 'Email', url: 'mailto:yamato120@gmail.com' },
  { label: 'This Site Repository', url: 'https://github.com/araya113/my-portfolio' },
]
</script>

<template>
  <main class="min-h-screen bg-gray-50">
    <!-- Hero -->
    <section class="max-w-5xl mx-auto px-8 pt-24 pb-20">
      <div class="text-center space-y-8">
        <div
          class="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm"
        >
          <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
          <span class="text-gray-700 text-sm font-medium tracking-wide">Available for work</span>
        </div>
        <div class="space-y-4">
          <h1 class="text-5xl md:text-7xl font-light text-gray-900 tracking-tight leading-none">
            {{ name }}
          </h1>
          <p
            class="text-2xl md:text-3xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
          >
            {{ title }}
          </p>
        </div>
        <nav class="flex justify-center gap-4 flex-wrap mt-12">
          <a
            v-for="l in links"
            :key="l.url"
            :href="l.url"
            target="_blank"
            class="group inline-flex items-center px-8 py-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:bg-white hover:shadow-lg hover:border-gray-300/50 transition-all duration-300 ease-out"
          >
            <span class="text-gray-800 group-hover:text-gray-900 font-medium tracking-wide">{{
              l.label
            }}</span>
            <svg
              class="ml-2 w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </nav>
      </div>
    </section>

    <!-- 対応可能技術 -->
    <Section id="skills" title="Skills" subtitle="対応可能技術">
      <SkillList :data="skills" />
    </Section>

    <!-- 参加プロジェクト -->
    <Section id="projects" title="Projects" subtitle="過去の参加プロジェクト">
      <div class="grid lg:grid-cols-2 gap-8">
        <ProjectCard
          v-for="p in projects"
          :key="p.title"
          :title="p.title"
          :period="p.period"
          :role="p.role"
          :stack="p.stack"
          :summary="p.summary"
          :links="p.links"
        />
      </div>
    </Section>

    <!-- 個人制作 -->
    <Section id="works" title="Personal Works" subtitle="個人制作作品">
      <div v-if="works.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <WorkCard
          v-for="w in works"
          :key="w.title"
          :title="w.title"
          :tags="w.tags"
          :description="w.description"
          :repo="w.repo"
          :demo="w.demo"
          :thumb="w.thumb"
        />
      </div>
      <div v-else class="text-center py-20">
        <div class="relative inline-block mb-8">
          <div
            class="w-20 h-20 mx-auto bg-white/60 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-gray-200/50 shadow-sm"
          >
            <svg
              class="w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              ></path>
            </svg>
          </div>
          <div
            class="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center"
          >
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </div>
        </div>
        <h3 class="text-3xl font-light text-gray-900 mb-4 tracking-wide">Coming Soon</h3>
        <p class="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed font-light">
          新しいプロジェクトを準備中です。<br />
          近日公開予定ですので、お楽しみにお待ちください。
        </p>
        <div class="mt-8">
          <div
            class="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-sm text-gray-700 rounded-full border border-gray-200/50 font-medium text-sm tracking-wide"
          >
            <svg
              class="w-4 h-4 text-orange-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            In Development
          </div>
        </div>
      </div>
    </Section>

    <footer class="py-20 bg-white/30 backdrop-blur-sm border-t border-gray-200/50">
      <div class="max-w-5xl mx-auto px-8 text-center">
        <p class="text-gray-500 text-sm font-light tracking-wide">
          © {{ new Date().getFullYear() }} {{ name }}.
        </p>
      </div>
    </footer>
  </main>
</template>
