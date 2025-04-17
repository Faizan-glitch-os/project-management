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
          <Button children="+Add Project" bgColor={true} />
          <p></p>
        </div>
        <div className="w-3/5 min-h-screen px-8">
          <p className="justify-end">
            <Button children="Cancel" bgColor={false} />
            <Button children="Save" bgColor={true} />
          </p>
          <p className="flex flex-col item-start gap-1">
            <label
              htmlFor="title"
              className="font-bold uppercase text-2xl text-neutral-600"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              required
              className="bg-neutral-200 rounded-md w-auto text-2xl text-neutral-800 px-2 py-4 border-b-neutral-400 border-b-4 focus:border-b-neutral-600 border-transparent focus:outline-none"
            />
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
