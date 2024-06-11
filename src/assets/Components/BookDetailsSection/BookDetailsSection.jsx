import { useParams } from 'react-router-dom'
import './BookDetailsSection.css'
import BookDetails from '../BookDetails/BookDetails.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
const BookDetailsSection = () => {
    let {bookId} = useParams()
    let [bookdata, setbookdata] = useState({})
    useEffect(()=>{
        axios.get(`https://example-data.draftbit.com/books/${bookId}`)
        .then((res)=>{
            console.log(res.data)
            setbookdata(res.data)
            })
        console.log(bookdata)
    },[])
    return (
        <div>
        <BookDetails img={bookdata.image_url} id={bookdata.id}
        title={bookdata.title} auther={bookdata.authors}
        subTitle={bookdata.description} btn1="Add To Cart" btn2="Favorite"
        pages={bookdata.num_pages} raitng={bookdata.rating_count}
        reviews={bookdata.review_count}/>
        </div>
    )
}

export default BookDetailsSection
