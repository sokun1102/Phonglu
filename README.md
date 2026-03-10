# Blog cá nhân (React)

Blog cá nhân bằng React + Vite, tham khảo phong cách [jason.energy](https://jason.energy/): giao diện gọn, dễ đọc, tập trung nội dung.

## Chạy dự án

```bash
npm install
npm run dev
```

Mở [http://localhost:5173](http://localhost:5173) trong trình duyệt.

## Cấu trúc

- **Home** — Hero, giới thiệu ngắn, bài viết gần đây
- **Blog** — Danh sách bài viết (dữ liệu trong `src/data/posts.js`)
- **Blog/:slug** — Trang chi tiết từng bài
- **About** — Trang giới thiệu

## Chỉnh sửa

1. **Tên & nội dung**: Sửa `[Tên của bạn]` và các đoạn giới thiệu trong `src/pages/Home.jsx`, `src/pages/About.jsx`.
2. **Bài viết**: Thêm/sửa trong `src/data/posts.js`. Có thể mở rộng để lưu nội dung Markdown và dùng `react-markdown` để render.
3. **Liên hệ**: Cập nhật email trong `src/components/Footer.jsx`.
4. **Giao diện**: Màu sắc và font trong `src/index.css` (biến CSS `:root`).

## Build

```bash
npm run build
npm run preview   # xem bản build
```
