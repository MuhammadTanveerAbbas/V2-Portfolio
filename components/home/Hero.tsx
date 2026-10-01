import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-16 sm:pt-24 pb-32 sm:pb-48 m-auto flex justify-center text-center flex-col items-center z-1"
      >
        <p className="text-3xl md:text-4xl font-bold mb-6 text-fun-gray-light">
          Hey, I'm Tanveer
        </p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl w-auto relative text-4xl md:text-5xl lg:text-6xl tracking-tight mb-12 font-bold heroShinyBg leading-tight">
          I develop <span className="heroShiny1 text-fun-pink">innovative</span>{" "}
          websites that elevate your{" "}
          <span className="heroShiny2 text-fun-pink">business</span>
          <img
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: "0.1s" }}
            src="/static/doodles/hero/html.svg"
          />
          <img
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
            style={{ animationDelay: "0.2s" }}
            src="/static/doodles/hero/nextjs.svg"
          />
          <img
            className="sqD bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[0px] w-[100px]"
            style={{ animationDelay: "0.5s" }}
            src="/static/doodles/hero/star-outline.svg"
          />
          <img
            className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
            style={{ animationDelay: "0.4s" }}
            src="/static/doodles/hero/coder.svg"
          />
          <img
            className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
            style={{ animationDelay: "0.5s" }}
            src="/static/doodles/hero/js.svg"
          />
          <img
            className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/dino.svg"
          />
          <img
            className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
            style={{ animationDelay: "0.7s" }}
            src="/static/doodles/hero/paintbrush.svg"
          />
          <img
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            src="/static/doodles/hero/pop1.svg"
          />
          <img
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/static/doodles/hero/code.svg"
          />
        </h1>
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-8 sm:px-12 py-4 sm:py-5 text-white border-2 text-base sm:text-lg rounded-full border-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-all duration-300 hover:shadow-lg hover:shadow-fun-pink/30 hover:-translate-y-1">
            My Projects
          </div>
        </ScrollLink>
      </div>
    </>
  );
}

export default Hero;
