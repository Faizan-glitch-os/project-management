import Button from "./components/button";
import { useState } from "react";

import NewProject from "./components/new-project";

import NoProject from "./components/no-project";

import UserInput from "./components/user-input";

function App() {
  const [showNewProject, setShowNewProject] = useState(false);

  function handleNewProject() {
    setShowNewProject(!showNewProject);
  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">
        Project Management
      </h1>
      <section className="flex">
        <div className="w-2/5 min-h-screen bg-slate-900 pl-12 pt-16 rounded-tr-3xl flex flex-col items-start gap-8">
          <h2 className="text-4xl text-white font-bold">Your Projects</h2>
          <Button
            children={showNewProject ? "Cancel" : "+Add Project"}
            bgColor={true}
            handleOnClick={handleNewProject}
          />
          <p></p>
        </div>
        {showNewProject ? (
          <NewProject handleOnClick={handleNewProject} />
        ) : (
          <NoProject handleOnClick={handleNewProject} />
        )}
      </section>
    </>
  );
}

export default App;
