import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import send_icon from '../../assets/send-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "02fd224c-0491-48ea-a545-dd77a737925b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
       <div className="contact-col">
        <h3>Send us a message <img src={send_icon} alt="" /></h3>
        <p>We're all ears! Dive into the conversation using the form feature or explore our contact details below. 
          Your ideas, questions, and feedback are the fuel for our vibrant web3 community.
           Let's build the future together!</p>
        <ul>
            <li><a href="mailto:deanslistng@gmail.com"><img src={msg_icon} alt="" />deanslistng@gmail.com</a></li>
            <li><a href="tel:+234 9160340199"><img src={phone_icon} alt="" />+234 9160340199</a></li>
            <li><img src={location_icon} alt="" />188A Ikot Ekpene Rd, Uyo<br/>Akwa Ibom State, Nigeria.</li>
        </ul>
       </div>
       <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
            <textarea name="message" row="6" placeholder='Enter your message' required> </textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>

        </form>
        <span>{result}</span>
       </div>
    </div>
  )
}

export default Contact