## CONTEXT

Tôi đang trong giai đoạn Build & Ship — apply kiến thức từ Giai đoạn 1-3 vào product thật.

**Depth tôi cần:**

- Không phải học concept mới — là apply concept đúng cách dưới áp lực thật
- Trả lời "trong production thật, điều này trông như thế nào"
- Quyết định pragmatic — không phải lý thuyết hoàn hảo mà là đủ tốt để ship
- Nhận ra khi nào over-engineer và khi nào under-engineer
- Xử lý tình huống thật: incident, tech debt, backwards compatibility, user feedback

**Context hiện tại của tôi:**

- Product đang build: [mô tả ngắn]
- Stack đang dùng: [Next.js / Node.js / PostgreSQL / ...]
- Giai đoạn: [idea / building MVP / đã có users / đang scale]
- Vấn đề đang gặp: [mô tả cụ thể vấn đề hoặc tình huống]

---

## PHIÊN HỌC NÀY

Chọn một trong các loại sau:

**Loại A — Technical Decision**
Tôi cần quyết định về: [vấn đề kỹ thuật cụ thể]
Các option đang cân nhắc: [option 1 vs option 2]

**Loại B — Incident / Bug**
Triệu chứng đang gặp: [mô tả]
Đã thử: [những gì đã làm]
Context: [logs, error messages, recent changes]

**Loại C — Architecture Review**
Tôi đã build: [mô tả]
Lo ngại: [vấn đề performance / scale / maintainability]
Muốn biết: [nên thay đổi gì, khi nào thay đổi]

**Loại D — Process / Workflow**
Đang gặp khó khăn với: [deployment / testing / monitoring / tech debt / feedback loop]
Hệ thống hiện tại: [mô tả ngắn cách đang làm]

---

## YÊU CẦU

Dạy/tư vấn theo đúng thứ tự sau:

**1. Đánh giá tình huống**
Nhìn vào context của tôi — đây là vấn đề gì thật sự?
Nhiều khi vấn đề bề mặt không phải root cause.
Nếu thiếu thông tin để đánh giá, hỏi tôi trước.

**2. Pragmatic recommendation**
Với stage hiện tại của product, recommendation thực tế là gì?
Phân biệt rõ:

- **Làm ngay** — nếu không có sẽ gây vấn đề
- **Làm khi có signal** — đợi tới milestone cụ thể
- **Không cần làm** — over-engineering với stage này

**3. Cách implement**
Code hoặc steps cụ thể — không phải lý thuyết.
Production-ready: có error handling, logging, không hard-code.
Nếu có shortcut đủ tốt cho stage này, show shortcut trước, full solution sau.

**4. Dấu hiệu cần revisit**
Khi nào approach này không còn phù hợp?
Metrics hoặc signals nào cho biết đã đến lúc thay đổi?

**5. Bài học liên quan**
Pattern hoặc concept từ Giai đoạn 1-3 nào áp dụng ở đây?
Điều này connect tới kiến thức nào tôi đã học?

**6. Câu hỏi kiểm tra**
Chưa hỏi ngay. Đợi tôi nói **"sẵn sàng"** rồi hỏi đúng 3 câu.
_(Giai đoạn 4 chỉ cần 3 câu — focus vào decision-making, không cần test theory)_
Yêu cầu câu hỏi:

- Ít nhất 1 câu: "Nếu gặp tình huống X, bạn sẽ làm gì và tại sao"
- Ít nhất 1 câu: "Approach bạn chọn có trade-off gì mà bạn đang chấp nhận"
- Câu hỏi nên sát context product của tôi, không phải câu hỏi chung chung

---

## OUTPUT FORMAT

- Tiếng Việt
- Markdown — nhưng không cần quá formal, có thể conversational hơn
- Ưu tiên **actionable** hơn comprehensive — tôi cần làm được ngay
- Cuối bài: section **"Takeaway"** gồm 3 bullet points ngắn — decisions hoặc actions cụ thể để upload NotebookLM
- Nếu vấn đề cần thêm context, hỏi trước khi recommend

---

## ROADMAP & CONTEXT FILES

[dán roadmap Giai đoạn 4 vào đây]
[dán thêm roadmap Giai đoạn 3 nếu câu hỏi liên quan tới architecture]
