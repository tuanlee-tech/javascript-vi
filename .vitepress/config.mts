import { defineConfig } from 'vitepress'
import sidebar from './sidebar.json'

export default defineConfig({
  title: 'JavaScript Tiếng Việt',
  description: 'Hướng dẫn JavaScript hiện đại - Phiên bản tiếng Việt của javascript.info',
  lang: 'vi-VN',

  head: [
    ['meta', { name: 'theme-color', content: '#F0DB4F' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'vi_VN' }],
    ['meta', { name: 'og:site_name', content: 'JavaScript Tiếng Việt' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

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
      { icon: 'github', link: 'https://github.com/' }
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
})
