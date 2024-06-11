import { useContext } from 'react'
import BookDetailsSection from '../assets/Components/BookDetailsSection/BookDetailsSection'
import { ThemContext } from '../Context/ThemContext'
const ShowBookPage = () => {
    const them = useContext(ThemContext)
    return (
        <div className={them}>
            <BookDetailsSection/>
        </div>
    )
}

export default ShowBookPage
