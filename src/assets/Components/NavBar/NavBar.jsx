import { useContext, useState } from 'react'
import  './NavBar.css'
import { Link } from 'react-router-dom' 
import { ThemContext } from '../../../Context/ThemContext'
const NavBar = ({menue, mode, click}) => {
    const [show, setshow] = useState(false)
    const them = useContext(ThemContext) 
    return (
        <>
        <nav className={them}>
            <img src= {`/images/Logo-${them}.svg`} className='logo' alt="" />
            <ul className='list'>
            {menue.map((item, index)=>{
                return(
                    <li key={index}><Link className={`link ${them}`} to={item.path}>{item.link}</Link></li>
                )
            })}
            </ul>
            <div className="mode">
                <img src= {`/images/${them}.svg`}
                onClick={click}
                alt="" />
                <h3>{mode}</h3>
            </div>
            <i className="fa-solid fa-bars menue" onClick={()=>{
                setshow(true)
            }}></i>
        </nav>
        <div className={"mobile"}>
        <div className={`mobile-data ${them}`} style={{display: show? "block" : "none"}}>
        <i className="fa-solid fa-xmark close " onClick={()=>{
            setshow(false)
        }}></i>
        <ul className='mobile-nav'>
            {menue.map((ele, i )=>{
                return(
                    <li key={i}><Link className={`link-2 ${them}`} to={ele.path}>{ele.link}</Link></li>
                )
            })}
        </ul>
        <hr />
        <div className="mode">
                <h3>{mode}</h3>
                <img
                onClick={click}
                src={`/images/switch-${them}.svg`} alt="" />
            </div>
        </div>
        </div>
        </>
    )
}

export default NavBar
