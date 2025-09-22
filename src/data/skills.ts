export type SkillItem = {
  name: string
  level: 1 | 2 | 3 | 4 | 5
}

export type SkillCategory = {
  name: string
  items: SkillItem[]
}

export const skills: SkillCategory[] = [
  {
    name: 'Languages',
    items: [
      { name: 'TypeScript', level: 5 },
      { name: 'JavaScript', level: 5 },
      { name: 'HTML/CSS', level: 5 },
      { name: 'SQL', level: 3 },
    ],
  },
  {
    name: 'Frontend',
    items: [
      { name: 'Vue 3 / Nuxt.js', level: 5 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'React / Next.js', level: 3 },
    ],
  },
  {
    name: 'Backend',
    items: [
      { name: 'Node.js', level: 4 },
      { name: 'Express', level: 4 },
      { name: 'Prisma', level: 3 },
      { name: 'MySQL', level: 3 },
    ],
  },
  {
    name: 'Infra/Tools',
    items: [
      { name: 'Docker', level: 3 },
      { name: 'GitHub Actions', level: 4 },
      { name: 'Vite', level: 5 },
      { name: 'ESLint/Prettier', level: 4 },
    ],
  },
  {
    name: 'Others',
    items: [
      { name: 'ServiceNow', level: 3 },
      { name: 'UI/UX設計', level: 4 },
      { name: '要件定義/設計/テスト', level: 4 },
    ],
  },
]
