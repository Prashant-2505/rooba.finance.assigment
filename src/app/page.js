'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from '../../public/images/AstrixLogo.png';
import image143 from '../../public/images/image143.png';
import image144 from '../../public/images/image144.png';
import image145 from '../../public/images/image145.png';
import image146 from '../../public/images/image146.png';
import image147 from '../../public/images/image147.png';
import image148 from '../../public/images/image148.png';
import image149 from '../../public/images/image149.png';
import image150 from '../../public/images/image150.png';

export default function Home() {

  const textStyle = `font-semibold text-[30px] md:text-[45px] lg:text-[60px] leading-[34px] md:leading-[44px] flex items-center uppercase`

  const [img1Width, setImg1Width] = useState("");
  const [img2Width, setImg2Width] = useState("");
  const [img3Width, setImg3Width] = useState("");
  const [img4Width, setImg4Width] = useState("");
  const [img5Width, setImg5Width] = useState("");
  const [img6Width, setImg6Width] = useState("");
  const [img7Width, setImg7Width] = useState("");
  const [img8Width, setImg8Width] = useState("");

  useEffect(() => {
    const animateImage = () => {
      setImg1Width("276px"); // Initial width for animation
      setImg2Width("300px")
      setImg3Width("391px")
      setImg4Width("199px")
      setImg5Width("199px")
      setImg6Width("200px")
      setImg7Width("158px")
      setImg8Width("121px")
      setTimeout(() => {
        setImg1Width("371px"); // Final width after animation
        setImg2Width("539px")
        setImg3Width("260px")
        setImg4Width("203px")
        setImg5Width("203px")
        setImg6Width("271px")
        setImg7Width("207px")
        setImg8Width("121px")
      }, 2000); // Adjust the duration as needed
    };

    const interval = setInterval(animateImage, 3000); // Repeat the animation every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <main>
      <div className="landing_page_div_1 min-h-[100vh] w-full py-[40px] px-[20px] sm:px-[30px] lg:px-[50px] bg-[#fff4df] flex flex-col justify-center items-center relative">
        <Image
          className="w-[200px] sm:w-[300px] lg:w-[406px] h-auto mb-[30px] absolute top-[50px] left-[20px] sm:left-[30px] lg:left-[50px]"
          src={logo}
          alt="Astrix Logo"
        />

        <div className="my-[5rem] sm:my-[7rem] lg:my-[10rem] flex justify-center items-center h-full w-full">
          <div className="w-[100%] lg:h-[80%] lg:w-[80%] space-y-8">
            <p className={textStyle}>
              we
              <span className="mx-2" style={{ width: img1Width, height: "71px", transition: 'width 1s', overflow: "hidden" }}>
                <Image
                  className="h-full w-full"
                  src={image143}
                  alt="Image 143"
                />
              </span>
              organize the
            </p>

            <p className={textStyle}>
              connection
              <span className="mx-2" style={{ width: img2Width, height: "71px", transition: 'width 1s', overflow: "hidden" }}>
                <Image
                  className="h-full w-full"
                  src={image144}
                  alt="Image 144"
                />
              </span>
            </p>

            <p className={textStyle}>
              <span className="mx-2" style={{ width: img3Width, height: "71px", transition: 'width 1s', overflow: "hidden" }} >
                <Image
                  className="h-full w-full"
                  src={image145}
                  alt="Image 145"
                />
              </span>
              Between
              <span style={{ width: img4Width, height: "71px", transition: 'width 1s', overflow: "hidden" }}>
                <Image
                  className="h-full w-full"
                  src={image146}
                  alt="Image 146"
                />
              </span>
              Music
            </p>

            <p className={textStyle}>
              Artist
              <span className="mx-2" style={{ width: img4Width, height: "71px", transition: 'width 1s', overflow: "hidden" }}>
                <Image
                  className="h-full w-full"
                  src={image147}
                  alt="Image 147"
                />
              </span>
              Culture
              <span className="mx-2" style={{ width: img1Width, height: "71px", transition: 'width 1s', overflow: "hidden" }}>
                <Image
                  className="h-full w-full"
                  src={image148}
                  alt="Image 148"
                />
              </span>
            </p>

            <p className={textStyle}>
              <span className="mx-2" style={{ display: 'inline-block', width: img7Width, height: "71px", transition: 'width 1s', overflow: "hidden" }}>
                <Image
                  className="h-full w-full"
                  src={image149}
                  alt="Image 149"
                />
              </span>
              Art
              <span className="mx-2" style={{ display: 'inline-block', width: img8Width, height: "71px", transition: 'width 1s', overflow: "hidden" }} >
                <Image
                  className="h-full w-full"
                  src={image150}
                  alt="Image 150"
                />
              </span>
              & Collection
            </p>

          </div>
        </div>
      </div>
      <div className="landing_page_div_2"></div>
    </main>
  );
}
