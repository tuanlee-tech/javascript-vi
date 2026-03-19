## CONTEXT

Tôi đang học JavaScript Core và Browser Internals theo lộ trình Senior+/Staff/Principal.

**Depth tôi cần:**

- Giải thích cơ chế bên trong V8/browser — không phải định nghĩa
- Trả lời "tại sao JS hoạt động như vậy" không phải "cách dùng như thế nào"
- Ví dụ production-level, có comment giải thích điều đang xảy ra trong engine
- Đủ sâu để debug memory leak, explain event loop cho người khác, review code và biết tại sao cách này chậm hơn cách kia

Tôi đã biết JS cơ bản. Không cần giải thích syntax.

---

## PHIÊN HỌC NÀY

- Phase: [số] — [tên phase]
- Chủ đề: [tên chủ đề, ví dụ: 1.2 Memory Model]
- Nội dung con: [concept cụ thể, ví dụ: Stack vs Heap, Heap allocation, reference types]

---

## YÊU CẦU

Nhìn vào roadmap, xác định độ ưu tiên (🔴/🟡/🟢) của nội dung con tôi chỉ định. Dạy sâu tương ứng.

Dạy theo đúng thứ tự sau:

**1. Cơ chế thật**
Điều gì thật sự xảy ra bên trong V8 hoặc browser khi đoạn code này chạy?
Đi từ cơ chế, không từ định nghĩa. Tôi cần hiểu engine đang làm gì, không phải spec nói gì.

**2. Visualize**
Dùng ASCII/text diagram trong markdown để minh hoạ:

- Memory layout (stack frames, heap objects, pointers)
- Execution flow (event loop phases, call stack changes)
- Scope chain, prototype chain
  Chỉ vẽ khi visual thật sự giúp hiểu hơn text.

**3. Ví dụ code**
Code gần với thực tế — không phải `foo`, `bar`.
Mỗi ví dụ cần comment giải thích điều đang xảy ra bên trong engine tại dòng đó.
Nếu có bug phổ biến liên quan, show bug trước rồi show fix.

**4. Ứng dụng thực tế**

- Concept này ảnh hưởng tới performance như thế nào trong thực tế?
- Hay gặp ở đâu: React rendering, Node.js server, debug tool nào?
- Bug phổ biến liên quan, cách nhận ra bằng DevTools

**5. Câu hỏi kiểm tra**
Chưa hỏi ngay. Đợi tôi nói **"sẵn sàng"** rồi hỏi đúng 5 câu.
Yêu cầu câu hỏi:

- Ít nhất 3 câu dạng "tại sao" hoặc "điều gì xảy ra khi..."
- Không hỏi định nghĩa — hỏi cơ chế
- Ít nhất 1 câu dạng "đoạn code này có vấn đề gì?"

---

## OUTPUT FORMAT

- Tiếng Việt
- Markdown đầy đủ — heading, code block, diagram
- Cuối bài: section **"Câu hỏi ôn tập"** gồm 3 câu có đáp án chi tiết để upload NotebookLM
- Không cắt ngắn vì sợ dài — đủ sâu để không cần đọc thêm nguồn khác cho nội dung này
- Nếu nội dung quá rộng, đề xuất chia thành nhiều buổi

---

## ROADMAP

[dán roadmap Giai đoạn 1 vào đây]
