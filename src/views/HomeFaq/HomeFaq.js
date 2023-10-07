import './HomeFaq.css';
import Navbar from '../../components/Navbar/Navbar';


function HomeFaq() {
    return (
        <>
            <div>
                <Navbar />
                <div className='div-card-faq'>
                    <h2 className='question'>1. What is Hospital Management Software?</h2>
                    <p className='ans'>
                        Today, there is dire need for every institution or business to manage data and administration efficiently. Hospitals and health clinics cater to many people, and thus the need for an effective hospital management system arises. Hospital management software serves a practical purpose in the health industry:
                        <ul>
                            <li>Hospital management application helps field professionals manage routine tasks and information about patients, finances, treatments, etc., under one safe and secure platform.</li>
                            <li> It is commonly used for improving communication and coordination between the staff and the hospital's medical supply chain system.</li>
                            <li> The software also aids the hospital administration in keeping track of the billing, maintaining the admitted patients' contact details, and saving the insurance information for future reference.</li>
                        </ul>
                    </p>
                </div>

                <div className='div-card-faq'>
                    <h2 className='question'>2. What are the benefits of using HMS?</h2>
                    <p className='ans'>Fast processing and Results: One of the popular reasons for investing in software for hospital management is that it increases the processing speed of large data and aids the hospital in faster tracking and verifying provided data.
                        <ul>
                           <li> Effortless management: A capable HMS is an advanced portal that can efficiently manage and track the status of a patient’s entire hospital experience, from the appointment to the discharge.</li>
                           <li>Error-free administration: While manual administration leaves room for many minute, hard-to-spot errors, thanks to automation and successful implementation of artificial intelligence in the HMS, data can be stored with minimal errors.</li>

                           <li>Assured data security: An HMS assures data integrity through user authentication and limits out-of-turn data access by tracking staff shift timings and attendance.</li>
                        </ul></p>
                </div>
                <div className='div-card-faq'>
                    <h2 className='question'>3.  How many modules are used in HMS?</h2>
                    <p className='ans'>Fast processing and Results: One of the popular reasons for investing in software for hospital management is that it increases the processing speed of large data and aids the hospital in faster tracking and verifying provided data.
                        <ul>
                          <li>Department Module</li>
                          <li>Doctor Module</li>
                          <li>Doctor Module</li>
                          <li>Appoinment</li>
                          <li>Registration</li>
                          <li>Service</li>
                          <li>Patient Details</li>
                        </ul></p>
                </div>
            </div>
        </>
    )
}
export default HomeFaq;