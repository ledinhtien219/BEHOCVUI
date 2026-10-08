# Bé Học Vui

Web app học tập dành cho bé **chuẩn bị vào lớp 1** và **học sinh lớp 2**, theo định hướng **Chương trình Giáo dục phổ thông 2018**.

## MVP hiện có

- Hai lộ trình: Chuẩn bị vào lớp 1 và Lớp 2
- Môn học: Toán, Tiếng Việt, Tiếng Anh
- Nội dung lớp 2 theo mạch kiến thức/kỹ năng, có thứ tự tiến triển
- Nhiều dạng bài tập: trắc nghiệm, điền đáp án, sắp xếp, đọc hiểu, nghe/chọn và hoạt động tương tác
- Mini game bám theo môn, kỹ năng và cấp lớp; game mở theo tiến độ
- Sao thưởng, huy hiệu, báo cáo và tiến độ học tập
- Lưu tiến độ tại trình duyệt bằng `localStorage`
- Responsive cho desktop, tablet và điện thoại
- PWA cơ bản với manifest + service worker

## Chạy local

Không cần build:

```bash
python -m http.server 8080
```

Mở:

```
http://localhost:8080
```

> Nên chạy qua localhost/HTTPS thay vì mở trực tiếp `file://` để service worker hoạt động.

## Cấu trúc source

```
.
├── index.html
├── styles.css
├── app.js
├── manifest.webmanifest
├── service-worker.js
├── icon.svg
├── CURRICULUM.md
└── README.md
```

- `index.html`: shell giao diện
- `styles.css`: design system và responsive UI theo concept ảnh 1
- `app.js`: dữ liệu bài học, router, bài tập, mini game, thưởng và tiến độ
- `CURRICULUM.md`: bản đồ nội dung theo CTGDPT 2018

## Nguyên tắc chương trình

CTGDPT 2018 quy định **mạch nội dung và yêu cầu cần đạt**, không ấn định một thứ tự bài duy nhất cho tất cả bộ SGK. App vì vậy dùng một **lộ trình chuẩn nội bộ có thứ tự**, đảm bảo kỹ năng trước là tiền đề cho kỹ năng sau và mini game chỉ khai thác kiến thức phù hợp với cấp lớp.

Tiếng Anh lớp 1–2 được thiết kế theo hướng **làm quen/tự chọn**.

## Hướng phát triển tiếp

1. Tách dữ liệu học liệu khỏi `app.js` thành JSON/TypeScript theo từng lớp, môn, tuần/chủ đề.
2. Bổ sung ngân hàng câu hỏi có mức độ và randomization.
3. Chuẩn hóa mapping bài học ↔ yêu cầu cần đạt ↔ mini game.
4. Thêm tài khoản phụ huynh/học sinh, backend và đồng bộ nhiều thiết bị.
5. Thêm CMS để biên tập học liệu.
6. Audio phát âm/đọc bài, ghi âm và chấm hoạt động nói.
7. Dashboard phụ huynh/giáo viên.
8. Kiểm thử nội dung theo từng bộ SGK nếu cần chế độ Kết nối tri thức / Chân trời sáng tạo / Cánh Diều.

## Trạng thái

MVP front-end, sẵn sàng refactor và phát triển tiếp.
