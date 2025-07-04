import React from "react";
import Image from "next/image";
import SectionTitle from "../global/SectionTitle";
import { testimonials } from "@/data/content/home";

function Testimonials() {
  return (
    <section className="flex flex-col text-left max-w-md md:max-w-full w-full mx-auto">
      <SectionTitle title="Why people love my work!" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="relative bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full flex flex-col justify-between"
          >
            {index === 0 && (
              <div className="absolute top-[-50px] left-20 md:top-auto md:bottom-[-100px] md:left-auto md:right-[-25px] z-[-10]">
                <Image
                  src="/static/doodles/testimonials/yay.svg"
                  alt="Decorative Yay"
                  width={80}
                  height={80}
                />
              </div>
            )}

            <p className="text-base italic relative">"{item.quote}"</p>
            <p className="mt-4 text-xs text-fun-gray">
              <b className="text-fun-pink font-monospace">{item.name}</b> —{" "}
              {item.job}
            </p>
            {index === 2 && (
              <div className="absolute top-[-30px] right-[-15px]">
                <Image
                  src="/static/doodles/testimonials/squiggle2.svg"
                  alt="Decorative squiggle"
                  width={44}
                  height={44}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
