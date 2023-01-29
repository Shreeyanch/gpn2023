// import React, { useState } from 'react';
// import { SUBMITBTN } from '.';
// import styles from "../style";
// import { layout } from "../style";
// import Button from "./Button";
// import emailjs from "@emailjs/browser";



// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     emailjs
//     .sendForm(
//       "service_tzlyoyt",
//       "template_i4idg0g",
//       form.current,
//       "oU27CS7ajRr35CmcP"
//     )
//     .then(
//       (result) => {
//         console.log(result.text);
//         alert('Thank you for your message, We will get back to you soon!')
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
//     // Send form data to your email here
//     // console.log(formData);
//     // alert('Thank you for your message, We will get back to you soon!');
//   }

//   return (
//     <section id="features" className={` ${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow`}>
//         <form  onSubmit={handleSubmit}>
//         <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] mt-2 mb-2">
//           Get in
//             <span className="text-gradient">Touch</span>{" "}
//           </h1>
        
        
//         <label className=" font-poppins font-semibold ss:text-[20px] text-[20px] text-white ss:leading-[100.8px] leading-[75px]">

           
//             <input className=" h-20 w-full bg-white rounded-full bg-opacity-25 text-white-700 placeholder-white-500 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 " placeholder="Full Name" type="text" name="name" value={formData.name} onChange={handleChange} />
            
//         </label>
//         <br />
//         <label  className="  mt-2 font-poppins font-semibold ss:text-[20px] text-[20px] text-white ss:leading-[100.8px] leading-[75px]" >
     
          
//           <input className=" h-20 w-full bg-white rounded-full bg-opacity-25 text-white-700 placeholder-white-500 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300" placeholder="Email"  type="email" name="email" value={formData.email} onChange={handleChange} />
          
//         </label>
//         <br />
//         <label  className=" mt-3 w-full h-2 font-poppins font-semibold ss:text-[20px] text-[20px] text-white ss:leading-[100.8px] leading-[75px]">
//           <textarea className=" w-full bg-white rounded-full bg-opacity-25 text-white-700 placeholder-white-500 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300" placeholder="Message" name="message" value={formData.message} onChange={handleChange} />
//         </label>
//         <br />
        
//         <center><button type="submit" value="Send"><SUBMITBTN styles={`mt-2`} /></button></center>
//       </form>
//     </section>
    
    
//   );
// }

// export default ContactForm;
