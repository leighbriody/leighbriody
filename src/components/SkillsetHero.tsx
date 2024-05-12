import Image from "next/image";
import planet1 from "../../public/planet1.png";

export function SkillsetHero() {
  return (
    <section>
      <div className="mx-auto grid  max-w-screen-xl grid-cols-2 px-4 py-8">
        <div className="max-w-screen-lg text-white">
          <h2 className="mb-4 text-4xl tracking-tight text-white">Skillset</h2>
        </div>
        <div></div>
        <div className="col-span-2">
          <h2 className=" text-2xl font-light tracking-tight text-white">
            Some of my skils include
          </h2>
        </div>

        <div className="col-span-1 mt-4 h-2 w-full bg-secondary"></div>
        <div>
          <Image
            src={planet1}
            width={50}
            height={50}
            alt="planet"
            className="float-right"
          ></Image>
        </div>
      </div>
    </section>
  );
}
