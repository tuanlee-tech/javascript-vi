# JavaScript Fullstack — Roadmap Senior+ / Staff / Principal

**Mục tiêu:** Không có lỗ hổng. Hiểu sâu từ engine tới pixel.  
**Quy ước:**  
- 🔴 **PHẢI BIẾT** — Không có là thiếu nền tảng  
- 🟡 **NÊN BIẾT** — Senior thường có, giúp debug và design tốt hơn  
- 🟢 **BIẾT THÊM LÀ TỐT** — Staff/Principal territory, competitive advantage  

---

## PHASE 0 — Tư duy trước khi học

Học lại từ đầu không có nghĩa là học chậm lại. Có nghĩa là lần này học đúng chiều:

> Đừng học syntax. Học **tại sao** syntax đó tồn tại.  
> Đừng học API. Học **vấn đề** API đó giải quyết.  
> Đừng học pattern. Học **trade-off** của pattern đó.

Mỗi concept học xong phải trả lời được 3 câu:
1. Cơ chế thật là gì? (không phải định nghĩa, là cơ chế)
2. Nó giải quyết vấn đề gì?
3. Khi nào KHÔNG nên dùng?

---

## LỊCH SỬ PHÁT TRIỂN — ECMAScript Versions

*Hiểu feature nào ra đời khi nào giúp bạn biết tại sao nó được thiết kế như vậy, và tại sao code cũ viết khác code mới.*

---

### ES1 — ES3 (1997–1999) — Nền móng

Giai đoạn JavaScript còn là ngôn ngữ đơn giản cho browser scripting. Hầu hết concepts cơ bản được đặt nền ở đây.

- `var`, function, prototype chain, closure (cơ chế đã có từ đây)
- `try/catch`, `typeof`, `instanceof`
- `Array`, `String`, `Math` built-ins cơ bản
- Coercion rules, `==` abstract equality algorithm

> Tại sao quan trọng: Nhiều quirks của JS (typeof null === 'object', var hoisting) đến từ giai đoạn này. Hiểu lịch sử = hiểu tại sao không fix được.

---

### ES4 (bị huỷ) — Bài học về committee

ES4 bị huỷ vì quá tham vọng — thêm static typing, class, namespace. Không đạt được đồng thuận giữa các bên (Microsoft, Mozilla, Adobe). Dẫn tới ES3.1 → sau này thành ES5.

> Tại sao quan trọng: Giải thích tại sao JS đi con đường "gradual enhancement" thay vì redesign mạnh.

---

### ES5 (2009) — Strict mode & Object control

Bước ngoặt đầu tiên sau 10 năm. Browser support: IE9+, tất cả modern browsers.

| Feature | Ghi chú |
|---|---|
| `'use strict'` | Bật strict mode, bắt silent errors |
| `Object.create()` | Prototypal inheritance rõ ràng hơn |
| `Object.defineProperty()` | Property descriptors: writable, enumerable, configurable |
| `Object.freeze()`, `Object.seal()` | Immutability cơ bản |
| `Object.keys()`, `Object.values()` | Iterate object |
| `Array.isArray()` | Fix typeof [] === 'object' |
| `Array.prototype.forEach/map/filter/reduce` | Functional array methods |
| `JSON.parse()`, `JSON.stringify()` | Native JSON support |
| `Function.prototype.bind()` | Explicit this binding |
| `getter/setter` | Accessor properties |

> Codebase cũ dùng nhiều `.bind(this)` và `'use strict'` — đây là lý do tại sao.

---

### ES6 / ES2015 — Cuộc cách mạng lớn nhất

Phiên bản thay đổi JS nhiều nhất. Hầu hết "modern JS" bắt đầu từ đây. Mất 6 năm để ra (2009→2015) vì scope quá lớn. Từ ES6 trở đi TC39 chuyển sang release hàng năm để tránh lặp lại.

| Feature | Giải quyết vấn đề gì |
|---|---|
| `let`, `const` | Fix var hoisting bug, tạo block scope |
| Arrow functions `=>` | Fix this binding trong callback |
| Template literals `` ` `` | Fix string concatenation hell |
| Destructuring `{ a, b } = obj` | Unpack object/array gọn hơn |
| Default parameters | Thay thế `arg = arg \|\| default` pattern |
| Rest `...args` / Spread `...arr` | Variadic functions, shallow copy |
| Classes | Syntax rõ ràng hơn cho prototype-based OOP |
| Modules `import/export` | Thay thế CommonJS/AMD/IIFE module patterns |
| Promises | Fix callback hell |
| Generators `function*` | Lazy evaluation, async control flow |
| `Symbol` | Unique keys, well-known symbols |
| `Map`, `Set`, `WeakMap`, `WeakSet` | Proper data structures |
| `for...of` | Iterate bất kỳ iterable |
| `Proxy`, `Reflect` | Metaprogramming |
| `Array.from()`, `Array.find()`, `Array.includes()` | Array helpers |
| `Object.assign()` | Shallow merge/clone |
| `String.prototype.includes/startsWith/endsWith` | String helpers |
| `Promise` | Async programming |

> ES6 là lý do tại sao Babel ra đời — transpile ES6 xuống ES5 cho browser cũ.

---

### ES2016 (ES7) — Nhỏ nhưng quan trọng

TC39 bắt đầu release nhỏ hàng năm từ đây.

| Feature | Ghi chú |
|---|---|
| `Array.prototype.includes()` | Thay thế `indexOf !== -1` |
| Exponentiation operator `**` | `2 ** 10` thay vì `Math.pow(2, 10)` |

---

### ES2017 (ES8) — Async/Await ra đời

| Feature | Ghi chú |
|---|---|
| `async/await` | Syntax sugar trên Promise — game changer |
| `Object.entries()`, `Object.values()` | Iterate object như array |
| `String.prototype.padStart/padEnd` | String formatting |
| `Object.getOwnPropertyDescriptors()` | Deep copy với descriptors |
| Trailing commas trong function params | Minor syntax |
| `SharedArrayBuffer`, `Atomics` | Multi-threaded memory (bị disable sau Spectre) |

> async/await là lý do 90% code async hiện đại viết theo style này thay vì `.then()` chain.

---

### ES2018 (ES9) — Async iteration & Rest/Spread cho Object

| Feature | Ghi chú |
|---|---|
| Async iteration `for await...of` | Iterate async sources (streams, paginated APIs) |
| Async generators | Kết hợp generator + async |
| Object rest/spread `{ ...obj }` | Trước chỉ có array spread, giờ có object spread |
| `Promise.finally()` | Cleanup sau promise dù resolve hay reject |
| Named capture groups trong Regex | `(?<year>\d{4})` |
| `s` (dotAll) flag trong Regex | `.` match cả newline |

---

### ES2019 (ES10)

| Feature | Ghi chú |
|---|---|
| `Array.prototype.flat()`, `flatMap()` | Flatten nested arrays |
| `Object.fromEntries()` | Ngược lại của `Object.entries()` |
| `String.prototype.trimStart/trimEnd()` | Trim một phía |
| Optional catch binding | `catch` không cần `(e)` nếu không dùng |
| `Array.prototype.sort()` stable sort | Spec yêu cầu stable sort |
| `Function.prototype.toString()` rework | Trả về source code chính xác hơn |

---

### ES2020 (ES11) — Một trong những release quan trọng

| Feature | Ghi chú |
|---|---|
| Optional chaining `?.` | `obj?.a?.b` thay vì `obj && obj.a && obj.a.b` |
| Nullish coalescing `??` | `a ?? b` — chỉ fallback khi null/undefined, khác `\|\|` |
| `BigInt` | Số nguyên lớn hơn `Number.MAX_SAFE_INTEGER` |
| `Promise.allSettled()` | Chờ tất cả, không reject khi có 1 cái fail |
| `globalThis` | Unified global object (window/global/self) |
| Dynamic `import()` | Lazy loading modules |
| `String.prototype.matchAll()` | Tất cả regex matches |
| Nullish coalescing assignment `??=` | |

> `?.` và `??` giải quyết 2 pain point lớn nhất của JS — code cũ không có 2 cái này phải viết rất dài.

---

### ES2021 (ES12)

| Feature | Ghi chú |
|---|---|
| `String.prototype.replaceAll()` | Thay thế tất cả, không cần regex `/g` |
| `Promise.any()` | Resolve khi có 1 cái resolve, reject khi tất cả reject |
| Logical assignment `&&=`, `\|\|=`, `??=` | Shorthand assignment kết hợp logic |
| Numeric separators `1_000_000` | Dễ đọc số lớn |
| WeakRef, FinalizationRegistry | Weak references, GC callbacks |

---

### ES2022 (ES13)

| Feature | Ghi chú |
|---|---|
| Class fields (public & private `#`) | Trước phải dùng closure hoặc WeakMap |
| Static class fields & methods | `static #count = 0` |
| `Array.prototype.at()` | `arr.at(-1)` thay vì `arr[arr.length - 1]` |
| `Object.hasOwn()` | Thay thế `hasOwnProperty` an toàn hơn |
| `Error.cause` | `new Error('msg', { cause: originalError })` |
| Top-level `await` | `await` ngoài async function (trong module) |
| `Array.prototype.findLast/findLastIndex()` | Tìm từ cuối mảng |

