import Button from "./components/button";
import { useRef, useState } from "react";

import NewProject from "./components/new-project";

import NoProject from "./components/no-project";

import UserInput from "./components/user-input";
import ViewProject from "./components/view-project";
function App() {
  const [showNewProject, setShowNewProject] = useState(false);

  const [addProjects, setAddProject] = useState([
    {
      title: "Project 1",
      description: "Project 1 description",
      date: "2023-10-01",
    },
  ]);

  function handleShowProject() {
    setShowNewProject(!showNewProject);
  }

  function handleOnProjectClick() {}

  function handleAddNewProject(newProject) {
    console.log(newProject);
    setAddProject((oldProjects) => [...oldProjects, newProject]);
    handleShowProject();
    console.log(addProjects);
    console.log(addProjects.length);
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
            btnStyle="noBg"
            handleOnClick={handleShowProject}
          />
          <ol>
            {addProjects.map((project) => (
              <li>
                <button className="text-2xl text-neutral-600 hover:text-neutral-400">
                  {project.title}
                </button>
              </li>
            ))}
          </ol>
        </div>
        <ViewProject project={addProjects[0]} />
      </section>
    </>
  );
}

export default App;

/* {showNewProject ? (
    <NewProject
      handleOnCancel={handleShowProject}
      handleOnSave={handleAddNewProject}
    />
  ) : (
    <NoProject handleOnClick={handleShowProject} />
  )} */
