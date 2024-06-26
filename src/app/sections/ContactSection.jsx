"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import Link from "next/link";
import Image from "next/image";

import GithubIcon from "../../../public/img/github-icon.svg";
import LinkedinIcon from "../../../public/img/linkedin-icon.svg";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const changeTheme = useSelector((state) => state.theme);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5
          className={` ${
            changeTheme.theme ? "text-white" : "text-slate-900"
          } text-xl font-bold my-2`}
        >
          Let&apos;s Connect
        </h5>
        <p className="text-gray-500 mb-4 max-w-md">
          {" "}
          I&apos;m actively seeking new opportunities, so feel free to reach
          out. Whether you have questions or just want to say hi, I&apos;ll make
          every effort to respond promptly. My inbox is always open!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/BrunaNicolau">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/bruna-nicolau-01/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-transparent border border-[#33353F] placeholder-gray-500 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-transparent border border-[#33353F] placeholder-gray-500 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-transparent border border-[#33353F] placeholder-gray-500 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-br  from-tertiary-500 via-primary-500 to-secondary-500 hover:bg-slate-800
               text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
