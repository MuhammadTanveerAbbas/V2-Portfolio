import React from "react";
import Contact from "../components/contact/Contact";
import Page from "../components/utility/Page";

const ContactPage = () => {
  return (
    <Page
      currentPage="Contact"
      hideFooter={true}
      meta={{
        desc: "Get in touch with Muhammad Tanveer Abbas. Send a message or connect through social media.",
      }}
    >
      <Contact />
    </Page>
  );
};

export default ContactPage;
