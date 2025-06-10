"use client";

import "../public/assets/scss/styles.scss";
import MobileNav from "@/components/headers/MobileNav";
import { Suspense, useEffect } from "react";
import SiteMenu from "@/components/headers/SiteMenu";
import ScrollTop from "@/components/common/ScrollTop";
import CursorFollor from "@/components/common/CursorFollor";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import PopupSearch from "@/components/headers/PopupSearch";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import HeaderTop from "@/components/headers/HeaderTop";
import Loading from "./loading";

export default function RootLayout({ children }) {
  const path = usePathname();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      var topPos = window.scrollY || document.documentElement.scrollTop;
      var stickyWrapper = document.querySelector(".sticky-wrapper");

      if (stickyWrapper) {
        if (topPos > 500) {
          stickyWrapper.classList.add("sticky");
        } else {
          stickyWrapper.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });

      import("wowjs").then(({ WOW }) => {
        const wow = new WOW({ mobile: false, live: false });
        wow.init();
      });
    }
  }, [path]);

  return (
    <html lang="fr" className="bg-white">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteMenu />
        <MobileNav />
        <PopupSearch />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <HeaderTop />
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <CursorFollor />
        <ScrollTop />
        <Footer />
      </body>
    </html>
  );
}
