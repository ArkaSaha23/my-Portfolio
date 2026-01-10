import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Facebook, Github, Instagram, Linkedin, LocationEdit, Mail, Map, MapPin, Phone, PhoneCall, Twitter } from "lucide-react";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yim2lgo', 'template_8owky7h', form.current, {
        publicKey: 'hvERsD6lsU7D4lwFL',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset();
          console.log('SUCCESS!');
        },
        (error) => {
          alert('Failed to send the message, please try again.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id="contact" className="mt-10 min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
      <div className="fullbox mx-auto">
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-center text-glow">
          <span className="text-blue-500">Contact </span>
          <span className="text-foreground">Me</span>
        </h2>
      </div>

      <div className="max-w-full flex justify-center h-20 text-center font-mono mt-5">
        Want to get in touch? Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-full mx-auto">
        <div className="mt-4 space-y-4 text-center font-mono text-sm md:text-lg transition-all duration-300">
          <h4 className="font-mono font-bold text-xl md:text-2xl text-blue-400">Contact Informations</h4>
          <div>
            <div className="flex justify-center text-mono">
              <Mail className="h-6 w-6 text-primary font-mono text-lg mr-2"/>
              <h4>Email</h4>
            </div>
            <a className="hover:text-blue-400 text-sm md:text-base" href="mailto:arkasaha557@gmail.com">arkasaha557@gmail.com</a>
          </div>
          <div>
            <div className="flex justify-center text-mono">
              <Phone className="h-6 w-6 text-primary font-mono text-lg mr-2"/>
              <h4>Phone</h4>
            </div>
            <a className="hover:text-blue-400 text-sm md:text-base" href="tel:7278681293">7278681293</a>
          </div>
          <div>
            <div className="flex justify-center text-mono">
              <MapPin className="h-6 w-6 text-primary font-mono text-lg mr-2"/>
              <h4>Location</h4>
            </div>
            <div className="hover:text-blue-400 text-sm md:text-base" >Batanagar, Kolkata, India</div>
          </div>
          <div className="mt-10 font-mono font-bold text-xl md:text-2xl text-blue-400">Lets Connect</div>
          <div className="flex justify-center space-x-6 mt-3">
            <a href="https://www.linkedin.com/in/arka-saha-530467295" target="_blank" className="navbar-btn">
            <Linkedin/>
            </a>
            <a href="https://github.com/ArkaSaha23" target="_blank" className="navbar-btn">
            <Github/>
            </a>
            <a href="https://www.instagram.com/_okayyy.target_?igsh=dzV2c2xxYnRkd2o1" target="_blank" className="navbar-btn">
            <Instagram/>
            </a>
            <a href="https://www.facebook.com/share/184JmJQA6S/" target="_blank" className="navbar-btn">
            <Facebook/>
            </a>
            <a href="https://x.com/ArkaSaha232004" target="_blank" className="navbar-btn">
            <Twitter/>
            </a>            
          </div>
        </div>

        <div className="transition-all duration-300 ease-in-out p-2 ">
          <h4 className="mt-2 font-mono font-bold text-xl md:text-2xl text-blue-400 text-center mb-4">Send Me a Message</h4>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mt-3">
              <h4 className="text-sm md:text-lg font-mono">
                Enter your Name
              </h4>
              <input 
              type="text" 
              id="name"
              name="name"
              placeholder="Your Name" 
              className="w-full p-2 my-2 rounded-md bg-primary/15 border-1 hover:border-blue-200 text-white transition-all duration-300"/>
            </div>
            <div className="mt-3">
              <h4 className="text-sm md:text-base font-mono">
                Enter your Email
              </h4>
              <input 
              type="email" 
              id="email"
              name="email"
              placeholder="Your Email" 
              className="w-full p-2 my-2 rounded-md bg-primary/15 border-1 hover:border-blue-200 text-white transition-all duration-300"/>
            </div>
            <div className="mt-3">
              <h4 className="text-sm md:text-base font-mono">
                Enter your Message
              </h4>
              <input 
              type="textarea" 
              id="message"
              name="message"
              placeholder="Your Message" 
              className="w-full p-2 my-2 rounded-md bg-primary/15 border-1 hover:border-blue-200 text-white transition-all duration-300"/>
            </div>
            <button type="submit" value="send" className="mt-4 btn-primary hover:scale-110">
              Send Message
            </button>
          </form>          
        </div>
      </div>
    </div>
  );
}
export default Contact;