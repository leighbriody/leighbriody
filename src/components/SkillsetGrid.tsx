import { SkillCard } from "./SkillCard/SkillCard";
import { SkillsetHero } from "./SkillsetHero";

export function SkillsetGrid() {
  return (
    <div className="skillset-banner py-20">
      <div className="banner-inner">
        <SkillsetHero />

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-4 lg:py-6">
            <div className="max-w-screen-xl">
              <div className="grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-x-20 lg:grid-cols-7 lg:gap-x-20 lg:gap-y-20">
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
                  <SkillCard image="/firebase-cropped.png"></SkillCard>
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
                <div>
                  <SkillCard image="/docker-cropped.png"></SkillCard>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
