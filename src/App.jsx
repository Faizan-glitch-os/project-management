import Button from "./components/button";
import { useRef, useState } from "react";

import NewProject from "./components/new-project";

import NoProject from "./components/no-project";

import UserInput from "./components/user-input";
import ViewProject from "./components/view-project";
function App() {
  const [newProject, setNewProject] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [index, setIndex] = useState();

  const [addProjects, setAddProject] = useState([
    {
      title: "Project 1",
      description: "Project 1 description",
      date: "2023-10-01",
    },
  ]);

  function handleNewProject() {
    setNewProject(!newProject);
    setShowProject(false);
  }

  function handleOnProjectClick(index) {
    setShowProject(true);
    setIndex(index);
  }

  function handleAddNewProject(newProject) {
    setAddProject((oldProjects) => [...oldProjects, newProject]);
    handleNewProject();
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
            children={newProject ? "Cancel" : "+Add Project"}
            btnStyle="noBg"
            handleOnClick={handleNewProject}
          />
          <ol>
            {addProjects.length > 0 ? (
              addProjects.map((project, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleOnProjectClick(index)}
                    className="text-2xl text-neutral-300 hover:text-neutral-400"
                  >
                    {project.title}
                  </button>
                </li>
              ))
            ) : (
              <p className="text-xl text-white">No Projects</p>
            )}
          </ol>
        </div>
        {showProject && <ViewProject project={addProjects[index]} />}
        {newProject && (
          <NewProject
            handleOnCancel={handleNewProject}
            handleOnSave={handleAddNewProject}
          />
        )}
      </section>
    </>
  );
}

export default App;
