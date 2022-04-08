import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <ScrollToTop />
      <Footer />
    </main>
  );
}
