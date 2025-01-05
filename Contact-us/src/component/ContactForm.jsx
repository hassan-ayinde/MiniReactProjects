import React, {useState} from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        contactMethod: '',
        message:''
    });

    const handleFormdataChange = (e) => {
        const {name, value} = e.target;
        // setFormData((prevData) => ({
        //     ...prevData, [name]: value
        // }))
        setFormData({...formData, [name]: value})
        
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);

        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            contactMethod: '',
            message: '',
        });
    };
  return (
    <div className='contact-form'>
        <h1>Send us a Message</h1>
        <form action="" onSubmit={handleFormSubmit}>
            <div>
                <input type="text" name='name'
                 placeholder='Name' value={formData.name}
                 onChange={handleFormdataChange}
                />
            </div>
            <div>
                <input type="email" name='email'
                 placeholder='Email' value={formData.email}
                 onChange={handleFormdataChange}
                />
            </div>
            <div>
                <input type="tel" name='phoneNumber' 
                 placeholder='Phone' value={formData.phoneNumber}
                 onChange={handleFormdataChange}
                />
            </div>
            <div>
                <p>Preferred contact method of communication</p>
                <div style={{display:'flex', alignItems:'center', gap:'10px'}}>  
                    <input type="radio" 
                    name="contactMethod" value='email' id=""
                    checked={formData.contactMethod === 'email'}
                    onChange={handleFormdataChange}
                    /> Email
                    <input type="radio" 
                    name="contactMethod" value='phone' id=""
                    checked={formData.contactMethod === 'phone'}
                    onChange={handleFormdataChange}
                    /> Phone
                </div>
            </div>
            <div>
                <textarea id="" name='message'
                 cols="30" rows='5' placeholder='Message'
                 value={formData.message}
                 onChange={handleFormdataChange}
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm