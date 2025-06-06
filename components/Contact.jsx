import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "9eb1663c-c67e-48f0-a74d-bdbfe4986bb8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult(`❌ ${data.message}`);
    }
  };

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-16 scroll-mt-20 bg-[url("/footer-bg-color.png")] 
      bg-no-repeat bg-center bg-[length:90%_auto]'
    >
      <h3 className="text-center mb-2 text-1xl font-ovo uppercase tracking-widest text-indigo-600">
        Connect With Me
      </h3>
      <h2 className="text-center text-5xl font-ovo font-semibold mb-12 text-gray-900 dark:text-gray-100">
        Get in touch
      </h2>
      <p className="text-justify max-w-2xl mx-auto mt-4 mb-12 font-ovo text-gray-700 dark:text-gray-300 leading-relaxed">
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </p>

      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-gray-800 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-gray-800 dark:text-white"
          />
        </div>

        <textarea
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white dark:bg-gray-800 dark:text-white mb-6"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-center gap-2 
          bg-black/80 text-white rounded-full mx-auto hover:bg-gray-800 dark:hover:bg-gray-600 transition"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </button>

        <p className="mt-4 text-center text-sm text-green-700 dark:text-green-400 font-medium">
          {result}
        </p>
      </form>
    </div>
  );
};

export default Contact;
