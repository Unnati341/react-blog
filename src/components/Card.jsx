function Card({ title, category, author, date, content }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <p className="category">{category}</p>

      <p>{content}</p>

      <small>
        By {author} | {date}
      </small>
    </div>
  );
}

export default Card;