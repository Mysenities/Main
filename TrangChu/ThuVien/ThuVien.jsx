import './ThuVien.css';

const items = [
  'Bài viết mới',
  'Video hướng dẫn',
  'Tài liệu tham khảo',
];

export default function ThuVien() {
  return (
    <article className="thu-vien-card">
      <h2>Thư viện</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
