import React from "react";

function CTA() {
  return (
    <div className="pt-20 sm:pt-36 relative w-full">
      <img className="w-30 m-auto mb-2" src="/static/doodles/lineBreak.svg" />
      <div className="pt-10 sm:pt-16 pb-32 sm:pb-48 text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 tracking-tight">
          Interested in Working Together?
        </h2>
        <a
          href="https://www.linkedin.com/in/muhammadtanveerabbas/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer font-bold whitespace-nowrap inline-block px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-all duration-300 hover:shadow-lg hover:shadow-fun-pink/30 hover:-translate-y-1"
        >
          Get in Touch
        </a>
      </div>

      <img
        className="sqD w-full min-w-[600px] sm:min-w-[800px] bottom-[-60px] sm:bottom-[-100px] left-1/2 -translate-x-1/2 object-cover"
        style={{ zIndex: "-10" }}
        src="/static/doodles/hero/fancyLines.svg"
      />
    </div>
  );
}

export default CTA;
