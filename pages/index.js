import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import Buttons from "../components/Buttons";
import Images from "../components/Images";
import Infos from "../components/Infos";
import Teams from "../components/Teams";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [show, setShow] = useState("images");

  const handleShow = (option) => {
    setShow(option);
  };

  return (
    <>
      <Head>
        <title>Tailwind Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className={
          isDark
            ? "bg-[#0C151D] text-[#F1F2F4] w-full py-5 md:py-8 px-5 md:px-[450px] flex flex-col items-center"
            : "bg-[#F1F2F4] text-[#0C151D] w-full py-5 md:py-8 px-5 md:px-[450px] flex flex-col items-center"
        }
      >
        <div
          onClick={() => setIsDark(!isDark)}
          className={
            isDark
              ? "w-[48px] h-[48px] md:w-20 md:h-20 rounded-full bg-[#171F26] flex items-center justify-center cursor-pointer"
              : "w-[48px] h-[48px] md:w-20 md:h-20 rounded-full bg-[#fff] flex items-center justify-center cursor-pointer"
          }
        >
          <Image
            src="/images/icon1.png"
            alt="Dark Mode Toogle"
            width={40}
            height={40}
          />
        </div>

        <div className=" flex text-center md:text-start flex-col md:flex-row items-center md:justify-start justify-center md:justify-between mt-[65px] w-full">
          <div className="w-[215px] h-[215px] rounded-full border border-yellow-600 border-solid flex items-center justify-center">
            <Image
              src="/images/kdb.jpg"
              alt="kdb"
              width={192}
              height={192}
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="font-medium text-[46px] leading-[69px]">
              Kevin De Bruyne
            </h1>
            <p className="text-[#A3ABB2] font-medium text-[22px] leading-[33px]">
              Professional Footballer
            </p>
            <div className="flex justify-center md:justify-start gap-[26px] text-[#A3ABB2] mt-[15px]">
              <AiOutlineInstagram size={36} className="cursor-pointer" />
              <AiOutlineFacebook size={36} className="cursor-pointer" />
              <AiOutlineTwitter size={36} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <Infos />
        <Buttons />
        <div className="w-full py-[18px] px-[25px] flex bg-[#171F26] rounded-3xl">
          <div
            onClick={() => handleShow("images")}
            className={
              show === "images"
                ? "w-1/2 h-20 bg-[#0C151D] rounded-xl flex items-center justify-center text-[22px] font-medium text-[#A3ABB2] cursor-pointer"
                : "w-1/2 h-20 rounded-xl flex items-center justify-center text-[22px] font-medium text-[#A3ABB2] cursor-pointer"
            }
          >
            Images
          </div>
          <div
            onClick={() => handleShow("teams")}
            className={
              show !== "images"
                ? "w-1/2 h-20 bg-[#0C151D] rounded-xl flex items-center justify-center text-[22px] font-medium text-[#A3ABB2] cursor-pointer"
                : "w-1/2 h-20 rounded-xl flex items-center justify-center text-[22px] font-medium text-[#A3ABB2] cursor-pointer"
            }
          >
            Teams
          </div>
        </div>

        {show === "images" ? <Images /> : <Teams />}

        <div className="mt-20 text-[22px] font-medium text-[#A3ABB2]">
          Kevin De Bruyne 2022
        </div>
      </div>
    </>
  );
}