---

### ES2023 (ES14)

| Feature | Ghi chú |
|---|---|
| `Array.prototype.toSorted/toReversed/toSpliced()` | Non-mutating versions |
| `Array.prototype.with()` | Non-mutating index replacement |
| `Array.findLast/findLastIndex()` | (chính thức, có trong ES2022 draft) |
| Hashbang grammar `#!` | Shebang cho Node.js scripts |
| WeakMap với Symbol keys | |

---

### ES2024 (ES15)

| Feature | Ghi chú |
|---|---|
| `Promise.withResolvers()` | Expose resolve/reject ra ngoài Promise constructor |
| `Object.groupBy()`, `Map.groupBy()` | Group array items theo key |
| `ArrayBuffer.prototype.resize/transfer()` | Resizable buffers |
| RegExp `/v` flag | Unicode set notation |
| `String.prototype.isWellFormed()` | Check/fix lone surrogates |

---

### Stage 3 đang chờ vào spec (sắp có)

Theo dõi tại: https://github.com/tc39/proposals

| Proposal | Tình trạng |
|---|---|
| Decorators | Stage 3 — đã implement trong TypeScript/Babel |
| `Iterator.prototype` methods | Stage 3 — `.map/.filter` trực tiếp trên iterator |
| `Array.fromAsync()` | Stage 3 |
| Temporal API | Stage 3 — thay thế `Date` object |
| `Explicit Resource Management` `using` | Stage 3 |

> **Temporal** là thay đổi lớn nhất sắp tới — `Date` object hiện tại nổi tiếng là broken, Temporal fix toàn bộ.

---

### Tóm tắt: Feature nào từ version nào

```
var, closure, prototype          →  ES1-ES3 (1997-1999)
strict mode, Object.create       →  ES5     (2009)
let/const, arrow fn, class,
Promise, module, Map/Set         →  ES6     (2015)  ← quan trọng nhất
async/await                      →  ES2017
Object spread, async iteration   →  ES2018
flat, flatMap, fromEntries       →  ES2019
optional chaining ?., ??         →  ES2020  ← quan trọng thứ 2
replaceAll, Promise.any          →  ES2021
class private #, Array.at()      →  ES2022
toSorted, toReversed (immutable) →  ES2023
Promise.withResolvers, groupBy   →  ES2024
Decorators, Temporal             →  Sắp tới
```

---

### Tại sao cần biết điều này khi học

Khi gặp một pattern lạ trong codebase cũ, biết version history giúp bạn hiểu ngay: đây là workaround của thời chưa có feature X, không phải best practice. Ví dụ:

```javascript
// Codebase 2014 — trước ES6
var self = this; // workaround cho this binding
setTimeout(function() {
  self.doSomething();
}, 100);

// Sau ES6 — arrow function fix this
setTimeout(() => {
  this.doSomething();
}, 100);

// Codebase 2019 — trước optional chaining
var name = user && user.profile && user.profile.name;

// Sau ES2020
var name = user?.profile?.name;
```

---

## PHASE 1 — JavaScript Engine & Runtime Internals

*Nền tảng của mọi thứ. Không có phần này, mọi kiến thức sau đều là học thuộc lòng.*

### 1.1 — How JS Engine Works
- 🔴 Parsing → AST → Bytecode → JIT Compilation
- 🔴 V8 pipeline: Ignition (interpreter) → TurboFan (optimizing compiler)
- 🔴 Hidden Classes & Inline Caches — tại sao thứ tự property quan trọng
- 🟡 Deoptimization — khi nào V8 "bail out" khỏi optimized code
- 🟢 Speculative optimization, Maglev (V8 mid-tier compiler)
- 🟢 SpiderMonkey (Firefox), JavaScriptCore (Safari) — so sánh engines

### 1.2 — Memory Model
- 🔴 Stack vs Heap — cái gì nằm ở đâu
- 🔴 Call Stack — Execution Context, stack frames
- 🔴 Heap — object allocation, reference types
- 🔴 Garbage Collection: Mark & Sweep algorithm
- 🟡 Generational GC: Young Generation (Scavenger) vs Old Generation (Major GC)
- 🟡 Memory leak patterns: detached DOM nodes, forgotten timers, closures giữ large data
- 🟡 WeakRef và FinalizationRegistry — khi nào dùng
- 🟢 GC tuning, heap snapshots, memory profiling trong DevTools

### 1.3 — Event Loop (PHẢI hiểu thật sâu)
- 🔴 Call Stack, Web APIs, Callback Queue, Microtask Queue
- 🔴 Thứ tự ưu tiên: Call Stack → Microtasks → Macrotasks
- 🔴 Tại sao Promise callbacks chạy trước setTimeout
- 🔴 requestAnimationFrame — nằm ở đâu trong event loop
- 🟡 queueMicrotask() API
- 🟡 Scheduler API (navigator.scheduling.isInputPending)
- 🟢 Worker event loops — khác main thread như thế nào
- 🟢 Node.js event loop phases (timers, I/O, idle, poll, check, close)

### 📚 Tài liệu — Phase 1

| Tài liệu | Link | Ghi chú |
|---|---|---|
| javascript.info — Advanced Functions | https://javascript.info/advanced-functions | Execution context, closure, scope chain |
| Jake Archibald — In The Loop (video) | https://www.youtube.com/watch?v=cCOL7MC4Pl0 | Video tốt nhất về Event Loop, có animation |
| Lydia Hallie — JS Visualized Series | https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif | GIF animation minh hoạ từng bước |
| V8 Blog — Hidden Classes | https://v8.dev/blog/fast-properties | Tại sao object shape quan trọng |
| V8 Blog — Ignition & TurboFan | https://v8.dev/blog/ignition-interpreter | Pipeline của V8 engine |
| MDN — Memory Management | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management | GC, memory leaks |

---

## PHASE 2 — JavaScript Core Language (Sâu, không bỏ qua gì)

### 2.1 — Types & Type System
- 🔴 Primitive types: undefined, null, boolean, number, bigint, string, symbol
- 🔴 typeof operator — quirks (typeof null === 'object')
- 🔴 Type coercion: implicit vs explicit, Abstract Equality (==) algorithm
- 🔴 Falsy/truthy values — tất cả các edge case
- 🔴 NaN — tại sao NaN !== NaN, Number.isNaN vs isNaN
- 🟡 Symbol — use cases thực tế: well-known symbols (Symbol.iterator, Symbol.toPrimitive)
- 🟡 BigInt — khi nào cần, limitations
- 🟢 Type branding pattern (nominal typing trong structural type system)

### 2.2 — Variables & Scoping
- 🔴 var / let / const — hoisting, TDZ (Temporal Dead Zone)
- 🔴 Function scope vs Block scope
- 🔴 Lexical scoping (static scoping) — scope xác định lúc viết code, không phải lúc chạy
- 🔴 Scope chain — lookup mechanism
- 🔴 Hoisting — function declarations vs function expressions vs var vs let/const
- 🟡 Module scope — khác global scope như thế nào
- 🟢 Eval scope — tại sao eval phá vỡ optimizations

