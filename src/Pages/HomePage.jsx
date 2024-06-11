import React, { memo, useContext } from 'react'
import Hero from '../assets/Components/Hero/Hero'
import ShowBooksSection from '../assets/Components/ShowBooksSection/ShowBooksSection'
import MapSection from '../assets/Components/MapSection/MapSection'
import { ThemContext } from '../Context/ThemContext'
const HomePage = () => {
    const them = useContext(ThemContext)
    
    return (
        <div className={them}>
        <Hero fBtn="Author of august" title="Eric-Emanuel Schmitt " subtitle="Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages." sBtn="View his books" bookImg="./public/images/hero-book.png"/>
        <ShowBooksSection/>
        <MapSection formTitle="Did you know us? " formSubTitle="We are about books and our purpose is to show you 
        the book who can chage your life or distract you from the real world în a better one.
        BWorld works with the must popular publishs just for your delight. 
        If you are about books, you must to subscribe to our newsletter. " btn="Subscribe"/>
        </div>
    )
}

export default memo(HomePage)
