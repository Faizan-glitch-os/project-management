import Button from "./components/button";

import NoProject from "./components/no-project";

function App() {
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">
        Project Management
      </h1>
      <section className="flex">
        <div className="w-2/5 min-h-screen bg-slate-900 pl-12 pt-16 rounded-tr-3xl flex flex-col items-start gap-8">
          <h2 className="text-4xl text-white font-bold">Your Projects</h2>
          <Button children="+Add Project" />
          <p></p>
        </div>
        <div className="w-3/5 min-h-screen flex flex-col items-center justify-center gap-4">
          <NoProject />
        </div>
      </section>
    </>
  );
}

export default App;
