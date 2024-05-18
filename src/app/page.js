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

  const textStyle = `font-semibold text-[64px] leading-[44px] flex  items-center`

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
      setImg1Width("300px"); // Initial width for animation
      setImg2Width("400px")
      setImg3Width("441px")
      setImg4Width("299px")
      setImg5Width("299px")
      setImg6Width("300px")
      setImg7Width("158px")
      setImg8Width("151px")
      setTimeout(() => {
        setImg1Width("371px"); // Final width after animation
        setImg2Width("539px")
        setImg3Width("260px")
        setImg4Width("203px")
        setImg5Width("203px")
        setImg6Width("371px")
        setImg7Width("207px")
        setImg8Width("151px")
      }, 2000); // Adjust the duration as needed
    };

    const interval = setInterval(animateImage, 3000); // Repeat the animation every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <main>
      <div className="landing_page_div_1 min-h-[100vh] w-full py-[40px] px-[50px] bg-[#fff4df]">
        <Image
          className="w-[406px] h-[50.94px] mb-[30px]"
          src={logo}
          alt="Astrix Logo"
        />

        <div className="flex justify-center items-center">
          <div className=" h-[80%] w-[75%] space-y-8">
            <p className={textStyle}>
              we
              <span style={{ width: img1Width, height: "71px", transition: 'width 1s', overflow: "hidden" }}>
                <Image
                  className=" w-[371px] h-full "
                  src={image143}
                  alt="Image 143"
                  layout="fixed"

                />
              </span>
              organize the
            </p>

            <p className={textStyle}>
              connection
              <span style={{ width: img2Width, height: "71px", transition: 'width 1s', overflow: "hidden" }}>
                <Image
                  className={`h-full w-[${img2Width}]`}
                  src={image144}
                  alt="Image 143"
                  layout="fixed"

                />
              </span>

            </p>

            <p className={textStyle}>
              <span style={{ width: img3Width, height: "71px", transition: 'width 1s', overflow: "hidden" }} >
                <Image
                  className={`h-full w-[${img3Width}]`}
                  src={image145}
                  alt="Image 143"
                  layout="fixed"

                />
              </span>
              Between
              <span style={{ width: img1Width, height: "71px", transition: 'width 1s', overflow: "hidden" }}>
                <Image
                  className={`h-full w-[${img4Width}]`}
                  src={image146}
                  alt="Image 143"
                  layout="fixed"

                />
              </span>
              Music
            </p>

            <p className={textStyle}>
              Artist
              <span style={{ width: img4Width, height: "71px", transition: 'width 1s', overflow: "hidden" }}>
                <Image
                  className=" w-[371px] h-full "
                  src={image147}
                  alt="Image 143"
                  layout="fixed"

                />
              </span>
              Culture
              <span style={{ width: img1Width, height: "71px", transition: 'width 1s', overflow: "hidden" }}>
                <Image
                  className=" w-[371px] h-full "
                  src={image148}
                  alt="Image 143"
                  layout="fixed"

                />
              </span>
            </p>

            <p className={textStyle}>
              <span style={{ display: 'inline-block', width: img7Width, height: "71px", transition: 'width 1s', overflow: "hidden" }}>
                <Image
                  src={image149}
                  alt="Image 149"
                  width={371}
                  height={61}
                  style={{ width: '100%', height: '100%' }}
                />
              </span>
              Art
              <span>
                <Image
                  className="w-[200px] h-[71px]"
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
