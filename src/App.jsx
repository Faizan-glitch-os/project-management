import Button from "./components/button";
import { useRef, useState } from "react";

import NewProject from "./components/new-project";

import NoProject from "./components/no-project";

import UserInput from "./components/user-input";
import ViewProject from "./components/view-project";
function App() {
  const [show, setShow] = useState("");
  const [index, setIndex] = useState();

  const [addProjects, setAddProject] = useState([]);

  let content;

  if (show === "new") {
    content = (
      <NewProject
        handleOnCancel={handleCancel}
        handleOnSave={handleAddNewProject}
      />
    );
  } else if (show === "selected") {
    content = (
      <ViewProject
        project={addProjects[index]}
        ProjectIndex={index}
        onTaskClick={handleAddTask}
        onClearClick={handleClearTask}
        onDeleteClick={handleDeleteProject}
      />
    );
  } else if ("nothing") {
    content = <NoProject handleOnClick={handleOnNewProjectClick} />;
  }

  function handleOnNewProjectClick() {
    setShow("new");
  }
  function handleCancel() {
    setShow("nothing");
  }

  function handleOnProjectClick(index) {
    setIndex(index);
    setShow("selected");
  }

  function handleAddNewProject(newProject) {
    setAddProject((oldProjects) => [...oldProjects, newProject]);
    handleCancel();
  }

  function handleAddTask(index, task) {
    setAddProject((prevProjects) => {
      const updatedProjects = [...prevProjects]; // Create a shallow copy of the projects array
      const updatedProject = { ...updatedProjects[index] }; // Create a shallow copy of the specific project
      updatedProject.tasks = [...(updatedProject.tasks || []), task]; // Add the new task immutably
      updatedProjects[index] = updatedProject; // Replace the updated project in the array
      return updatedProjects; // Return the new array
    });
  }

  function handleClearTask(index, taskIndex) {
    setAddProject((prevProjects) => {
      const updatedProjects = [...prevProjects]; // Create a shallow copy of the projects array
      const updatedProject = { ...updatedProjects[index] }; // Create a shallow copy of the specific project
      updatedProject.tasks = updatedProject.tasks.filter(
        (_, i) => i !== taskIndex
      ); // Remove the task at the specified index immutably
      updatedProjects[index] = updatedProject; // Replace the updated project in the array
      return updatedProjects; // Return the new array
    });
  }

  function handleDeleteProject(index) {
    setAddProject((prevProjects) => {
      return prevProjects.filter((_, i) => i !== index); // Remove the project at the specified index
    });
    setShow("nothing"); // Hide the project view if the deleted project was being viewed
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
            children={show === "new" ? "Cancel" : "+Add Project"}
            btnStyle="noBg"
            handleOnClick={
              show === "new" ? handleCancel : handleOnNewProjectClick
            }
          />
          <ol className="w-full">
            {addProjects.length > 0 ? (
              addProjects.map((project, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleOnProjectClick(index)}
                    className="w-full px-4 py-2 text-2xl text-start text-neutral-300 hover:rounded-l-md hover:text-neutral-400 hover:bg-neutral-700"
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
        {content}
      </section>
    </>
  );
}

export default App;
