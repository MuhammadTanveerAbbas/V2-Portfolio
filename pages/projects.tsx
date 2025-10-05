import Heading from "../components/projects/Heading";
import More from "../components/projects/More";
import Page from "../components/utility/Page";
import Projects from "../components/projects/Projects";
import React from "react";

function ProjectsPage() {
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: "Projects",
        desc: "I code using tools like React, NextJS, Tailwind, and many more! Here are some of my projects.",
      }}
      hideFooter={false}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default ProjectsPage;
