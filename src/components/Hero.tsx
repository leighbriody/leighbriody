import { ViewProjectsButton } from "./DownloadCVButton";
import spaceman from "../../public/floating-spaceman.png";
import Image from "next/image";
import { ViewProjectsGlowButton } from "./ViewProjectsGlowButton";

export function Hero() {
  return (
    <div className="banner">
      <section>
        <div className="mx-auto mt-[-280px] grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-1xl font-poppins mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-5xl">
              Hi There
              {/* <span className="md:text-10xl ml-2 text-3xl sm:text-4xl">👋</span> */}
            </h1>

            <h2 className="mb-4 max-w-5xl text-6xl font-extrabold leading-none tracking-tight dark:text-white md:text-8xl xl:text-8xl">
              <div className="flex items-center">
                <div className="text-white">I&apos;m&nbsp;</div>{" "}
                <div className="text-secondary">Leigh !</div>
              </div>
            </h2>

            <p className="mb-6 max-w-2xl font-bold text-primary dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Full Stack Software Engineer With A Passion For Building New And
              Exciting Software.Always Working On New Projects & Ideas.
            </p>

            <a
              href="#"
              className="mr-3 inline-flex items-center justify-center"
            >
              <ViewProjectsGlowButton></ViewProjectsGlowButton>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-2 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Download CV
            </a>
          </div>
          <div className="float hidden lg:col-span-5 lg:mt-0 lg:flex">
            <Image
              src={spaceman}
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>
        </div>
        {/* shooting stars */}
        <span></span>
      </section>
    </div>
  );
}
