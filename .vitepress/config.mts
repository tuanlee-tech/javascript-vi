import { defineConfig } from 'vitepress'
import sidebar from './sidebar.json'

const isProd = process.env.NODE_ENV === 'production';
const repo = 'javascript-vi';
export const base = isProd ? `/${repo}/` : '/';

export default defineConfig({
  title: 'JavaScript Tiếng Việt',
  description: 'Hướng dẫn JavaScript hiện đại - Phiên bản tiếng Việt của javascript.info',
  lang: 'vi-VN',
  base: base,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}/logo.png` }],
    ['meta', { name: 'theme-color', content: '#F0DB4F' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'vi_VN' }],
    ['meta', { property: 'og:title', content: 'JavaScript Tiếng Việt' }],
    ['meta', { property: 'og:description', content: 'Hướng dẫn JavaScript hiện đại - Phiên bản tiếng Việt của javascript.info' }],
    ['meta', { property: 'og:image', content: `${base}og-image.png` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: `${base}og-image.png` }],
  ],

  themeConfig: {
    logo: `${base}/logo.png`,

    nav: [
      { text: 'Trang chủ', link: '/' },
      {
        text: 'Ngôn ngữ JS',
        link: '/1-js/01-getting-started/1-intro',
        activeMatch: '/1-js/'
      },
      {
        text: 'Trình duyệt',
        link: '/2-ui/1-document/01-browser-environment',
        activeMatch: '/2-ui/'
      },
      {
        text: 'Chủ đề khác',
        items: [
          { text: 'Frames & Windows', link: '/3-frames-and-windows/01-popup-windows' },
          { text: 'Binary data', link: '/4-binary/01-arraybuffer-binary-arrays' },
          { text: 'Network requests', link: '/5-network/01-fetch' },
          { text: 'Lưu trữ dữ liệu', link: '/6-data-storage/01-cookie' },
          { text: 'Animation', link: '/7-animation/1-bezier-curve' },
          { text: 'Web components', link: '/8-web-components/1-webcomponents-intro' },
          { text: 'Regular expressions', link: '/9-regular-expressions/01-regexp-introduction' },
        ]
      },
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tuanlee-tech/javascript-vi' }
    ],

    outline: {
      label: 'Mục lục',
      level: [2, 3]
    },

    docFooter: {
      prev: 'Bài trước',
      next: 'Bài tiếp theo'
    },

    lastUpdated: {
      text: 'Cập nhật lần cuối'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Tìm kiếm',
            buttonAriaLabel: 'Tìm kiếm'
          },
          modal: {
            noResultsText: 'Không tìm thấy kết quả',
            resetButtonTitle: 'Xóa tìm kiếm',
            footer: {
              selectText: 'chọn',
              navigateText: 'di chuyển',
              closeText: 'đóng'
            }
          }
        }
      }
    },

    returnToTopLabel: 'Về đầu trang',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Giao diện',
  },

  cleanUrls: true,
  lastUpdated: true,
  vite: {
    build: {
      chunkSizeWarningLimit: 2000,
    }
  }
})
