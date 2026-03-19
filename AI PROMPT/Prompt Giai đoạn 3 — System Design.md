## CONTEXT

Tôi đang học System Design và Architecture theo lộ trình Senior+/Staff/Principal.

**Depth tôi cần:**

- Không có đúng/sai tuyệt đối — chỉ có trade-off phù hợp hay không phù hợp với context
- Mỗi pattern phải đi kèm: giải quyết vấn đề gì, đổi lấy gì, khi nào không dùng
- Ví dụ từ production systems thật (Stripe, GitHub, Netflix, Shopify...)
- Đủ sâu để design một hệ thống mới và defend các quyết định với trade-off rõ ràng
- Đủ sâu để nhận ra khi nào một architecture decision là sai trong context cụ thể

Tôi đã có kinh nghiệm build production apps. Không cần giải thích concept basic.

---

## PHIÊN HỌC NÀY

- Phase: [số] — [tên phase]
- Chủ đề: [tên chủ đề, ví dụ: 2.4 Caching Architecture]
- Nội dung con: [concept cụ thể, ví dụ: Cache-aside vs Write-through, Cache stampede, Invalidation strategies]
- Context của tôi: [mô tả hệ thống đang build hoặc vấn đề đang gặp — để ví dụ sát thực tế hơn]

---

## YÊU CẦU

Nhìn vào roadmap, xác định độ ưu tiên (🔴/🟡/🟢). Với Giai đoạn 3, mọi 🔴 đều cần cover trade-off đầy đủ.

Dạy theo đúng thứ tự sau:

**1. Vấn đề được giải quyết**
Hệ thống nào gặp vấn đề này đầu tiên? Scale nào thì vấn đề này xuất hiện?
Trước khi có pattern này, người ta giải quyết như thế nào và tại sao không đủ?

**2. Cơ chế thật**
Cách pattern hoạt động ở production — không phải mô tả lý thuyết.
Bao gồm các edge cases mà docs thường bỏ qua.

**3. Visualize**
Diagram cho:

- Request/data flow qua hệ thống
- Sequence diagram cho distributed operations
- Failure scenarios (không chỉ happy path)

**4. Trade-off Analysis**
Đây là phần quan trọng nhất của Giai đoạn 3.

| Dimension   | Được | Mất |
| ----------- | ---- | --- |
| Performance | ...  | ... |
| Consistency | ...  | ... |
| Complexity  | ...  | ... |
| Cost        | ...  | ... |
| Operability | ...  | ... |

Khi nào pattern này là **wrong choice**?
Dấu hiệu nào cho thấy đang dùng sai pattern?

**5. Ví dụ từ production thật**
Công ty nào dùng approach này? Họ gặp vấn đề gì dẫn tới decision đó?
Link hoặc reference tới engineering blog nếu có.

**6. Ví dụ code**
Không phải tutorial code — là production-level implementation với error handling, edge cases, monitoring.
Show cả implementation đơn giản (đủ dùng) và implementation nâng cao (khi scale lên).

**7. Khi nào apply vào hệ thống của tôi**
Dựa trên context tôi cung cấp — khi nào thì hệ thống của tôi cần pattern này?
Signal nào để biết đã đến lúc?

**8. Câu hỏi kiểm tra**
Chưa hỏi ngay. Đợi tôi nói **"sẵn sàng"** rồi hỏi đúng 5 câu.
Yêu cầu câu hỏi:

- Ít nhất 2 câu dạng "trong context X, bạn sẽ chọn A hay B và tại sao"
- Ít nhất 1 câu scenario: "hệ thống đang gặp triệu chứng Y, vấn đề có thể là gì"
- Ít nhất 1 câu dạng "trade-off nào bạn chấp nhận khi dùng pattern này"
- Không có câu trả lời đúng/sai tuyệt đối — đánh giá quality of reasoning

---

## OUTPUT FORMAT

- Tiếng Việt
- Markdown đầy đủ — heading, table, code block, diagram
- Cuối bài: section **"Câu hỏi ôn tập"** gồm 3 câu có đáp án dạng "it depends — đây là cách reason" để upload NotebookLM
- Không cắt ngắn — system design cần context đầy đủ để hiểu đúng
- Nếu concept liên quan tới concept khác chưa học, note rõ để tôi biết học theo thứ tự nào

---

## ROADMAP

[dán roadmap Giai đoạn 3 vào đây]
