import { useState } from "react";
import CodeWithText from "./components/CodeWithText";
import IconDoc from "./icons/IconDoc";
import IconGithub from "./icons/IconGithub";
import coding from "./assets/coding.svg";
import IconCode from "./icons/IconCode";
import IconSEO from "./icons/IconSEO";
import IconJS from "./icons/IconJS";
import IconHTML from "./icons/IconHTML";
import IconTailwind from "./icons/IconTailwind";
import IconTS from "./icons/IconTS";
import IconReact from "./icons/IconReact";
import IconRedux from "./icons/IconRedux";
import IconNextJS from "./icons/IconNextJS";
import IconNodeJS from "./icons/IconNodeJS";
import IconEX from "./icons/IconEX";
import IconGit from "./icons/IconGit";
import IconLinux from "./icons/IconLinux";
import IconMySQL from "./icons/IconMySQL";
import IconLinkedIn from "./icons/IconLinkedIn";
import IconViber from "./icons/IconViber";
import IconTelegram from "./icons/IconTelegram";
import IconGmail from "./icons/IconGmail";
import IconPhone from "./icons/IconPhone";
import IconLocation from "./icons/IconLocation";
import IconCopyRight from "./icons/IconCopyRight";

const navLinks = [
  { id: 1, name: "About me", href: "#about-me" },
  { id: 2, name: "Works", href: "#works" },
  { id: 3, name: "Notes", href: "#notes" },
  { id: 4, name: "Contacts", href: "#contacts" },
];

