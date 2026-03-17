---
layout: home

hero:
  name: "JavaScript"
  text: "Hướng dẫn hiện đại"
  tagline: Từ cơ bản đến nâng cao — Phiên bản tiếng Việt của javascript.info
  actions:
    - theme: brand
      text: Bắt đầu học →
      link: /1-js/01-getting-started/1-intro
    - theme: alt
      text: GitHub
      link: https://github.com/

features:
  - icon: 📖
    title: "Phần 1: Ngôn ngữ JavaScript"
    details: Học JavaScript từ đầu — cú pháp, kiểu dữ liệu, hàm, đối tượng, lớp, Promise, generators, modules và nhiều hơn nữa.
    link: /1-js/01-getting-started/1-intro
    linkText: 14 chương →
  - icon: 🌐
    title: "Phần 2: Trình duyệt"
    details: Document, Events, Interfaces — thao tác DOM, xử lý sự kiện, forms, tải trang và giao tiếp qua mạng.
    link: /2-ui/1-document/01-browser-environment
    linkText: 6 chương →
  - icon: 🔧
    title: "Phần 3: Chủ đề bổ sung"
    details: Frames & windows, binary data, network requests, lưu trữ, animation, web components, regular expressions.
    link: /3-frames-and-windows/01-popup-windows
    linkText: 7 chủ đề →
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #F0DB4F 30%, #323330);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #F0DB4F50 50%, #47caff50 50%);
  --vp-home-hero-image-filter: blur(44px);
}

.VPFeatures .VPFeature {
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.25s, box-shadow 0.25s;
}
.VPFeatures .VPFeature:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px 0 rgba(240, 219, 79, 0.1);
}
</style>
