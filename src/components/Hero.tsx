import spaceman from "../../public/hero-hero.png";
import spaceman2 from "../../public/spaceman2.png";

import Image from "next/image";
import { SpaceButton } from "./SpaceButton/SpaceButton";

interface MyComponentProps {
  onClick: () => void;
  onClickSkills: () => void;
  onExperienceClicked: () => void;
}

export function Hero({
  onClick,
  onClickSkills,
  onExperienceClicked,
}: MyComponentProps) {
  function viewProjects() {
    onClick();
  }

  function viewSkills() {
    onClickSkills();
  }
  return (
    <div className="banner ">
      <div className="sky"></div>
      <header className="z-50 flex w-full flex-wrap  py-3 text-xl sm:flex-nowrap sm:justify-start sm:py-0">
        <nav
          className="relative mx-auto w-full max-w-7xl px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-2xl font-semibold text-white"
              href="#"
              aria-label="Brand"
            >
              Leigh Briody
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white p-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="h-4 w-4 hs-collapse-open:hidden"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hidden h-4 w-4 hs-collapse-open:block"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
          >
            <div className="mt-5 flex flex-col gap-x-0 gap-y-4 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-x-7 sm:gap-y-0 sm:pl-7">
              <a
                className="font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 sm:py-6"
                href="#"
                onClick={viewSkills}
              >
                Skills
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 sm:py-6"
                href="#"
                onClick={viewProjects}
              >
                Projects
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 sm:py-6"
                href="#"
                onClick={onExperienceClicked}
              >
                Experience
              </a>
            </div>
          </div>
        </nav>
      </header>
      <section>
        <div className="mx-auto mt-20 grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-1xl font-poppins mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-5xl">
              Hi There
            </h1>

            <h2 className="mb-4 max-w-5xl text-6xl font-extrabold leading-none tracking-tight dark:text-white md:text-8xl xl:text-8xl">
              <div className="flex items-center">
                <div className="text-white">I&apos;m&nbsp;</div>{" "}
                <div className="text-secondary">Leigh !</div>
              </div>
            </h2>

            <p className="mb-6 max-w-2xl  text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Senior Software Engineer building and scaling authentication
              systems. I care about intuitive, user-centred experiences and
              building full stack software that solves real user problems.
            </p>

            <a
              href="#"
              className="mr-3 inline-flex items-center justify-center"
              onClick={viewProjects}
            >
              <SpaceButton></SpaceButton>
            </a>
          </div>
          <div className="float hidden lg:col-span-5 lg:mt-0 lg:flex">
            <Image
              src={spaceman2}
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