function App() {
  const [activeLink, setActiveLink] = useState(navLinks[0].id);

  return (
    <main className="font-IBM-Plex-Mono">
      <section className="bg-primary py-10">
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
                      onClick={() => setActiveLink(link.id)}
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
              <a href="#" className="flex items-center gap-2">
                <IconGithub />
                Github
              </a>
              <a href="#" title="Resume">
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

                <a href="#" className="text-accent underline font-bold text-sm">
                  LET'S CHAT!
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

      <section className="bg-primary-dark">
        <div className="max-w-[1100px] mx-auto py-20 space-y-36">
          {/* about me section  */}
          <div className="flex gap-36">
            <div className="w-1/2 space-y-1.5">
              <div className="bg-primary p-5 relative z-10 space-y-3 shadow-[0_20px_20px_5px_rgba(0,0,0,0.25)] rounded-lg">
                <div className="flex justify-between">
                  <h1 className="text-accent text-xl font-medium">Front End</h1>
                  <IconCode />
                </div>
                <p className="text-secondary text-xs">
                  I develop front end with coding super smooth.
                </p>
                <p className="text-tertiary font-bold text-xs">15 Projects</p>
              </div>

              <div className="bg-primary p-5 z-0 space-y-3 shadow-2xl shadow-black/35 rounded-lg">
                <div className="flex justify-between">
                  <h1 className="text-tertiary text-xl font-medium">
                    Back End
                  </h1>
                  <IconCode />
                </div>
                <p className="text-secondary text-xs">
                  I develop back end with coding super smooth.
                </p>
                <p className="text-tertiary font-bold text-xs">5 Projects</p>
              </div>

              <div className="bg-primary p-5 z-0 space-y-3 shadow-2xl shadow-black/35 rounded-lg">
                <div className="flex justify-between">
                  <h1 className="text-tertiary text-xl font-medium">SEO</h1>
                  <IconSEO />
                </div>
                <p className="text-secondary text-xs">
                  Boost your website's visibility and ranking on search engines.
                </p>
              </div>
            </div>

            <div className="w-1/2 space-y-5">
              <h1 className="text-xs text-secondary">introduce</h1>
              <h1 className="text-3xl text-white [word-spacing:-5px]">
                Hello! I'm Ye Pyae Aung
              </h1>
              <h2 className="text-white font-medium leading-6">
                Every great project starts with a great idea.
                <br /> I can help you make it happen.
              </h2>
              <p className="text-tertiary mt-5 text-xs leading-6">
                I’m a self-taught frontend developer with a background in IT.
                Transitioning into web development has been an exciting journey,
                and I’ve quickly adapted by learning new technologies and
                building quality projects. My passion for coding and eagerness
                to grow drive me to deliver great work.
              </p>
            </div>
          </div>

          {/* tech stack section  */}
          <div className="w-2/3 mx-auto">
            <ul className="flex flex-wrap gap-x-16 gap-y-10 items-center text-xs text-tertiary font-bold justify-center">
              <li>
                <IconHTML />
              </li>
              <li>
                <IconTailwind />
              </li>
              <li>
                <IconJS />
              </li>
              <li>
                <IconTS />
              </li>
              <li>
                <IconReact />
              </li>
              <li>
                <IconRedux />
              </li>
              <li>
                <IconNextJS />
              </li>
              <li>
                <IconNodeJS />
              </li>
              <li>
                <IconEX />
              </li>
              <li>
                <IconMySQL />
              </li>
              <li>
                <IconGit />
              </li>
              <li>
                <IconLinux />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary-dark-two">
        <div className="max-w-[1100px] mx-auto py-10 space-y-36">
          {/* works section  */}
          <div className="flex px-20 gap-24">
            <div className="w-1/2 flex flex-col justify-center items-center gap-24">
              <div className="space-y-5">
                <h1 className="text-xs text-secondary">works</h1>
                <h1 className="text-2xl text-white [word-spacing:-5px]">
                  Latest Works
                </h1>
                <h2 className="text-secondary text-xs leading-6">
                  perfect solution for digital experience
                  <br /> and web development.
                </h2>
              </div>

              {/* Project card  */}
              <div className="w-full h-96 bg-[#31313A] shadow-2xl rounded-lg overflow-hidden">
                <div className="flex justify-between p-10">
                  <h1 className="text-white text-xl font-medium">Finaco</h1>
                  <div className="flex gap-2 items-center">
                    <a
                      href="#"
                      className="bg-[#4D4D55] text-[#f7f7f7] text-xs px-2 py-1 rounded-md"
                    >
                      Source Code
                    </a>
                    <a
                      href="#"
                      className="bg-[#4D4D55] text-[#f7f7f7] text-xs px-2 py-1 rounded-md"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  {/* Rotated Image */}
                  <img
                    src="/image2.jpg"
                    alt="Finaco Project Screenshot"
                    className="w-full h-auto rotate-12 rounded-md shadow-md"
                  />
                </div>
              </div>

              <div className="space-y-10">
                <h1 className="text-accent text-xl font-medium underline">
                  All PROJECTS
                </h1>
                <p className="text-xs text-secondary leading-6">
                  * Some projects not allow publish by NDA.
                  <br />
                  if you want to see more,{" "}
                  <a href="#" className="text-accent underline">
                    contact
                  </a>
                </p>
              </div>
            </div>

            {/* works cards  */}
            <div className="w-1/2 flex flex-col gap-24 items-center justify-center">
              {/* card 1 */}
              <div className="w-full h-96 bg-[#31313A] shadow-2xl rounded-lg overflow-hidden">
                <div className="flex justify-between p-10">
                  <h1 className="text-accent text-xl font-medium">Finaco</h1>
                  <div className="flex gap-2 items-center">
                    <a
                      href="#"
                      className="bg-[#4D4D55] text-[#f7f7f7] text-xs px-2 py-1 rounded-md"
                    >
                      Source Code
                    </a>
                    <a
                      href="#"
                      className="bg-[#4D4D55] text-[#f7f7f7] text-xs px-2 py-1 rounded-md"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  {/* Rotated Image */}
                  <img
                    src="/image.jpg"
                    alt="Finaco Project Screenshot"
                    className="w-full h-auto rotate-12 rounded-md shadow-md"
                  />
                </div>
              </div>

              <div className="w-full h-96 bg-[#31313A] shadow-2xl rounded-lg overflow-hidden">
                <div className="flex justify-between p-10">
                  <h1 className="text-white text-xl font-medium">Finaco</h1>
                  <div className="flex gap-2 items-center">
                    <a
                      href="#"
                      className="bg-[#4D4D55] text-[#f7f7f7] text-xs px-2 py-1 rounded-md"
                    >
                      Source Code
                    </a>
                    <a
                      href="#"
                      className="bg-[#4D4D55] text-[#f7f7f7] text-xs px-2 py-1 rounded-md"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  {/* Rotated Image */}
                  <img
                    src="/image1.jpg"
                    alt="Finaco Project Screenshot"
                    className="w-full h-auto rotate-12 rounded-md shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer section  */}
      <section className="bg-primary-dark">
        <div className="max-w-[1100px] mx-auto py-10 px-20 space-y-10">
          <div className="space-y-5">
            <h1 className="text-xs text-secondary">contacts</h1>
            <div className="flex justify-between gap-5">
              <p className="text-xs text-white leading-6">
                I&apos;m open to joining a collaborative team. Let&apos;s
                connect!
              </p>
              <div className="flex gap-5 justify-center">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-xs flex items-center gap-2"
                >
                  <IconTelegram />
                  Telegram
                </a>
                <a
                  href="https://www.linkedin.com/in/yourusername/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-xs flex items-center gap-2"
                >
                  <IconLinkedIn />
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-xs flex items-center gap-2"
                >
                  <IconViber />
                  Viber
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            <ul className="space-y-3.5">
              <li className="text-xs text-white flex gap-2 items-center">
                <span className="w-5">
                  <IconGmail />
                </span>
                <span>yepyae.webdev@gmail.com</span>
              </li>
              <li className="text-xs text-white flex gap-2 items-center">
                <span className="w-5">
                  <IconPhone />
                </span>
                <span>+959 898 626 060</span>
              </li>
              <li className="text-xs text-white flex gap-2 items-center">
                <span className="w-5">
                  <IconLocation />
                </span>
                <span>Yangon, Myanmar</span>
              </li>
            </ul>

            <div className="flex justify-center gap-5">
              <p className="text-xs text-secondary flex items-center gap-1">
                <span className="">2025</span>
                <IconCopyRight />
                <h1 className="text-tertiary font-medium [word-spacing:-2px]">
                  Y<span className="text-secondary">E </span>P
                  <span className="text-secondary">YAE </span>A
                  <span className="text-secondary">UNG</span>
                </h1>
                , All rights reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
