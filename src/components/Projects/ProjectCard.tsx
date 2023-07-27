import assetBrain from "../../../public/assetbrain.png";

import Image from "next/image";
import { Pill } from "../Pill/Pill";
import { Launch } from "../Launch/Launch";
import { Github } from "../Github/Github";

export function ProjectCard() {
  return (
    <div className="group flex h-full flex-col rounded-xl bg-primary shadow-sm">
      <div className="border-fun-gray flex h-60 flex-col items-center justify-center rounded-xl border border-fungray p-2 transition hover:-translate-y-2 hover:border-funpink hover:opacity-75">
        <Image
          src={assetBrain}
          width={500}
          height={500}
          alt="planet"
          className="rounded-xl"
        ></Image>
      </div>
      <div className="">
        <div className="grid grid-cols-2">
          <div>
            <h3 className="pt-8 text-xl text-white">Code Ninja</h3>
          </div>
          <div className="pt-8">
            <Github></Github>

            <Launch name="Live"></Launch>
          </div>
        </div>
        <p className="mt-3 font-light text-white">
          A software that develops products for software developers and
          developments.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-5">
        <div className="mt-2">
          <Pill></Pill>
        </div>
        <div className="mt-2">
          <Pill></Pill>
        </div>
        <div className="mt-2">
          <Pill></Pill>
        </div>
        <div className="mt-2">
          <Pill></Pill>
        </div>
        <div className="mt-2">
          <Pill></Pill>
        </div>
        <div className="mt-2">
          <Pill></Pill>
        </div>
      </div>
      {/* <div className="mt-auto flex divide-x divide-gray-200 border-t border-gray-200 dark:divide-gray-700 dark:border-gray-700">
        <a
          className="inline-flex w-full items-center justify-center gap-2 rounded-bl-xl bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800 sm:p-4"
          href="#"
        >
          View sample
        </a>
        <a
          className="inline-flex w-full items-center justify-center gap-2 rounded-br-xl bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800 sm:p-4"
          href="#"
        >
          View API
        </a>
      </div> */}
    </div>
  );
}
