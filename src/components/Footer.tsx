import IconLinkedIn from "../icons/IconLinkedIn";
import IconViber from "../icons/IconViber";
import IconGmail from "../icons/IconGmail";
import IconPhone from "../icons/IconPhone";
import IconLocation from "../icons/IconLocation";
import IconCopyRight from "../icons/IconCopyRight";

export default function Footer() {
  return (
    <section id="contacts" className="bg-primary-dark">
      <div className="max-w-[1100px] mx-auto py-10 px-20 space-y-10">
        <div className="space-y-5">
          <h1 className="text-xs text-secondary">contacts</h1>
          <div className="flex justify-between gap-5">
            <p className="text-xs text-white leading-6">
              I&apos;m open to joining a collaborative team. Let&apos;s connect!
            </p>
            <div className="flex gap-5 justify-center">
              <a
                href="https://www.linkedin.com/in/ye-pyae-aung-905807312/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-xs flex items-center gap-2"
              >
                <IconLinkedIn />
                LinkedIn
              </a>
              <a
                href="viber://chat?number=+959898626060"
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
            <p className="text-sm text-secondary flex items-center gap-1">
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
  );
}
