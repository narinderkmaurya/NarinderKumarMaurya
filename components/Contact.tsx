// components/Contact.tsx
import React, { useEffect } from 'react';
import { Button } from './ui/button';
import AOS from "aos";
import "aos/dist/aos.css";


const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="2000" id='contact' className='sm:py-20'>
      <div className="max-w-lg mx-auto p-4 rounded-md  ">
        <h2 className="text-3xl dark:text-sky-500 font-semibold  mb-4">Contact Here</h2>
        <form action="https://airform.io/narinder06@pm.me" method="post">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              autoComplete='off'
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border dark:bg-transparent/30 rounded-md "
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              autoComplete='off'
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border dark:bg-transparent/30 rounded-md"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border dark:bg-transparent/30 rounded-md"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <Button
              type="submit"
              variant="outline">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
