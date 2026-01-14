# My Finance - Quản Lý Tài Chính Cá Nhân

Ứng dụng quản lý tài chính cá nhân được xây dựng với React, TypeScript và TailwindCSS.

![Dashboard Preview](https://github.com/haithvn/antgravity_taichinhcanhan/blob/master/screenshot.png) *(Cần cập nhật đường dẫn ảnh thực tế)*

## Tính Năng Chính
- **Dashboard Tổng Quan**: 
    - Xem số dư, tổng thu nhập, tổng chi tiêu.
    - Biểu đồ cột (Bar Chart) trực quan hóa thu/chi.
    - Biểu đồ tròn (Pie Chart) phân tích cơ cấu chi tiêu.
- **Quản Lý Giao Dịch**:
    - Thêm mới giao dịch (Thu/Chi) với danh mục, số tiền, ghi chú.
    - Xem lịch sử giao dịch dưới dạng bảng chi tiết.
    - Xóa giao dịch.
- **Dữ Liệu Mẫu**: Tự động hiển thị dữ liệu mẫu để trải nghiệm ngay.

## Công Nghệ Sử Dụng
- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS v4
- **Charts**: Recharts
- **Icons**: Phosphor React
- **Utils**: UUID, date-fns

## Cài Đặt và Chạy Dự Án

1. Clone dự án:
```bash
git clone https://github.com/haithvn/antgravity_taichinhcanhan.git
cd antgravity_taichinhcanhan
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy server phát triển:
```bash
npm run dev
```

4. Truy cập `http://localhost:5173` để sử dụng.

## Cập Nhật Gần Đây
- Đổi tên ứng dụng thành "My Finance".
- Nâng cấp giao diện Dashboard: Biểu đồ màu sắc trực quan (Xanh/Đỏ), animation mượt mà.
- Thiết kế lại trang Lịch sử giao dịch dạng bảng.
- Sửa lỗi hiển thị UI/UX.

## Hướng Dẫn Deploy (Vercel)

Dự án này có thể dễ dàng deploy lên Vercel chỉ với vài bước đơn giản thông qua CLI:

1. **Cài đặt & Login (nếu chưa có):**
   ```bash
   npx vercel login
   ```

2. **Deploy Dự Án:**
   Chạy lệnh sau tại thư mục gốc của dự án:
   ```bash
   npx vercel
   ```

3. **Cấu Hình (Lần đầu tiên):**
   Trả lời các câu hỏi của Vercel CLI như sau:
   - `Set up and deploy?` → **y**
   - `Which scope?` → **[Chọn tài khoản của bạn]**
   - `Link to existing project?` → **n**
   - `Project details` → Giữ mặc định (Enter để đồng ý).
   - `Project settings (Build Command, Output Directory)` → **n** (Vercel tự động nhận diện Vite).

4. **Kết Quả:**
   Sau khi hoàn tất, Vercel sẽ cung cấp đường dẫn truy cập (ví dụ: `https://thuchicanhan-xyz.vercel.app`).

> **Lưu ý:** Để cập nhật phiên bản mới sau khi sửa code, chỉ cần chạy lại lệnh `npx vercel --prod`.
