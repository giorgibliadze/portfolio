import { useEffect, useState } from "react";
import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

// Font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const handleResize = () => {
      setHeight(`${window.innerHeight}px`);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{ height: height }}
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Analytics />
      <SpeedInsights />
      <TopLeftImg />
      <Nav />
      <Header />
      <div style={{ overflowY: "auto", maxHeight: "calc(100% - 80px)" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
