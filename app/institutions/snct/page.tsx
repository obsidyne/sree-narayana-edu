import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm from "./components/ContactForm";
import SchoolWebsite from "./components/SchoolWebsite";
const page = () => {
  return (
    <>
      <Navbar />
      <SchoolWebsite />
      <ContactForm />
      <Footer />
    </>
  );
};

export default page;
