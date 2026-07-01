import './TrangChu.css';
import ThuVien from './ThuVien/ThuVien';
import TimKiem from './TimKiem/TimKiem';

export default function TrangChu() {
  return (
    <section className="trang-chu">
      <header className="hero">
        <div>
          <p className="eyebrow">Trang chủ mẫu</p>
          <h1>Chào mừng bạn đến với hệ thống</h1>
          <p className="subtitle">Một ví dụ đơn giản với các thành phần ThuViện và TìmKiếm.</p>
        </div>
      </header>

      <div className="content-grid">
        <ThuVien />
        <TimKiem />
      </div>
    </section>
  );
}
