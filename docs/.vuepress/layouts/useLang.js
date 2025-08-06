// 组合式函数 useLang.js
import { useRoute } from 'vuepress/client'

export const useLang = () => {
  const route = useRoute()
  return route.path.startsWith('/zh/') ? 'zh-CN' : 'en-US'
}
