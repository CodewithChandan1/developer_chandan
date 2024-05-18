import React, { useState, useEffect } from "react";
import Pdetail from "../Menu/Pdetail";
import About from "../Pages/About/About";
import Achievement from "../Pages/Achievement/Achievement";
import Project from "../Pages/Project/Project";
import Contactus from "../Pages/Contact/Contact";
import Education from "../Pages/Education/Education";
import "./Home.css";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Menu/Navbar";
import Colorsidebar from "../Components/Colorsidebar/Colorsidebar";
import "../index.css";
import PreeLoading from "./PreeLoading";

const colorMappings = {
  white: {
    "--white": "#ffffff",
    "--white-1": "#fff",
    "--black": "#171717",
    "--black-3": "#111827",
    "--black-4": "#171717",
    "--black-5": " rgba(0, 0, 0, 0.5)",
    "--grey-1": "gray",
    "--black-6": "#171717",
    "--yellow": "#ffbf00",
    "--scroll": "#ffbf00",
    "--blue": "rgb(47, 84, 150)",
    "--yellow-1": "#ffbf00",
    "--black-7": "#121212",
  },
  dark: {
    "--white": "#171717",
    "--white-1": "#262626",
    "--black": "#fff",
    "--black-3": "#404040",
    "--black-4": "#fff",
    "--black-5": "#404040",
    "--grey-1": "#404040",
    "--scroll": "#171717",
    "--blue": "rgb(47, 84, 150)",
  },
  green: {
    "--yellow": "green",
    "--black-6": "#fff",
    "--yellow-1": "green",
    "--scroll": "green",
    "--blue": "green",
    "--black-7": "#fff",
  },
  purple: {
    "--yellow": "purple",
    "--black-6": "#fff",
    "--yellow-1": "purple",
    "--scroll": "purple",
    "--blue": "purple",
    "--black-7": "#fff",
  },
  blue: {
    "--yellow": "blue",
    "--black-6": "#fff",
    "--yellow-1": "blue",
    "--scroll": "blue",
    "--blue": "blue",
    "--black-7": "#fff",
  },
};

function Home() {
  const [currentColor, setCurrentColor] = useState("white");

  const handleColorChange = (color) => {
    setCurrentColor(color);
    const colorStyles = colorMappings[color];
    for (const key in colorStyles) {
      document.documentElement.style.setProperty(key, colorStyles[key]);
    }
  };

  // --end

  const [toggle, setToggle] = useState(false);
  const [toggleColor, settoggleColor] = useState();

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset"; // Reset overflow when component unmounts
    };
  }, [toggle]);

  useEffect(() => {
    if (toggleColor) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset"; // Reset overflow when component unmounts
    };
  }, [toggleColor]);

  // Pree Loading

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  // onscroll div setting button
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {loading ? (
        <PreeLoading />
      ) : (
        <div className="homediv_main" id="home">
          {/*------------------- Personal Details -------------------*/}
          <div
            className={`left_personal_details ${toggle === true && "active"}`}
          >
            <Pdetail isActive={toggle} setActive={setToggle} />
          </div>

          <div className="home_div_main_feed">
            <div
              className={`sidebarcolodiv ${toggleColor === true && "active"}`}
            >
              <Colorsidebar
                isActive={toggleColor}
                setisActive={settoggleColor}
                handleColorChange={handleColorChange}
                currentColor={currentColor}
              />
            </div>
            <div className="wrapper">
              <div className="leftside_home_div">
                <div className="menudots" onClick={() => setToggle(true)}>
                  <i class="fa-solid fa-bars"></i>
                </div>

                <div
                  className="menudots settingicon"
                  onClick={() => settoggleColor(true)}
                >
                  <i class="fa-solid fa-gear"></i>
                </div>

                <p className="hi">HI THERE !</p>
                <h1>
                  I'M Chandan <span className="text-yellow">Kumar</span>
                </h1>
                <h4 className="text-yellow ">
                  FrontEnd
                  <span className="type-animation"> Developer </span>
                </h4>

                <p className="looking">
                  Passionate and dedicated front-end developer with a solid
                  foundation in computer science. Experienced in crafting
                  engaging user interfaces and optimizing user experiences
                  across a variety of projects, from small-scale web
                  applications to large-scale e-commerce platforms. Proficient
                  in front-end technologies such as HTML, CSS, JavaScript, and
                  React.js, with a continuous drive to expand knowledge and
                  skills. Enjoys leveraging creativity and problem-solving
                  abilities to deliver high-quality solutions. Seeking
                  opportunities to contribute expertise and grow within the
                  field of front-end development.
                  {/* <br class="looking_br" /> 
                <br class="looking_br" /> */}
                </p>
                <div className="btn_hireme">
                  <a
                    href="/assets/img/updated_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn_hire btnsame">
                      Hire Me <i className="fa-solid fa-user-tie"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/*-------------------- ABout File --------------------*/}
            <About />
            {/*----------------- Project Section ------------------ */}
            <Project />
            {/* ------------------ Archivements --------------------- */}
            <Achievement />
            {/*---------------------- Education ----------------------*/}
            <Education />
            {/*--------------------- Contact Form --------------------*/}
            <Contactus />
            {/*-------------------- Footer Section --------------------*/}
            <Footer />
          </div>
          {/*------------------------ Navbar ------------------------*/}
          <Navbar setisActive={settoggleColor} isHidden={isHidden} />
        </div>
      )}
    </>
  );
}

export default Home;
