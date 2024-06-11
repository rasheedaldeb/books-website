import './BookDetails.css'

const BookDatails = ({img, id, title, auther, subTitle, btn1, btn2, pages,raitng,reviews}) => {
    return (
        <div className='book-data'>
        <img src={img} alt=""  className='book-img'/>
        <div className="book-detail">
            <div className="heading">
            <h1>{title}</h1>
            <h3>{auther}</h3>
            </div>
            <div className="about-book">
            <h2>About Book:</h2>
            <p>{subTitle}</p>
            </div>
            <div className="buttons">
                <button>{btn1}</button>
                <button>{btn2}</button>
            </div>
            <div className="adition-detail">
            <div className="page-rait">
            <p><span>Pages Number :</span> {pages} Pages</p>
            <p><span>Rating Count :</span> {raitng}</p>
            </div>
            <p><span>Reviews:</span> {reviews}</p>
            </div>
        </div>
        </div>
    )
}

export default BookDatails
