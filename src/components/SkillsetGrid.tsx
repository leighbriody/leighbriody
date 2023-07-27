import { SkillCard } from "./SkillCard/SkillCard";
import Image from "next/image";
import planet1 from "../../public/planet1.png";

export function SkillsetGrid() {
  return (
    <div className="skillset-banner py-20">
        <section>
      <div className="mx-auto grid  max-w-screen-xl grid-cols-2 px-4 py-8">
        <div className="max-w-screen-lg text-white">
          <h2 className="mb-4 text-4xl tracking-tight text-gray-900 dark:text-white">
            Skillset
          </h2>
        </div>
        <div></div>
        <div>
          <h2 className="text-2xl tracking-tight text-white">
            Current technologies I am working with.
          </h2>
        </div>
        <div>
        <Image src={planet1} width={50} height={50} alt="planet" className="float-right"></Image>

        </div>
      </div>
    </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-4 lg:py-6">
          <div className="max-w-screen-lg">
            <div className="grid grid-cols-4 gap-4 md:grid-cols-5 md:gap-x-20 lg:gap-x-60 lg:gap-y-20">
              <div>
                <SkillCard image="/react-star.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/csharp.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/tailwind.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/python.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/MUI.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/gql.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/ts.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/git.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/firebaselogo.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/jest.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/java.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/vite.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/postgres.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/mongodb.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/css.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/figma.webp"></SkillCard>
              </div>
              <div>
                <SkillCard image="/js.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/next.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/redux.png"></SkillCard>
              </div>
              <div>
                <SkillCard image="/prisma.png"></SkillCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
