import IconCode from "../icons/IconCode";
import IconSEO from "../icons/IconSEO";
import IconJS from "../icons/IconJS";
import IconHTML from "../icons/IconHTML";
import IconTailwind from "../icons/IconTailwind";
import IconTS from "../icons/IconTS";
import IconReact from "../icons/IconReact";
import IconRedux from "../icons/IconRedux";
import IconNextJS from "../icons/IconNextJS";
import IconNodeJS from "../icons/IconNodeJS";
import IconEX from "../icons/IconEX";
import IconGit from "../icons/IconGit";
import IconLinux from "../icons/IconLinux";
import IconMySQL from "../icons/IconMySQL";

export default function AboutMeAndSkill() {
  return (
    <section id="about-me" className="bg-primary-dark">
      <div className="max-w-[1100px] mx-auto py-20 space-y-36">
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
                <h1 className="text-tertiary text-xl font-medium">Back End</h1>
                <IconCode />
              </div>
                <p className="text-secondary text-xs">
                I have some experience with back end projects.
                </p>
              <p className="text-tertiary font-bold text-xs">3 Projects</p>
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
              and I’ve quickly adapted by learning new technologies and building
              quality projects. My passion for coding and eagerness to grow
              drive me to deliver great work.
            </p>
          </div>
        </div>

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
  );
}
