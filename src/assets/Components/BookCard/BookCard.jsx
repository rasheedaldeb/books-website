import { Link } from 'react-router-dom'
import  './BookCard.css'
const BookCard = ({bookImg, author, pages, rating, id}) => {
    return (
        <div className='bookCard'>
        <img src={bookImg} className='main' alt="" />
        <div className="book-info">
            <h3>{author}</h3>
            <div className="raiting-pages">
                <div className="pages">
                    <img src="./public/images/book-open-01.svg" alt="" />
                    <span>{pages}</span>
                </div>
                <div className="raiting">
                    <img src="./images/star.svg" alt="" />
                    <span>{rating}</span>
                </div>
            </div>
            <button><Link to={`/details/${id}`}>Show Details</Link></button>
        </div>
        </div>
    )
}

export default BookCard
