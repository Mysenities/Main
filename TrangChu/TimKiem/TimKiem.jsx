import './TimKiem.css';

export default function TimKiem() {
  return (
    <article className="tim-kiem-card">
      <h2>Tìm kiếm</h2>
      <div className="search-box">
        <input type="text" placeholder="Nhập từ khóa..." />
        <button>Tìm</button>
      </div>
      <p className="hint">Ví dụ: React, HTML, CSS</p>
    </article>
  );
}