### 2.3 — Closures (đã học sâu)
- 🔴 [[Environment]] reference
- 🔴 Lexical Environment lifecycle
- 🔴 Sharing model — khi nào share, khi nào không
- 🔴 3 loại bug: shared binding, async timing, stale closure
- 🟡 Closure-based private state vs class private fields (#) — trade-offs
- 🟡 Memory implications của closures trong hot paths

### 2.4 — Functions (mọi khía cạnh)
- 🔴 Function declaration vs expression vs arrow function — khác nhau thật sự
- 🔴 this binding: implicit, explicit (call/apply/bind), new binding, arrow (lexical this)
- 🔴 this trong event handlers, callbacks, class methods
- 🔴 arguments object vs rest parameters
- 🔴 Default parameters — evaluation timing (lazy, mỗi lần gọi)
- 🔴 Spread operator — shallow copy implications
- 🔴 Pure functions — định nghĩa thực sự, side effects
- 🟡 Function.prototype.toString() — source code retrieval
- 🟡 Tail call optimization — lý thuyết và tại sao browsers không implement
- 🟡 Generator functions — lazy evaluation, custom iterators
- 🟡 Async generators — streaming data patterns
- 🟢 Function composition patterns — compose, pipe
- 🟢 Trampolining — giải quyết stack overflow cho đệ quy sâu

### 2.5 — Prototype & Object System
- 🔴 Prototype chain — [[Prototype]], Object.getPrototypeOf
- 🔴 prototype vs __proto__ vs Object.getPrototypeOf — phân biệt
- 🔴 Inheritance: prototypal vs classical, Object.create
- 🔴 Property descriptors: value, writable, enumerable, configurable
- 🔴 Object.defineProperty, Object.defineProperties
- 🔴 Getter/Setter — khi nào dùng, khi nào không
- 🔴 hasOwnProperty vs in operator vs Object.hasOwn
- 🟡 Object.freeze, Object.seal, Object.preventExtensions — khác nhau
- 🟡 Reflection API: Reflect object
- 🟡 Proxy — use cases: validation, logging, reactive systems
- 🟢 Proxy performance cost — khi nào không nên dùng
- 🟢 Metaprogramming patterns với Proxy + Reflect

### 2.6 — Classes
- 🔴 Class syntax — syntactic sugar trên prototype chain
- 🔴 Constructor, instance methods, static methods
- 🔴 Private fields (#) — thật sự private, không phải convention
- 🔴 Inheritance với extends, super — cách hoạt động thật
- 🔴 Class fields — declaration, initialization order
- 🟡 Abstract class pattern (JS không có abstract, cách simulate)
- 🟡 Mixin pattern — multiple inheritance trong JS
- 🟢 Class decorators (TC39 Stage 3)

### 2.7 — Asynchronous JavaScript (cực kỳ quan trọng)
- 🔴 Callback pattern — callback hell, error-first convention
- 🔴 Promise: states (pending/fulfilled/rejected), chaining, error propagation
- 🔴 Promise combinators: all, allSettled, race, any — khi nào dùng cái nào
- 🔴 async/await — desugaring sang Promise, error handling
- 🔴 try/catch với async/await — các edge cases
- 🔴 Unhandled promise rejection — tại sao nguy hiểm
- 🟡 Promise cancellation patterns — AbortController
- 🟡 Promise.withResolvers() (ES2024)
- 🟡 Async iteration: for-await-of, Symbol.asyncIterator
- 🟡 Concurrency control: limiting parallel requests, semaphore pattern
- 🟢 Structured concurrency concepts
- 🟢 Promise scheduling và microtask queue internals

### 2.8 — Iterators & Generators
- 🔴 Iterator protocol: next(), { value, done }
- 🔴 Iterable protocol: Symbol.iterator
- 🔴 Built-in iterables: Array, String, Map, Set, NodeList
- 🟡 Generator functions: function*, yield, yield*
- 🟡 Infinite sequences với generators
- 🟡 Generator-based async control flow (trước async/await)
- 🟢 Custom iterable data structures
- 🟢 Lazy evaluation với generators cho large datasets

### 2.9 — Modules
- 🔴 ES Modules: import/export, named vs default
- 🔴 Module scope — mỗi module là một scope riêng
- 🔴 Live bindings — exported value thay đổi, importer thấy ngay
- 🔴 Circular dependencies — cách JS xử lý, cách tránh
- 🟡 Dynamic import() — code splitting, lazy loading
- 🟡 import.meta — module metadata
- 🟡 Module resolution algorithm (Node.js)
- 🟢 ES Module in browsers — type="module", CORS implications
- 🟢 Import maps
- 🟢 Module federation (Webpack 5)

### 2.10 — Error Handling
- 🔴 Error types: Error, TypeError, RangeError, ReferenceError, SyntaxError
- 🔴 Custom error classes
- 🔴 Error boundaries (React), global error handlers
- 🔴 window.onerror vs window.addEventListener('error')
- 🔴 unhandledrejection event
- 🟡 Error cause (ES2022): new Error('msg', { cause: originalError })
- 🟡 Stack trace manipulation — Error.captureStackTrace (V8)
- 🟢 Structured error logging patterns
- 🟢 Result type pattern (thay vì throw/catch cho expected errors)

### 2.11 — Data Structures & Collections
- 🔴 Array methods đầy đủ — map, filter, reduce, flat, flatMap, findIndex, at, v.v.
- 🔴 Object methods — keys, values, entries, fromEntries, assign, spread
- 🔴 Map vs Object — khi nào dùng cái nào, key types, ordering
- 🔴 Set — deduplication, set operations pattern
- 🔴 WeakMap — private data pattern, không block GC
- 🔴 WeakSet — use cases
- 🟡 Array.from, Array.of
- 🟡 Typed Arrays — Int8Array, Float32Array, v.v. — dùng trong WebGL, audio
- 🟡 ArrayBuffer, DataView — binary data manipulation
- 🟢 SharedArrayBuffer, Atomics — shared memory giữa Workers

### 📚 Tài liệu — Phase 2

| Tài liệu | Link | Ghi chú |
|---|---|---|
| javascript.info | https://javascript.info | Đọc toàn bộ phần Core — tốt nhất cho nền tảng |
| You Don't Know JS — Scope & Closures | https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures | Free trên GitHub, sâu nhất về scope |
| You Don't Know JS — this & Prototypes | https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/objects-classes | this binding, prototype chain |
| You Don't Know JS — Types & Grammar | https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/types-grammar | Type coercion, edge cases |
| You Don't Know JS — Async & Performance | https://github.com/getify/You-Dont-Know-JS/tree/1st-ed/async%20%26%20performance | Promise, generators, async patterns |
| MDN Web Docs | https://developer.mozilla.org/en-US/docs/Web/JavaScript | Dùng như từ điển tra cứu |
| TC39 Proposals | https://github.com/tc39/proposals | Theo dõi tính năng mới đang vào spec |
| Exploring JS (Dr. Axel) | https://exploringjs.com | Sách free online, chi tiết về ES6+ |

---

## PHASE 3 — Browser Internals & Rendering

*Đây là thứ phân biệt frontend engineer giỏi với người bình thường.*

### 3.1 — How Browser Works
- 🔴 Navigation flow: DNS → TCP → TLS → HTTP → HTML parsing
- 🔴 Critical Rendering Path: HTML→DOM, CSS→CSSOM, DOM+CSSOM→Render Tree→Layout→Paint→Composite
- 🔴 Parser blocking vs async vs defer scripts
- 🔴 Resource hints: preload, prefetch, preconnect, dns-prefetch
- 🟡 Prerender, speculation rules API
- 🟡 Back/Forward Cache (bfcache) — tại sao unload event phá vỡ nó
- 🟢 Browser process architecture: Browser process, Renderer process, GPU process, Network process
- 🟢 Site isolation — security model

### 3.2 — DOM (Document Object Model)
- 🔴 DOM tree structure — Node types (Element, Text, Comment, DocumentFragment)
- 🔴 DOM traversal: parentNode, children, querySelector, querySelectorAll
- 🔴 DOM manipulation: createElement, appendChild, insertBefore, replaceChild, removeChild
- 🔴 innerHTML vs textContent vs innerText — khác nhau và security implications
- 🔴 DocumentFragment — batch DOM operations
- 🔴 DOM diffing — concept cơ bản của Virtual DOM
- 🟡 MutationObserver — watch DOM changes
- 🟡 ResizeObserver — element size changes
- 🟡 IntersectionObserver — viewport intersection (lazy loading, infinite scroll)
- 🟢 DOM parsing và serialization: DOMParser, XMLSerializer

### 3.3 — Events (sâu)
- 🔴 Event propagation: capture phase → target phase → bubble phase
- 🔴 addEventListener options: capture, once, passive
- 🔴 Event delegation pattern — tại sao hiệu quả hơn
- 🔴 stopPropagation vs stopImmediatePropagation vs preventDefault
- 🔴 Custom events: CustomEvent, dispatchEvent
- 🟡 Pointer events vs Mouse events vs Touch events
- 🟡 Keyboard events — keydown, keyup, keypress (deprecated), compositionstart/end (IME)
- 🟡 passive event listeners — tại sao scroll performance phụ thuộc vào đây
- 🟢 Input events vs Change events — timing khác nhau
- 🟢 Event loop và event dispatch ordering

### 3.4 — Pixel Pipeline (CRITICAL cho performance)

Đây là lý do tại sao một số animation mượt, một số giật.

```
JavaScript → Style → Layout → Paint → Composite
```

- 🔴 **Layout (Reflow):** Thay đổi geometry (width, height, top, left) → browser tính toán lại vị trí tất cả elements. **Đắt nhất.**
- 🔴 **Paint:** Thay đổi visual (color, background, shadow) → browser vẽ lại pixels. Đắt.
- 🔴 **Composite:** Thay đổi transform, opacity → chỉ move/blend các layers đã paint. **Rẻ nhất.**
- 🔴 Properties chỉ trigger composite: `transform`, `opacity` — đây là lý do dùng chúng cho animation
- 🔴 Properties trigger layout: width, height, top, left, padding, margin, font-size, v.v.
- 🔴 Layout thrashing — đọc và ghi DOM xen kẽ trong loop, mỗi đọc force reflow
- 🔴 will-change CSS property — tạo compositing layer, trade-off memory vs performance
- 🟡 CSS containment: contain property — isolate layout/paint scope
- 🟡 content-visibility: auto — skip rendering off-screen content
- 🟡 Layer promotion — tại sao không nên promote mọi thứ
- 🟢 Chrome Layers panel — debug compositing
- 🟢 GPU memory budget — quá nhiều layers là vấn đề

**Layout Thrashing Example (phải thuộc):**
```javascript
// BUG: thrashing — đọc/ghi xen kẽ, mỗi đọc force reflow
elements.forEach(el => {
  const height = el.offsetHeight; // ĐỌC → force reflow
  el.style.height = height * 2 + 'px'; // GHI
  // Vòng lặp tiếp theo đọc lại → force reflow lần nữa
});

// FIX: đọc hết rồi ghi hết
const heights = elements.map(el => el.offsetHeight); // Đọc tất cả
elements.forEach((el, i) => {
  el.style.height = heights[i] * 2 + 'px'; // Ghi tất cả
});

// FIX tốt hơn: dùng requestAnimationFrame
function updateHeights() {
  const heights = elements.map(el => el.offsetHeight);
  requestAnimationFrame(() => {
    elements.forEach((el, i) => {
      el.style.height = heights[i] * 2 + 'px';
    });
  });
}
```

### 3.5 — requestAnimationFrame & Animation
- 🔴 rAF callback timing — chạy trước mỗi frame repaint (~16.67ms ở 60fps)
- 🔴 rAF vs setTimeout(fn, 0) — tại sao rAF tốt hơn cho animation
- 🔴 cancelAnimationFrame
- 🔴 CSS Animations vs JS Animations — khi nào dùng cái nào
- 🔴 Web Animations API (WAAPI) — programmatic animations với browser-native performance
- 🟡 Animation loop pattern — delta time, frame-rate independent animation
- 🟡 requestIdleCallback — tasks trong idle time
- 🟡 Chrome DevTools Performance panel — frame analysis
- 🟢 OffscreenCanvas cho heavy canvas work trong Worker

### 3.6 — CSS & JS Interaction
- 🔴 getComputedStyle — đọc resolved styles
- 🔴 getBoundingClientRect — element position, dimensions, trigger reflow
- 🔴 offsetWidth/Height vs clientWidth/Height vs scrollWidth/Height — khác nhau
- 🔴 CSS Custom Properties (variables) đọc/ghi từ JS
- 🟡 CSS Houdini: Paint Worklet, Layout API, Animation Worklet
- 🟡 CSS typed OM (CSSStyleValue, CSS.px(), v.v.)
- 🟢 Stylesheet manipulation: CSSStyleSheet API

### 📚 Tài liệu — Phase 3

| Tài liệu | Link | Ghi chú |
|---|---|---|
| How Browsers Work — Tali Garsiel | https://web.dev/articles/howbrowserswork | Bài viết đầy đủ nhất về browser internals |
| web.dev — Critical Rendering Path | https://web.dev/learn/performance/understanding-the-critical-path | CRP đầy đủ từ Google |
| CSS Triggers | https://csstriggers.com | Tra property nào trigger layout/paint/composite |
| Chrome DevTools Docs | https://developer.chrome.com/docs/devtools | Học DevTools như một tool riêng |
| Paul Lewis — Rendering Performance | https://web.dev/explore/fast | Layout thrashing, rAF, layer promotion |
| Jake Archibald — Rendering (video) | https://www.youtube.com/watch?v=SmE4OwHztCc | Pixel pipeline visualized |
| MDN — MutationObserver | https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver | DOM observation APIs |

---

## PHASE 4 — Performance Engineering

### 4.1 — Measuring Performance
- 🔴 Core Web Vitals: LCP, INP (thay FID từ 2024), CLS — định nghĩa và ngưỡng
- 🔴 Performance API: performance.now(), performance.mark(), performance.measure()
- 🔴 Navigation Timing API
- 🔴 Resource Timing API
- 🟡 PerformanceObserver — observe LCP, FID, CLS, long tasks
- 🟡 Long Tasks API — task > 50ms là long task
- 🟡 User Timing API — custom marks và measures
- 🟢 Real User Monitoring (RUM) patterns
- 🟢 Chrome UX Report (CrUX) data

### 4.2 — JavaScript Performance
- 🔴 Time complexity awareness trong hot paths
- 🔴 Avoiding unnecessary work: memoization, caching
- 🔴 Debounce/throttle cho frequent events
- 🔴 Code splitting: dynamic import(), route-based splitting
- 🔴 Tree shaking — side-effect-free modules
- 🟡 V8 optimization tips: monomorphic functions, stable object shapes
- 🟡 Avoiding deoptimization: không mix types trong arrays/objects
- 🟡 Web Workers — offload heavy computation khỏi main thread
- 🟡 Task scheduling: chunking long tasks với yield (scheduler.yield, setTimeout(0))
- 🟢 WASM cho performance-critical code
- 🟢 SharedArrayBuffer + Atomics cho worker communication

### 4.3 — Network Performance
- 🔴 HTTP/1.1 vs HTTP/2 vs HTTP/3 — multiplexing, head-of-line blocking
- 🔴 Caching: Cache-Control, ETag, Last-Modified
- 🔴 Service Workers — offline, cache strategies (cache-first, network-first, stale-while-revalidate)
- 🔴 Bundle size optimization: minification, compression (gzip, brotli)
- 🟡 CDN concepts — edge caching
- 🟡 Image optimization: WebP, AVIF, srcset, lazy loading
- 🟡 Font optimization: font-display, preload, subsetting
- 🟢 103 Early Hints
- 🟢 Priority Hints (fetchpriority attribute)

### 4.4 — Rendering Performance
- 🔴 Virtual scrolling / windowing — render chỉ visible items (react-window, TanStack Virtual)
- 🔴 Image lazy loading: IntersectionObserver pattern, loading="lazy"
- 🔴 Skeleton screens vs spinners — UX và performance perception
- 🟡 Server-Side Rendering (SSR) vs Static Site Generation (SSG) vs Client-Side Rendering (CSR) — trade-offs thật
- 🟡 Streaming SSR — React 18 Suspense, server components
- 🟡 Partial Hydration, Islands Architecture
- 🟢 Resumability (Qwik concept) — so sánh với hydration

### 📚 Tài liệu — Phase 4

| Tài liệu | Link | Ghi chú |
|---|---|---|
| web.dev/performance | https://web.dev/learn/performance | Core Web Vitals, LCP, INP, CLS |
| High Performance Browser Networking | https://hpbn.co | Free online — HTTP, TCP, TLS, CDN sâu nhất |
| web.dev — Core Web Vitals | https://web.dev/explore/learn-core-web-vitals | Đo và cải thiện CWV |
| Chrome DevTools Performance Tab | https://developer.chrome.com/docs/devtools/performance | Flame chart, long tasks |
| web.dev — Code Splitting | https://web.dev/articles/code-splitting-with-dynamic-imports-in-nextjs | Dynamic import patterns |
| Smashing Magazine — Virtual Scroll | https://www.smashingmagazine.com/2016/03/how-to-build-a-virtual-scroll | Windowing/virtual list concept |

---

## PHASE 5 — Browser APIs

### 5.1 — Storage
- 🔴 localStorage / sessionStorage — synchronous, blocks main thread, size limits
- 🔴 IndexedDB — async, large data, structured queries
- 🔴 Cookies — attributes: HttpOnly, Secure, SameSite, Path, Expires
- 🔴 Cache API (Service Worker cache)
- 🟡 Storage Quotas và eviction policies
- 🟡 StorageManager API — estimate storage usage
- 🟢 OPFS (Origin Private File System) — high-performance local file access

### 5.2 — Networking APIs
- 🔴 fetch API — options, headers, body, response methods
- 🔴 AbortController — cancel fetch requests
- 🔴 CORS — preflight, credentials, tại sao tồn tại
- 🔴 WebSocket — full-duplex, use cases
- 🔴 Server-Sent Events (SSE) — one-way streaming từ server
- 🟡 Streams API: ReadableStream, WritableStream, TransformStream
- 🟡 fetch streaming — xử lý large responses
- 🟢 WebTransport — HTTP/3 based, low-latency
- 🟢 WebRTC — peer-to-peer, use cases

### 5.3 — Workers
- 🔴 Web Workers — dedicated workers, communication qua postMessage
- 🔴 Transferable objects — ArrayBuffer transfer, zero-copy
- 🟡 SharedArrayBuffer + Atomics — shared memory
- 🟡 Service Workers — lifecycle (install, activate, fetch), cache strategies
- 🟡 Worklets: Audio Worklet, Paint Worklet
- 🟢 Worker pools pattern
- 🟢 Comlink library — RPC over postMessage

### 5.4 — Other Important APIs
- 🔴 History API: pushState, replaceState, popstate — SPA routing
- 🔴 URL API: new URL(), URLSearchParams
- 🔴 Clipboard API
- 🔴 Geolocation API
- 🟡 Broadcast Channel API — communication giữa tabs cùng origin
- 🟡 Notification API
- 🟡 Permissions API
- 🟡 Screen Wake Lock API
- 🟡 Web Share API
- 🟢 File System Access API
- 🟢 Compression Streams API

### 📚 Tài liệu — Phase 5

| Tài liệu | Link | Ghi chú |
|---|---|---|
| MDN — Fetch API | https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API | fetch, AbortController, streams |
| MDN — Web Storage | https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API | localStorage, sessionStorage |
| MDN — IndexedDB | https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API | Large data storage |
| web.dev — Service Workers | https://web.dev/learn/pwa/service-workers | Lifecycle, cache strategies |
| MDN — Web Workers | https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API | Workers, postMessage, Transferable |
| Streams — web.dev | https://web.dev/articles/streams | ReadableStream, WritableStream |

---

## PHASE 6 — Security

*Senior phải biết bảo vệ code. Staff phải thiết kế hệ thống secure.*

### 6.1 — Common Vulnerabilities
- 🔴 XSS (Cross-Site Scripting): reflected, stored, DOM-based — cách phòng
- 🔴 CSRF (Cross-Site Request Forgery) — SameSite cookies, CSRF tokens
- 🔴 Injection attacks — SQL, NoSQL, Command injection
- 🔴 Content Security Policy (CSP) — directives, nonce, hash
- 🔴 HTTPS everywhere — mixed content
- 🟡 Clickjacking — X-Frame-Options, CSP frame-ancestors
- 🟡 Open Redirect — server-side và client-side
- 🟡 Prototype pollution — Object.prototype modification
- 🟢 Subresource Integrity (SRI) — integrity attribute cho scripts/styles
- 🟢 Trusted Types API — prevent DOM XSS

### 6.2 — Authentication & Authorization
- 🔴 Cookie-based auth vs Token-based auth (JWT) — trade-offs thật
- 🔴 JWT: structure, verification, khi nào KHÔNG nên dùng
- 🔴 OAuth 2.0 flows: Authorization Code + PKCE (for SPA), Client Credentials
- 🔴 Secure cookie storage — HttpOnly, Secure, SameSite=Strict
- 🟡 Session management
- 🟡 Refresh token rotation
- 🟢 WebAuthn / Passkeys

### 📚 Tài liệu — Phase 6

| Tài liệu | Link | Ghi chú |
|---|---|---|
| OWASP Top 10 | https://owasp.org/www-project-top-ten | Chuẩn công nghiệp về vulnerabilities |
| PortSwigger Web Security Academy | https://portswigger.net/web-security | Free labs thực hành XSS, CSRF, injection |
| MDN — Content Security Policy | https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP | CSP directives đầy đủ |
| web.dev — Security | https://web.dev/explore/secure | HTTPS, cookies, SameSite |
| Auth0 — JWT Handbook | https://auth0.com/resources/ebooks/jwt-handbook | Free ebook về JWT internals |
| OAuth 2.0 RFC | https://oauth.net/2 | Spec chính thức, đọc phần flows |

---

## PHASE 7 — Accessibility (a11y)

*Không phải optional. Là legal requirement ở nhiều nơi và là dấu hiệu của engineer chuyên nghiệp.*

### 7.1 — Foundations
- 🔴 WCAG 2.1/2.2 — 4 principles: Perceivable, Operable, Understandable, Robust
- 🔴 Semantic HTML — dùng đúng element (button vs div, nav, main, article, section)
- 🔴 Keyboard navigation — focus management, focus trap, skip links
- 🔴 Screen reader testing — cách dùng VoiceOver (Mac), NVDA (Windows)
- 🔴 Color contrast — minimum ratios (4.5:1 normal text, 3:1 large text)
- 🔴 Alt text cho images — descriptive vs decorative

### 7.2 — ARIA
- 🔴 ARIA roles: landmark roles (main, nav, banner, contentinfo), widget roles
- 🔴 ARIA states & properties: aria-label, aria-labelledby, aria-describedby, aria-hidden
- 🔴 ARIA live regions: aria-live, aria-atomic, aria-relevant — dynamic content announcements
- 🔴 Rule 1 of ARIA: Nếu có HTML element native, dùng nó, đừng dùng ARIA
- 🟡 aria-expanded, aria-selected, aria-checked — interactive component states
- 🟡 aria-controls, aria-owns — relationships
- 🟡 Accessible name computation algorithm
- 🟢 APG (ARIA Authoring Practices Guide) patterns — modal, combobox, tabs, v.v.

### 7.3 — Focus Management
- 🔴 tabindex: 0 (natural), -1 (programmatic only), positive (avoid)
- 🔴 Focus visible — :focus-visible CSS, đừng bao giờ outline: none không có alternative
- 🔴 Modal focus trap — khi modal mở, focus phải ở trong
- 🔴 Focus restoration — khi modal đóng, trả focus về trigger element
- 🟡 Roving tabindex pattern — cho composite widgets (toolbar, menu, tabs)
- 🟢 inert attribute — làm cho subtree không thể tương tác và không thể focus

### 7.4 — Motion & Animation
- 🔴 prefers-reduced-motion media query — tôn trọng user preference
- 🔴 Không dùng animation làm conveyor thông tin quan trọng
- 🟡 WCAG 2.3.3 Animation from Interactions

### 📚 Tài liệu — Phase 7

| Tài liệu | Link | Ghi chú |
|---|---|---|
| web.dev — Accessibility | https://web.dev/learn/accessibility | Đầy đủ, thực tế, từ Google |
| ARIA Authoring Practices Guide | https://www.w3.org/WAI/ARIA/apg | W3C spec — modal, tabs, combobox patterns |
| Inclusive Components — Heydon Pickering | https://inclusive-components.design | Free, từng component phân tích sâu |
| WebAIM | https://webaim.org | Tutorials, color contrast checker, WAVE tool |
| Deque University (free tier) | https://dequeuniversity.com | Screen reader training |
| axe DevTools (Chrome extension) | https://www.deque.com/axe/devtools | Audit accessibility tự động |
| WCAG 2.2 | https://www.w3.org/TR/WCAG22 | Spec chính thức (dùng tra cứu, không đọc hết) |

---

## PHASE 8 — HTML Deep Dive

*Nhiều người bỏ qua. Senior phải biết semantic HTML và browser behavior sâu.*

### 8.1 — Semantic & Structure
- 🔴 Document outline — heading hierarchy (h1-h6)
- 🔴 Sectioning elements: article, section, nav, aside, header, footer, main
- 🔴 Flow vs Phrasing vs Metadata content categories
- 🔴 Forms: fieldset, legend, label, input types, form validation API
- 🔴 Table: thead, tbody, tfoot, caption, scope attribute — cho accessible tables
- 🟡 details/summary — native disclosure widget
- 🟡 dialog element — native modal
- 🟡 popover API — native popover
- 🟢 Template element — inert DOM trees
- 🟢 Slot element — Web Components

### 8.2 — Performance & Loading
- 🔴 Script loading: async vs defer vs type="module"
- 🔴 Image: srcset, sizes, loading="lazy", decoding="async"
- 🔴 Link: rel="preload", rel="prefetch", rel="preconnect"
- 🔴 Meta viewport — responsive design foundation
- 🟡 fetchpriority attribute — LCP image optimization
- 🟡 Picture element — art direction responsive images
- 🟢 103 Early Hints header

### 8.3 — Web Components
- 🟡 Custom Elements API — define, lifecycle callbacks
- 🟡 Shadow DOM — encapsulation, ::part, ::slotted
- 🟡 HTML Templates — template element
- 🟢 Web Components trong design systems
- 🟢 Declarative Shadow DOM (SSR cho Web Components)

### 📚 Tài liệu — Phase 8

| Tài liệu | Link | Ghi chú |
|---|---|---|
| MDN — HTML Reference | https://developer.mozilla.org/en-US/docs/Web/HTML | Tra cứu element, attributes |
| web.dev — Learn HTML | https://web.dev/learn/html | Structured course, semantic HTML |
| HTML Spec — WHATWG | https://html.spec.whatwg.org | Spec chính thức, dùng khi cần hiểu thật sâu |
| web.dev — Responsive Images | https://web.dev/learn/design/responsive-images | srcset, sizes, picture element |
| MDN — dialog element | https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog | Native modal |
| web.dev — Web Components | https://web.dev/learn/html/template | Template, slot, custom elements |

---

## PHASE 9 — Node.js & Fullstack

### 9.1 — Node.js Internals
- 🔴 libuv — event loop phases trong Node.js context
- 🔴 Streams — Readable, Writable, Duplex, Transform
- 🔴 Buffer — binary data handling
- 🔴 Cluster module — multi-process cho multi-core
- 🟡 worker_threads — true parallelism trong Node
- 🟡 process.nextTick vs setImmediate vs Promise.resolve — ordering
- 🟢 N-API / Node-API — native addons

### 9.2 — HTTP & APIs
- 🔴 REST principles — resource design, HTTP methods, status codes
- 🔴 HTTP headers sâu — Cache-Control, ETag, Vary, Content-Type
- 🔴 GraphQL — queries, mutations, subscriptions, N+1 problem
- 🔴 Authentication middleware patterns
- 🟡 gRPC — use cases, so sánh với REST
- 🟡 tRPC — type-safe APIs
- 🟡 Rate limiting strategies
- 🟢 API versioning strategies
- 🟢 OpenAPI/Swagger specification

### 9.3 — Databases (JS ecosystem context)
- 🔴 SQL fundamentals — JOIN, index, transaction, ACID
- 🔴 Query optimization — EXPLAIN, index design
- 🔴 ORM patterns — Prisma, Drizzle — N+1 awareness
- 🔴 Connection pooling
- 🟡 NoSQL: MongoDB patterns, khi nào phù hợp
- 🟡 Redis — caching, pub/sub, session storage
- 🟢 Database migrations strategy

### 📚 Tài liệu — Phase 9

| Tài liệu | Link | Ghi chú |
|---|---|---|
| Node.js Official Docs | https://nodejs.org/en/docs | Guides phần Event Loop rất tốt |
| Node.js Design Patterns (sách) | https://www.nodejsdesignpatterns.com | Trả phí — tốt nhất cho Node architecture |
| Node.js Best Practices | https://github.com/goldbergyoni/nodebestpractices | Free GitHub repo, production-grade tips |
| Prisma Docs | https://www.prisma.io/docs | ORM hiện đại nhất cho Node |
| tRPC Docs | https://trpc.io/docs | Type-safe API layer |
| Redis Docs | https://redis.io/docs | Caching, pub/sub patterns |
| The Art of PostgreSQL (sách) | https://theartofpostgresql.com | SQL nâng cao cho developers |

---

## PHASE 10 — Software Design & Architecture

*Đây là thứ phân biệt Senior với Staff/Principal.*

### 10.1 — Design Principles
- 🔴 SOLID principles — áp dụng trong JS/TS
- 🔴 DRY, YAGNI, KISS — biết khi nào vi phạm là đúng
- 🔴 Composition over inheritance
- 🔴 Separation of concerns
- 🔴 Single source of truth

### 10.2 — Design Patterns
- 🔴 Creational: Factory, Builder, Singleton (và tại sao Singleton thường là bad idea)
- 🔴 Structural: Adapter, Proxy, Decorator, Facade
- 🔴 Behavioral: Observer, Strategy, Command, Iterator, State
- 🟡 Functional patterns: Functor, Monad (concept, không cần Haskell)
- 🟢 Enterprise patterns: Repository, Unit of Work, CQRS

### 10.3 — State Management
- 🔴 Local state vs Shared state vs Server state — phân loại đúng
- 🔴 Flux architecture — unidirectional data flow
- 🔴 Immutability — tại sao quan trọng, structural sharing
- 🟡 Finite State Machines (XState) — cho complex UI state
- 🟡 Optimistic updates — pattern và rollback
- 🟢 Event sourcing cho client-side state

### 10.4 — Testing
- 🔴 Testing pyramid: Unit → Integration → E2E
- 🔴 Unit testing — pure functions, mock strategy
- 🔴 Integration testing — test user flows, không test implementation
- 🔴 Vitest/Jest: describe, it, expect, mock, spy
- 🔴 Testing Library principles — test như user, không test internal
- 🟡 E2E: Playwright — page objects, fixtures
- 🟡 Visual regression testing
- 🟡 Accessibility testing: axe-core, jest-axe
- 🟢 Property-based testing (fast-check)
- 🟢 Mutation testing

### 10.5 — TypeScript (bắt buộc cho Senior+)
- 🔴 Type system fundamentals — structural typing
- 🔴 Generics — constraints, defaults, infer keyword
- 🔴 Utility types: Partial, Required, Pick, Omit, Record, ReturnType, Parameters
- 🔴 Union types, Intersection types, Discriminated unions
- 🔴 Type narrowing — typeof, instanceof, in, custom type guards
- 🔴 Declaration merging, module augmentation
- 🟡 Conditional types — T extends U ? X : Y
- 🟡 Template literal types
- 🟡 Mapped types — keyof, in, as
- 🟡 Variance: covariance, contravariance (function parameters)
- 🟢 Type-level programming — recursive types, type challenges
- 🟢 TypeScript compiler API

### 📚 Tài liệu — Phase 10

| Tài liệu | Link | Ghi chú |
|---|---|---|
| Patterns.dev | https://www.patterns.dev | Free — design patterns và rendering patterns cho modern JS |
| TypeScript Handbook | https://www.typescriptlang.org/docs/handbook | Official, free, đủ cho core |
| Type Challenges | https://github.com/type-challenges/type-challenges | Luyện TypeScript advanced bằng bài tập |
| Testing Library Docs | https://testing-library.com/docs | Principles và API |
| Playwright Docs | https://playwright.dev/docs/intro | E2E testing |
| Clean Code (sách) — Robert Martin | https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882 | Trả phí — đọc với tư duy phản biện |
| Refactoring Guru — Design Patterns | https://refactoring.guru/design-patterns | Free, visual, dễ hiểu |
| XState Docs | https://stately.ai/docs | State machines cho complex UI |

---

## PHASE 11 — Tooling & DevEx

### 11.1 — Build Tools
- 🔴 Vite — dev server, HMR, build pipeline
- 🔴 Bundling concepts: entry points, chunks, tree shaking, code splitting
- 🔴 Source maps — debugging minified code
- 🟡 Webpack (biết đủ để debug khi cần)
- 🟡 Rollup — library bundling
- 🟢 esbuild, SWC — tại sao nhanh hơn

### 11.2 — Developer Tools
- 🔴 Chrome DevTools: Elements, Console, Network, Performance, Memory, Application
- 🔴 Performance profiling — flame chart, call tree, bottom-up
- 🔴 Memory profiling — heap snapshots, allocation timeline
- 🔴 Network throttling, CPU throttling
- 🟡 Lighthouse — audit, scoring, optimization suggestions
- 🟢 Chrome Tracing (chrome://tracing) — low-level performance

### 11.3 — CI/CD & Code Quality
- 🔴 ESLint — configuration, custom rules
- 🔴 Prettier — format on save
- 🔴 Git hooks: pre-commit (lint-staged), commit-msg (commitlint)
- 🔴 GitHub Actions / CI pipeline basics
- 🟡 Dependency analysis: bundle analyzer, depcheck
- 🟢 Custom ESLint plugins

### 📚 Tài liệu — Phase 11

| Tài liệu | Link | Ghi chú |
|---|---|---|
| Vite Docs | https://vitejs.dev/guide | Build tool hiện đại nhất |
| Chrome DevTools Docs | https://developer.chrome.com/docs/devtools | Đọc hết phần Performance và Memory |
| Lighthouse Docs | https://developer.chrome.com/docs/lighthouse | Audit và scoring |
| ESLint Docs | https://eslint.org/docs/latest | Configuration, custom rules |
| GitHub Actions Docs | https://docs.github.com/en/actions | CI/CD pipelines |
| Webpack Bundle Analyzer | https://github.com/webpack-contrib/webpack-bundle-analyzer | Visualize bundle size |

---

## PHASE 12 — Soft Skills của Principal

*Technical knowledge cần thiết nhưng chưa đủ để lên Staff/Principal.*

### 12.1 — Technical Leadership
- 🟢 RFC (Request for Comments) process — đề xuất technical changes
- 🟢 Architecture Decision Records (ADR) — document decisions và context
- 🟢 Tech debt triage — phân loại và prioritize debt
- 🟢 Cross-team technical alignment

### 12.2 — System Thinking
- 🟢 Biết khi nào không cần build — buy vs build vs open source
- 🟢 Incremental migration strategies
- 🟢 Backward compatibility planning
- 🟢 Performance budgets và monitoring

### 📚 Tài liệu — Phase 12

| Tài liệu | Link | Ghi chú |
|---|---|---|
| Staff Engineer (sách) — Will Larson | https://staffeng.com/book | Định nghĩa rõ Staff/Principal role |
| staffeng.com — Stories | https://staffeng.com/stories | Real stories từ Staff Engineers |
| Architecture Decision Records | https://adr.github.io | Format viết ADR |
| Google Engineering Practices | https://google.github.io/eng-practices | Code review, technical standards |
| The Pragmatic Programmer (sách) | https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition | Career-long reference |

---

## Tổng hợp Kênh YouTube

| Kênh | Focus | Link |
|---|---|---|
| Fireship | Concepts nhanh, technology mới | https://youtube.com/@Fireship |
| Jack Herrington | React advanced, TypeScript, patterns | https://youtube.com/@jackherrington |
| Theo (t3.gg) | Fullstack ecosystem, opinionated | https://youtube.com/@t3dotgg |
| ThePrimeagen | Performance, tư duy engineer | https://youtube.com/@ThePrimeagen |
| Web Dev Simplified | Giải thích concept rõ ràng | https://youtube.com/@WebDevSimplified |
| Lydia Hallie | JS visualized, advanced JS | https://youtube.com/@LydiaHallie |
| Kevin Powell | CSS sâu | https://youtube.com/@KevinPowell |
| Steve Kinney | Performance, tooling | Tìm trên Frontend Masters |

---

## Tổng hợp Sách theo mức độ ưu tiên

### Đọc ngay (free hoặc quan trọng nhất)
- **You Don't Know JS** — https://github.com/getify/You-Dont-Know-JS *(free)*
- **javascript.info** — https://javascript.info *(free)*
- **Exploring JS** — https://exploringjs.com *(free online)*
- **High Performance Browser Networking** — https://hpbn.co *(free online)*
- **Patterns.dev** — https://www.patterns.dev *(free)*

### Đọc khi lên Senior
- **Node.js Design Patterns** — Mario Casciaro *(trả phí)*
- **Clean Code** — Robert Martin *(trả phí, đọc phản biện)*
- **The Pragmatic Programmer** — Hunt & Thomas *(trả phí)*

### Đọc khi hướng tới Staff/Principal
- **Staff Engineer** — Will Larson *(trả phí)*
- **Designing Data-Intensive Applications** — Martin Kleppmann *(trả phí — backend heavy nhưng cực kỳ worth)*

---

## Thứ tự học gợi ý

```
Phase 1 (Engine) → Phase 2 (Core JS) → Phase 3 (Browser)
     ↓
Phase 4 (Performance) → Phase 7 (a11y) → Phase 8 (HTML)
     ↓
Phase 5 (APIs) → Phase 6 (Security) → Phase 9 (Node)
     ↓
Phase 10 (Architecture) → Phase 11 (Tooling) → Phase 12 (Leadership)
```

Phase 1, 2, 3 là nền tảng — học song song với nhau, mỗi concept trong Phase 1 sẽ giải thích tại sao Phase 2 hoạt động như vậy.

---

## Cách học hiệu quả nhất

**1. Không đọc docs rồi thôi**  
Mỗi concept: đọc → tự viết implementation → break nó → hiểu tại sao break.

**2. Build cùng lúc với học**  
Học Intersection Observer → implement lazy loading thật.  
Học Layout Thrashing → profile app thật → fix.

**3. Dùng DevTools liên tục**  
Performance tab cho mọi animation bạn viết.  
Memory tab khi nghĩ đến closure + large data.

**4. Đọc source code**  
React source, Lodash source, undici (Node.js HTTP client) source.  
Không cần hiểu hết — hiểu tại sao họ chọn design đó.

**5. Dạy lại**  
Viết blog, giải thích cho đồng nghiệp. Chỗ nào giải thích lúng túng = chỗ còn lỗ hổng.

---

---

## Quick Reference — Link quan trọng nhất

| Ưu tiên | Tài liệu | Link |
|---|---|---|
| ⭐⭐⭐ | javascript.info | https://javascript.info |
| ⭐⭐⭐ | You Don't Know JS | https://github.com/getify/You-Dont-Know-JS |
| ⭐⭐⭐ | MDN Web Docs | https://developer.mozilla.org |
| ⭐⭐⭐ | web.dev | https://web.dev |
| ⭐⭐⭐ | Jake Archibald — In The Loop | https://www.youtube.com/watch?v=cCOL7MC4Pl0 |
| ⭐⭐ | CSS Triggers | https://csstriggers.com |
| ⭐⭐ | OWASP Top 10 | https://owasp.org/www-project-top-ten |
| ⭐⭐ | ARIA APG | https://www.w3.org/WAI/ARIA/apg |
| ⭐⭐ | Patterns.dev | https://www.patterns.dev |
| ⭐⭐ | Type Challenges | https://github.com/type-challenges/type-challenges |
| ⭐⭐ | PortSwigger Security Academy | https://portswigger.net/web-security |
| ⭐ | V8 Blog | https://v8.dev/blog |
| ⭐ | TC39 Proposals | https://github.com/tc39/proposals |
| ⭐ | staffeng.com | https://staffeng.com |

---

*Tài liệu này được thiết kế để upload lên NotebookLM. Mỗi phase có tài liệu đi kèm — học phase nào, mở tài liệu phase đó.*
