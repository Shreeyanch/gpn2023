// import React, { useState } from 'react';
import { SUBMITBTN } from '.';
import styles from "../style";
import { layout } from "../style";
import Button from "./Button";
import emailjs from "@emailjs/browser";

import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
            "service_tzlyoyt",
            "template_i4idg0g",
            form.current,
            "oU27CS7ajRr35CmcP"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
        
        alert('Thank you for your message, We will get back to you soon!');
    };


return (
    <section id="getintouch" className={` ${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <form ref={form} onSubmit={sendEmail}>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] mt-2 mb-2">Get in<span className="text-gradient">Touch</span>{" "}</h1>
        
        
        <label className=" mt-3 w-full font-poppins font-semibold ss:text-[20px] text-[20px] text-white ss:leading-[100.8px] leading-[75px]" >
        <input className=" h-20 w-full bg-white rounded-full bg-opacity-25 text-white-700 placeholder-white-500 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 " placeholder="Full Name" type="text" name="user_name" />
        </label>
        
        <label className=" mt-3 w-full font-poppins font-semibold ss:text-[20px] text-[20px] text-white ss:leading-[100.8px] leading-[75px]">
        <input className=" h-20 w-full bg-white rounded-full bg-opacity-25 text-white-700 placeholder-white-500 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 " placeholder="Email"  type="email" name="user_email" />
        </label>
        <br />
        
        <label className=" mt-3 w-full h-2 font-poppins font-semibold ss:text-[20px] text-[20px] text-white ss:leading-[100.8px] leading-[75px]">
        <textarea className=" w-full bg-white rounded-full bg-opacity-25 text-white-700 placeholder-white-500 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300" placeholder="Message" name="message" />
        </label>
        {/* <input  type="submit" value="Send" /> */}
        <center><button type="submit" value="Send"><SUBMITBTN styles={`mt-2`} /></button></center>
      </form>

    </section>
    
      
    
  );
};


export default Contact;
