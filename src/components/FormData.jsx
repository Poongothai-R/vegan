import { useRef, useState } from "react";
import '../styles/components/formdata.css';
import EmailJS from '@emailjs/browser';


export default function FormData() {

    const formRef = useRef();
    const [formSubmit, setFormSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        EmailJS.sendForm(
            "service_l6h5jmk",
            "template_x2fdt3b",
            formRef.current,
            "7lOVdyYSzgSmQbCw4"
        )
            .then(result=>(setFormSubmit(true)),
                (error=>alert("sorry,your booking has failed")));
                e.target.reset();
    };

    return (
        <div className="book-table">
            <form ref={formRef} onSubmit={handleSubmit} className="form-section">
                <h1>Book a Table</h1>
                <div className="form_content">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Name" name="user_name" id="name" />
                    <label>Email</label>
                    <input type="email" placeholder="Email" name="user_email" />
                    <label>No of Seats</label>
                    <input type="number" placeholder="No of Seats" name="user_seats" />
                    <label>Booking date</label>
                    <input type="date" placeholder="Date" name="date" />
                    <button className="form-btn">Submit</button>
                </div>
                {formSubmit && "Thank you! Your table has been booked! "}
            </form>
        </div>
    );
};