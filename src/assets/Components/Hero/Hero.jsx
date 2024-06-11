import './Hero.css'
const Hero = ({fBtn, title, subtitle, sBtn, bookImg}) => {
    return (
        <div className='hero'>
        <div className="hero-info">
        <button>{fBtn}</button>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button>{sBtn}</button>
        </div>
        <img src={bookImg} alt="" />
        </div>
    )
}

export default Hero
