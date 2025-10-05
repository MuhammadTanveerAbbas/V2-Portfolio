import React from "react";

type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="w-full pt-5 text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-10 section-title">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;
