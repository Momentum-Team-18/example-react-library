export const BookCard = ({ title, bookId, featured, setSelected }) => {
  const handleClick = () => {
    setSelected(bookId)
  }
  return (
    <div className="book card" id={bookId} onClick={handleClick}>
      <div className="card-content">
        <div className="content">
          <p>
            {title}
            {featured && (
              <span className="icon">
                <i className="fa-solid fa-feather-pointed"></i>
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
