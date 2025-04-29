import CodeWithText from "./CodeWithText";
import IconDoc from "../icons/IconDoc";
import IconGithub from "../icons/IconGithub";
import coding from "../assets/coding.svg";
import { useState } from "react";
import IconLinkedIn from "../icons/IconLinkedIn";

const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About me", href: "#about-me" },
  { id: 3, name: "Works", href: "#works" },
  { id: 4, name: "Contacts", href: "#contacts" },
];

export default function NavbarAndHero() {
  const [activeLink, setActiveLink] = useState(navLinks[0].id);
  return (
    <section id="home" className="bg-primary py-10">
      <div className="max-w-[1100px] mx-auto">
        {/* header nav bar section  */}
        <div className="flex justify-between items-center">
          <h1 className="text-tertiary font-extrabold text-2xl [word-spacing:-8px]">
            Y<span className="text-secondary">E </span>P
            <span className="text-secondary">YAE </span>A
            <span className="text-secondary">UNG</span>
          </h1>

          {/* nav links  */}
          <div className="text-tertiary text-sm font-bold">
            <ul className="flex gap-10 ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-tertiary transition-all duration-300"
                >
                  <a
                    href={link.href}
                    className={`flex items-center gap-2 ${
                      activeLink === link.id ? "text-accent" : ""
                    }`}
                    onClick={() => {
                      setActiveLink(link.id)
                    }}
                  >
                    {link.id === activeLink ? (
                      <CodeWithText text={link.name} />
                    ) : (
                      link.name
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-secondary text-sm flex gap-10">
            <a
              href="https://github.com/yepyaeaung13"
              target="_blank"
              className="flex items-center gap-2"
            >
              <IconGithub />
              Github
            </a>
            <a
              href="/Ye_Pyae_Aung_Frontend_Resume.pdf"
              download={"Ye_Pyae_Aung_Frontend_Resume.pdf"}
              target="_blank"
              title="Resume"
              className="active:scale-95 duration-150"
            >
              <IconDoc />
            </a>
          </div>
        </div>
        {/* hero section */}
        <div className="w-full flex">
          <div className="space-y-20">
            <div className="mt-28 pl-16 space-y-10">
              <h1 className="bg-accent inline-block text-xs p-2">
                Front End Developer
              </h1>
              <h2 className="text-3xl text-white">
                Talk is cheap,
                <br /> show me the code.
              </h2>
              <p className="text-tertiary mt-5 text-xs w-96 leading-5">
                I’m a frontend developer with a passion for building web
                applications. I love to learn new technologies and improve my
                skills.
              </p>

              <a href="https://linkedin.com/in/ye-pyae-aung-905807312" target="_blank" className="text-accent underline font-bold text-sm flex items-center gap-2">
               <IconLinkedIn /> LET'S CHAT!
              </a>
            </div>

            <div className="flex gap-20">
              <p className="text-4xl flex gap-3 items-center text-white">
                1{" "}
                <span className="text-xs text-secondary">
                  YEARS <br /> EXPERIENCE
                </span>
              </p>
              <p className="text-4xl flex gap-3 items-center text-white">
                15{" "}
                <span className="text-xs text-secondary">
                  PROJECTS <br /> EXPERIENCE
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img src={coding} alt="" className="mt-20 w-5/6" />
          </div>
        </div>
      </div>
    </section>
  );
}
