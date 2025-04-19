import React from "react";
import SchoolWebsite from "./components/SchoolWebsite";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm from "./components/ContactForm";
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
