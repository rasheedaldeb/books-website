import './Footer.css'
import { ThemContext } from '../../../Context/ThemContext'
import { useContext } from 'react'
const Footer = ({copyRight}) => {
    const them = useContext(ThemContext)
    return (
        <>
        <footer className={them}>
            <p>{copyRight}</p>
        </footer>
        </>
    )
}

export default Footer
