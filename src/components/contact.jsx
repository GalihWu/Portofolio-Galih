import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { notification } from 'antd';

const Contact = () => {
  const formRef = useRef(null); // Create a reference for the form

  const openNotification = (type, message) => {
    notification[type]({
      message: message,
      placement: 'topRight',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        'service_57apuqo',
        'template_qgp2a4e',
        event.target,
        'WqVTGc3DjgnFGsF8o'
      )
      .then(
        (result) => {
          openNotification('success', 'Message sent successfully!');
          if (formRef.current) {
            formRef.current.reset(); // Reset the form fields
          }
        },
        (error) => {
          openNotification('error', 'Failed to send message.');
        }
      );
  };

  return (
    <section
      id="Contact"
      className="flex flex-col gap-[3rem] mx-[12%] mt-[5rem]"
    >
      <div className="flex gap-3 flex-col text-center justify-center items-center">
        <div className="text-2xl font-semibold">
          Let's create something amazing together.
        </div>
        <p className="sm:w-[70%]">
          I’m here to help with any questions or ideas you might have. Feel free
          to reach out, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <div>
        <form
          className="max-w-sm mx-auto"
          onSubmit={handleSubmit}
          ref={formRef} // Attach the reference to the form
        >
          {/* Email input */}
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="email"
              name="user_email"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              placeholder="your.email@example.com"
              required
            />
          </div>
          {/* Message input */}
          <label
            htmlFor="message"
            className="block mt-4 mb-2 text-sm font-medium text-gray-900"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Type your message here..."
            required
          />
          {/* Submit button */}
          <button type="submit" className="button-42 mt-[1rem]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
