import "./ServiceCard.css";


export default function ServiceCard({ img, title, mobile, email }) {
    return (
        <>
       

                <div className='service-card-container m-5'>
                    <img className="service-card-img" src={img} alt='' />
                    <h3 className='service-card-title'>{title}</h3>
                    <h4 className='service-card-value'>{mobile}</h4>
                    <h4 className='service-card-email'>{email}</h4>
                    <button className="contact-btn">Contact Now</button>
                </div>
      

        </>
    )
}