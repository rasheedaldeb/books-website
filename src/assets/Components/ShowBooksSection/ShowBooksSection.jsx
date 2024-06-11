import './ShowBooksSection.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import BookCard from '../BookCard/BookCard'
const ShowBooksSection = () => {
    const [booksData, setbooksData] = useState([])
    useEffect(()=>{
        axios.get("https://example-data.draftbit.com/books?_limit=8")
        .then((res)=>{
            console.log(res.data)
            setbooksData(res.data)
        })
        console.log(booksData)
    },[])
    return (
        <div className='book-section'>
            <h1>Selected for you</h1>
        <div className="book-cards">
        {booksData.map((item , i)=>{
            return(
                <BookCard key={i} bookImg={item.image_url} author={item.authors} pages={item.num_pages} rating={item.rating} id={item.id}/>
            )
        })}
        </div>
        </div>
    )
}

export default ShowBooksSection
