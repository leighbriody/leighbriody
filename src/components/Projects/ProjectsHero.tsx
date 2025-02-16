export function ProjectsHero() {
  return (
    <section>
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 px-4 py-8">
        <div className="max-w-screen-lg text-white">
          <h2 className="mb-4 text-4xl tracking-tight text-white">Projects</h2>
        </div>
        <div></div>
        <div className="col-span-2">
          <h2 className="text-2xl font-light tracking-tight text-white">
            I love building shit 🛠️ currently trying to build a successful SaaS
            🚀
          </h2>
        </div>
        <div className="mt-4 h-2 w-full bg-secondary"></div>
      </div>
    </section>
  );
}
