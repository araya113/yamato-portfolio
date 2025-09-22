export type Project = {
  title: string
  period: string
  role: string
  stack: string[]
  summary: string
  links?: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    title: '行政向け財務管理システム（ServiceNow）',
    period: '2024/12 – 2025/06',
    role: 'フロントエンド / ワークフロー設計',
    stack: ['ServiceNow', 'JavaScript'],
    summary:
      '予算編成〜承認フローまでのUIと業務プロセスを設計。画面遷移整理、UIアクション、バリデーション、権限設計を担当。',
  },
  {
    title: 'オンライン診療サービス LP/HP 制作',
    period: '2023/09 – 2024/06',
    role: 'フロントエンド',
    stack: ['JavaScript', 'Nuxt.js'],
    summary:
      'LPの構成・実装。CLS/INP 改善、計測基盤の整備、A/B テスト用のコンポーネント分割を実施。',
  },
  {
    title: 'SaaS一元管理Webサービス',
    period: '2020/09 – 2023/06',
    role: 'フロントエンド',
    stack: ['TypeScript', 'Vue.js'],
    summary:
      'SaaSアカウントの一覧・権限・コスト可視化ダッシュボード。デザインシステム導入と状態管理最適化でUXを改善。googleの拡張機能も担当。',
  },
  {
    title: '税理士向けクラウドwebサービス',
    period: '2019/10 – 2020/03',
    role: 'フロントエンド / バックエンド',
    stack: ['JavaScript', 'Ruby', 'Vue.js', 'Ruby on Rails'],
    summary:
      'バックエンドAPIおよびフロントエンドの実装。APIとの連携処理、UIコンポーネントの設計・実装を担当。',
  },
  {
    title: 'ポータルサイト用の運用ツール群の作成',
    period: '2019/06 – 2020/09',
    role: 'フロントエンド / バックエンド',
    stack: ['TypeScript', 'Node.js'],
    summary: '社内向けの管理ツール群の設計・実装。Node.jsでCLIツールを作成し、業務効率化を実現。',
  },
]
