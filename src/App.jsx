import Button from "./components/button";

function App() {
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">
        Project Management
      </h1>
      <section>
        <div className="w-2/5 min-h-screen bg-slate-900 pl-12 pt-16 rounded-tr-3xl">
          <h2 className="text-4xl text-white font-bold mb-16">Your Projects</h2>
          <Button children="+Add Project" />
          <p></p>
        </div>
        <div className="w-3/5"></div>
      </section>
    </>
  );
}

export default App;
