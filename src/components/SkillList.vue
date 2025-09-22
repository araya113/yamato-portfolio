<script setup lang="ts">
type SkillItem = {
  name: string
  level: number
}

defineProps<{ data: { name: string; items: SkillItem[] }[] }>()

// 星評価レンダリング関数
const renderStars = (level: number) => {
  return Array.from({ length: 5 }, (_, index) => index < level)
}

// 星評価の説明
const skillLevels = [
  { level: 5, description: '実務経験豊富' },
  { level: 4, description: '実務レベル・自立して開発可能' },
  { level: 3, description: '基本的な実装が可能' },
  { level: 2, description: '簡単なタスクに対応可能' },
  { level: 1, description: '学習中・基礎知識あり' },
]
</script>

<template>
  <div class="space-y-12">
    <!-- スキル習熟度の説明 -->
    <div class="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50">
      <h5 class="text-lg font-medium text-gray-900 mb-6 tracking-wide">スキル習熟度について</h5>
      <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div
          v-for="item in skillLevels"
          :key="item.level"
          class="flex flex-col items-center text-center space-y-3 p-4 rounded-2xl bg-gray-50/50 border border-gray-200/30"
        >
          <div class="flex items-center gap-1">
            <svg
              v-for="i in item.level"
              :key="i"
              class="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              v-for="i in 5 - item.level"
              :key="`empty-${i}`"
              class="w-4 h-4 text-gray-200"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
          <p class="text-sm text-gray-600 font-medium leading-tight">{{ item.description }}</p>
        </div>
      </div>
    </div>

    <!-- スキル一覧 -->
    <div class="grid md:grid-cols-2 gap-10">
      <div
        v-for="c in data"
        :key="c.name"
        class="group bg-white/70 backdrop-blur-sm rounded-3xl p-10 border border-gray-200/50 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 hover:border-gray-300/50 transition-all duration-500 ease-out"
      >
        <div class="space-y-8">
          <h4 class="text-2xl font-light text-gray-900 tracking-wide leading-tight">
            {{ c.name }}
          </h4>
          <div class="space-y-4">
            <div
              v-for="skill in c.items"
              :key="skill.name"
              class="flex items-center justify-between py-3 px-1 group/skill"
            >
              <span class="text-gray-800 font-medium tracking-wide text-lg">
                {{ skill.name }}
              </span>
              <div class="flex items-center gap-1">
                <svg
                  v-for="(filled, index) in renderStars(skill.level)"
                  :key="index"
                  :class="[
                    'w-5 h-5 transition-all duration-300',
                    filled
                      ? 'text-yellow-400 group-hover/skill:text-yellow-500 group-hover/skill:scale-110'
                      : 'text-gray-200 group-hover/skill:text-gray-300',
                  ]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
