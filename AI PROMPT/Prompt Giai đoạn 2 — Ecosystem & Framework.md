## CONTEXT

Tôi đang học JavaScript Ecosystem và Framework theo lộ trình Senior+/Staff/Principal.

**Depth tôi cần:**

- Hiểu internals của framework — không phải học API
- Trả lời "framework này giải quyết vấn đề gì và cơ chế thật là gì"
- Biết khi nào không dùng một feature — không chỉ biết cách dùng
- Đủ sâu để đọc source code React/Next.js và hiểu được phần lớn
- Đủ sâu để debug production issue không có trong docs

Tôi đã làm việc với React và Node.js. Không cần giải thích API cơ bản.

---

## PHIÊN HỌC NÀY

- Phase: [số] — [tên phase]
- Chủ đề: [tên chủ đề, ví dụ: 1.3 React Server Components]
- Nội dung con: [concept cụ thể, ví dụ: RSC vs SSR, "use client" boundary, data fetching trong RSC]

---

## YÊU CẦU

Nhìn vào roadmap, xác định độ ưu tiên (🔴/🟡/🟢) của nội dung con tôi chỉ định. Dạy sâu tương ứng.

Dạy theo đúng thứ tự sau:

**1. Vấn đề được giải quyết**
Trước khi có feature/concept này, vấn đề là gì?
Tại sao team React/Next.js/Node.js quyết định build nó theo cách này?
Đây là context quan trọng để hiểu design decision.

**2. Cơ chế thật**
Bên dưới abstraction, điều gì thật sự xảy ra?
Ví dụ: React.memo không phải "tránh re-render" — nó là shallow comparison props, vẫn re-render nếu parent truyền new object reference.
Tôi cần hiểu ở mức có thể predict behavior không cần test thử.

**3. Visualize**
Diagram cho:

- Data flow (RSC → client boundary → hydration)
- Lifecycle (component mount → update → unmount)
- Request flow (browser → CDN → edge → server → DB)
  Chỉ vẽ khi giúp hiểu hơn text thuần.

**4. Ví dụ code**
Code production-level — patterns thật sự dùng trong codebase thật.
Show cả **sai cách** (cách người mới hay làm) và **đúng cách**, giải thích tại sao khác nhau.
Comment giải thích "điều đang xảy ra" không phải "cú pháp là gì".

**5. Trade-off & Khi nào không dùng**

- Dùng feature này đổi lấy gì, mất gì?
- Khi nào đây là wrong tool cho job?
- Misconception phổ biến nhất là gì?

**6. Ứng dụng thực tế**

- Pattern này hay xuất hiện trong codebase loại nào?
- Production bug phổ biến liên quan — cách nhận ra và fix
- Cách debug khi có vấn đề (DevTools, logging, profiler nào)

**7. Câu hỏi kiểm tra**
Chưa hỏi ngay. Đợi tôi nói **"sẵn sàng"** rồi hỏi đúng 5 câu.
Yêu cầu câu hỏi:

- Ít nhất 2 câu dạng "điều gì xảy ra khi... và tại sao"
- Ít nhất 1 câu dạng "so sánh A vs B trong context C"
- Ít nhất 1 câu dạng "đoạn code này có vấn đề gì và cách fix"
- Không hỏi "X là gì" — hỏi behavior và trade-off

---

## OUTPUT FORMAT

- Tiếng Việt
- Markdown đầy đủ — heading, code block, diagram
- Cuối bài: section **"Câu hỏi ôn tập"** gồm 3 câu có đáp án chi tiết để upload NotebookLM
- Không cắt ngắn — đủ sâu để sau này đọc source code framework không bị mất phương hướng
- Nếu nội dung quá rộng, chia thành nhiều buổi và nói rõ thứ tự

---

## ROADMAP

[dán roadmap Giai đoạn 2 vào đây]
