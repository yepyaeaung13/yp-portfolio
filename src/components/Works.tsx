export default function Works() {
  return (
    <section id="works" className="bg-primary-dark-two">
      <div className="max-w-[1100px] mx-auto max-sm:px-5 py-10 space-y-36">
        {/* works section  */}
        <div className="flex max-sm:flex-col md:px-20 md:gap-24 gap-16">
          <div className="md:w-1/2 flex flex-col justify-center items-center md:gap-24 gap-16">
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
              <div className="md:p-10 px-5 py-3">
                <div className="flex max-sm:flex-col max-sm:gap-2 justify-between">
                  <h1 className="text-white text-xl font-medium">Commerce</h1>
                  <div className="flex gap-2 items-center">
                    <a
                      href="https://github.com/yepyaeaung13/commerce"
                      target="_blank"
                      className="bg-[#4D4D55] text-[#f7f7f7] text-xs px-2 py-1 rounded-md"
                    >
                      Source Code
                    </a>
                    <a
                      href="https://commerce-hdty.vercel.app/"
                      target="_blank"
                      className="bg-[#4D4D55] text-[#f7f7f7] text-xs px-2 py-1 rounded-md"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
                <span className="text-xs text-secondary">
                  Current developing
                </span>
              </div>

              <div className="flex justify-between items-center md:mt-6 mt-10">
                {/* Rotated Image */}
                <img
                  src="/commerce.jpg"
                  alt="To Do App Project Screenshot"
                  className="w-full h-auto rotate-12 rounded-md shadow-md"
                />
              </div>
            </div>

            <div className="space-y-10">
              <p className="text-xs text-secondary leading-6">
                * Some projects not allow publish by NDA.
                <br />
                if you want to see more,{" "}
                <a href="#contacts" className="text-accent underline">
                  contact
                </a>
              </p>
            </div>
          </div>

          {/* works cards  */}
          <div className="md:w-1/2 flex flex-col md:gap-24 gap-16 items-center justify-center">
            {/* card 1 */}
            <div className="w-full h-96 bg-[#31313A] shadow-2xl rounded-lg overflow-hidden">
              <div className="flex max-sm:flex-col max-sm:gap-2 justify-between md:p-10 px-5 py-3">
                <h1 className="text-accent text-xl font-medium">Portfolio</h1>
                <div className="flex gap-2 items-center">
                  <a
                    href="https://github.com/yepyaeaung13/yp-portfolio"
                    target="_blank"
                    className="bg-[#4D4D55] text-[#f7f7f7] text-xs px-2 py-1 rounded-md active:scale-95 duration-150"
                  >
                    Source Code
                  </a>
                  <a
                    href="https://yp-portfolio.vercel.app/"
                    target="_blank"
                    className="bg-[#4D4D55] text-[#f7f7f7] text-xs px-2 py-1 rounded-md active:scale-95 duration-150"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              <div className="flex justify-between items-center md:mt-6 mt-10">
                {/* Rotated Image */}
                <img
                  src="/portfolio.jpg"
                  alt="Portfolio Project Screenshot"
                  className="w-full h-auto rotate-12 rounded-md shadow-md"
                />
              </div>
            </div>

            <div className="w-full h-96 bg-[#31313A] shadow-2xl rounded-lg overflow-hidden">
              <div className="flex  max-sm:flex-col max-sm:gap-2 justify-between md:p-10 px-5 py-3">
                <h1 className="text-white text-xl font-medium">To do app</h1>
                <div className="flex gap-2 items-center">
                  <a
                    href="https://github.com/yepyaeaung13/react-vite-to-do-app"
                    target="_blank"
                    className="bg-[#4D4D55] text-[#f7f7f7] text-xs px-2 py-1 rounded-md active:scale-95 duration-150"
                  >
                    Source Code
                  </a>
                  <a
                    href="https://react-vite-to-do-app.vercel.app/"
                    target="_blank"
                    className="bg-[#4D4D55] text-[#f7f7f7] text-xs px-2 py-1 rounded-md active:scale-95 duration-150"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              <div className="flex justify-between items-center md:mt-6 mt-10">
                {/* Rotated Image */}
                <img
                  src="/to-do-app.png"
                  alt="To do app Project Screenshot"
                  className="w-full h-auto rotate-12 rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
