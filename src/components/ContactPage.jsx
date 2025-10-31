import React, { useState } from 'react';
import Magnet from './Magnet'

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formsubmit.co/ajax/support@webdrave.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert('There was an error sending your message.');
      }
    } catch {
      alert('There was an error sending your message.');
    }
  };

  return (
    <section 
      data-scroll 
      data-scroll-section
      data-scroll-speed="0.1" 
      className="w-100vh min-h-screen bg-[#171717] py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-10 relative overflow-hidden"
    >
      {/* Header */}
      <div className="z-10 text-center mb-10">
        <div>
          <p className="text-sm font-spacebold uppercase tracking-wide text-heading">6. Get In Touch</p>
          <h2 className="text-6xl font-spacebold mt-2 leading-snug uppercase">
            Contact With Us Now For your dream website.
          </h2>
        </div>
      </div>

      {/* Form */}
      <form 
        action="https://formsubmit.co/support@webdrave.com" 
        method="POST"
        onSubmit={handleSubmit}
        className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8"
      >
        <input type="hidden" name="_subject" value="New Contact Form Submission" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value={window.location.origin + "/thank-you"} />
        
        <div className="w-full md:w-[50%] mx-auto">
          <div className="mb-12 border-b border-[#8C8C8C] pb-2">
            <label htmlFor="name" className="block text-sm sm:text-base md:text-lg uppercase text-[#919191] tracking-wider mb-1">
              Full Name
            </label>
            <input 
              id="name"
              name="name"
              type="text" 
              required
              className="w-full bg-transparent text-white outline-none text-lg sm:text-xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border-b border-[#8C8C8C] pb-2">
              <label htmlFor="email" className="block text-sm sm:text-base md:text-lg uppercase text-[#919191] tracking-wider mb-1">
                Email
              </label>
              <input 
                id="email"
                name="email"
                type="email" 
                required
                className="w-full bg-transparent text-white outline-none text-lg sm:text-xl"
              />
            </div>
            <div className="border-b border-[#8C8C8C] pb-2">
              <label htmlFor="phone" className="block text-sm sm:text-base md:text-lg uppercase text-[#919191] tracking-wider mb-1">
                Phone
              </label>
              <input 
                id="phone"
                name="phone"
                type="tel" 
                required
                className="w-full bg-transparent text-white outline-none text-lg sm:text-xl"
              />
            </div>
          </div>

          <div className="border-b border-[#8C8C8C] pb-2 mb-12">
            <label htmlFor="message" className="block text-sm sm:text-base md:text-lg uppercase text-[#919191] tracking-wider mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full bg-transparent text-white outline-none text-lg sm:text-xl resize-none"
            />
          </div>

          <button type="submit" className="mt-4 w-fit px-10 py-4 bg-purple hover:shadow-[3px_3px_0_#ffffff] active:scale-[97%] active:shadow-[2px_2px_0_#ffffff] text-white text-md font-spacelight rounded-md transition-shadow duration-300">
            Submit
          </button>
        </div>
        <Magnet padding={50} disabled={false} magnetStrength={15}>
          <div className="w-full md:w-auto flex justify-center">
            <img className="hover:scale-[105%] transition-all duration-200" src="img/contact.png" alt="Contact illustration" />
          </div>
        </Magnet>
      </form>

      {isSubmitted && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#171717] border border-white/20 p-8 rounded-lg max-w-md text-center">
            <h3 className="text-2xl font-spacebold text-white mb-4">Thank you!</h3>
            <p className="text-[#CCCCCC] mb-6">Your message has been sent successfully.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-purple text-white rounded-md hover:shadow-[3px_3px_0_#ffffff] transition-shadow duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;