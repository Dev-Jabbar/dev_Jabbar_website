import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useTheme } from "next-themes";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const buttonVariants = {
  hover: {
    scale: 1.1,

    textshadow: "0px 0px 8px, rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",

    transition: {
      duration: 0.3,
      repeat: "Infinity",

      repeatType: "mirror",
    },
  },
};

export default function ContactMe() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const { theme } = useTheme();

  const ContactTheme =
    theme === "dark"
      ? "dark:bg-black"
      : "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r8pejxm",
        "template_f57b54n",
        form.current,
        "gLAV6p5c2pKScO-iy"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("sent , would reply you soon..");
          setEmail("");
          setTextarea("");
          setUsername("");
          toast.success("sent to JABBAR", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
          console.log("not sent, Try again..");

          toast.error("Error,try again later!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };
  return (
    <div
      className={`h-screen ${ContactTheme}  bg-white flex relative flex-col text-center md:text-left md:flex-row w-screen px-10 justify-evenly mx-auto items-center z-0 `}
    >
      <ToastContainer
        className="absoute md:mt-10 mt-6 mr-20 md:mr-16 "
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className=" dark:bg-blue-300 bg-blue-900 bg-opacity-10 md:w-[1150px] w-[400px] h-[500px] dark:bg-opacity-10 md:h-[500px] md:mt-24 mt-16 backdrop-filter backdrop-blur-sm border  border-r-0 border-t-0 z-30  ">
        <form
          className="flex flex-col justify-evenly items-center h-full  "
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="text-blue-500 shadow-black shadow-lg  text-1xl tracking-[20px] border-0 font-serif">
            CONTACT ME
          </div>
          <input
            className="md:w-[500px] w-[350px] text-center dark:text-white bg-transparent border-r-0 border-t-0 border-l-0 dark:border-white dark:border-opacity-50   tracking-widest focus:bg-transparent"
            type="text"
            name="user_name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your Full Name"
          ></input>
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email addeess"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="md:w-[500px] w-[350px] text-center dark:text-white bg-transparent border-r-0 border-t-0 border-l-0 darK:border-white dark:border-opacity-50   tracking-widest focus:outline-none focus:outline-transparent"
          ></input>

          <textarea
            placeholder="Drop your Message here"
            name="message"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
            className="focus:text-start md:w-[500px] w-[350px] text-center dark:text-white text-black bg-transparent border-r-0 border-t-0 border-l-0 dark:border-white dark:border-opacity-50   tracking-widest focus:outline-none focus:outline-transparent"
          ></textarea>
          <div className="md:flex md:justify-between flex flex-col justify-center items-center dark:text-white md:w-[500px]  w-[350px] dark:text-opacity-50 ">
            <div className="flex ">
              <PhoneIcon className="w-4 mr-1 h-4 rounded-full dark:text-white" />
              <h1>+2347066986305</h1>
            </div>
            <div className="flex ">
              <EnvelopeIcon className="w-4 mr-1 h-4 rounded-full dark:text-white" />
              <h1>momohabduljabbar@gmail.com</h1>
            </div>
          </div>
          <motion.input
            variants={buttonVariants}
            whileHover="hover"
            type="Submit"
            value="Send"
            className=" text-center text-blue-500 tracking-widest font-serif "
          ></motion.input>
        </form>
      </div>

      <motion.div
        className="absolute z-0  md:top-96 top-[500px] -left-20  "
        initial={{ y: -700, scale: 0.1 }}
        whileInView={{ y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        drag
      >
        <div className=" relative w-[15rem] h-[10rem] md:w-[20rem] md:h-[20rem] overflow-hidden ">
          <Image
            className=" absolute w-full h-full object-cover"
            src="https://res.cloudinary.com/demo/image/fetch/https://thumbs.gfycat.com/GenuineOddballCleanerwrasse-max-1mb.gif"
            width={100}
            height={100}
            alt=""
          ></Image>
        </div>
      </motion.div>
    </div>
  );
}
