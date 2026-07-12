// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/factfulness',
  integrations: [
    starlight({
      title: '真確',
      description: '用數據治好你的十大直覺偏誤,看見一個比想像中更好的世界。',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css', './src/styles/sidebar-num.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        { label: '讓數據改變你的心智', slug: 'unit00' },
        {
          label: '十大直覺偏誤（一）：看世界的方式',
          items: [
            { label: '二分化直覺偏誤', slug: 'unit01' },
            { label: '負面型直覺偏誤', slug: 'unit02' },
            { label: '直線型直覺偏誤', slug: 'unit03' },
            { label: '恐懼型直覺偏誤', slug: 'unit04' },
          ],
        },
        {
          label: '十大直覺偏誤（二）：判斷比例與分類',
          items: [
            { label: '失真型直覺偏誤', slug: 'unit05' },
            { label: '概括型直覺偏誤', slug: 'unit06' },
            { label: '宿命型直覺偏誤', slug: 'unit07' },
          ],
        },
        {
          label: '十大直覺偏誤（三）：面對世界的反應',
          items: [
            { label: '單一觀點直覺偏誤', slug: 'unit08' },
            { label: '怪罪型直覺偏誤', slug: 'unit09' },
            { label: '急迫型直覺偏誤', slug: 'unit10' },
          ],
        },
        {
          label: '求真習慣的實踐',
          items: [
            { label: '求真練習的實際運用', slug: 'unit11' },
          ],
        },
        { label: '未竟的心願', slug: 'unit12' },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
