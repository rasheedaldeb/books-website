import './MapSection.css'

const MapSection = ({formTitle, formSubTitle, btn}) => {
    return (
        <div className='map'>
        <div className="map-form">
            <div className="form-info">
            <h1>{formTitle}</h1>
            <p>{formSubTitle}</p>
            </div>
            <div className='form'>
                <input type="text" placeholder='Your name'/>
                <input type="email" placeholder='Your e-mail'/>
                <button>{btn}</button>
            </div>
        </div>
        <div className="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.3561992157!2d36.
        20049325837579!3d33.507591366372644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15
        18e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syria!5e0!3m2!1sen!2snl!4v1717845827446!5m2!1sen!2snl"
        width="600"
        height="450" 
        loading="lazy" 
        ></iframe>
        </div>
        </div>
    )
}

export default MapSection
