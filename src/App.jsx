import Button from "./components/button";
import { useRef, useState } from "react";

import NewProject from "./components/new-project";

import NoProject from "./components/no-project";

import UserInput from "./components/user-input";
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
            bgColor={true}
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
        </div>{" "}
        <div className="flex flex-col gap-3 w-3/5 min-h-screen px-8">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold text-neutral-600">
              {addProjects[0].title}
            </h2>
            <button className="text-xl   text-neutral-600 hover:text-neutral-800 rounded-xl">
              Delete
            </button>
          </div>
          <p className="text-base text-neutral-600">{addProjects[0].date}</p>
          <p className="text-lg font-semibold text-neutral-600">
            {addProjects[0].description}
          </p>
          <hr className="border-t-2 border-neutral-500 mb-4" />
          <h2 className="text-3xl font-bold text-neutral-600">Tasks</h2>
          <p className="flex  gap-4">
            <input
              type="text"
              id="title"
              required
              placeholder="add task"
              className={`h-16 resize-none overflow-hidden bg-neutral-200 rounded-md w-2/5 text-2xl text-neutral-800 px-2  border-b-neutral-400 border-b-4 focus:border-b-neutral-600 border-transparent focus:outline-none`}
            />
            <button className="text-xl   text-neutral-600 hover:text-neutral-800 rounded-xl">
              Add Task
            </button>
          </p>
          <ol className="flex flex-col  bg-neutral-200 rounded-sm px-4 py-8 mt-4 gap-6">
            <p className="flex justify-between  ">
              <li className="text-xl text-neutral-800">1st item</li>
              <button className="text-xl   text-neutral-600 hover:text-neutral-800 rounded-xl">
                Clear
              </button>
            </p>
          </ol>
        </div>
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
