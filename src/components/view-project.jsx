import { useRef } from "react";
import Button from "./button";

export default function ViewProject({
  project,
  ProjectIndex,
  onTaskClick,
  onClearClick,
  onDeleteClick,
}) {
  console.log(project);

  const task = useRef();

  return (
    <div className="flex flex-col gap-3 w-3/5 min-h-screen px-8">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold text-neutral-600">{project.title}</h2>
        <Button
          handleOnClick={() => onDeleteClick(ProjectIndex)}
          children="Delete"
          btnStyle="simple"
        />
      </div>
      <p className="text-base text-neutral-600">{project.date}</p>
      <p className="text-lg font-semibold text-neutral-600">
        {project.description}
      </p>
      <hr className="border-t-2 border-neutral-500 mb-4" />
      <h2 className="text-3xl font-bold text-neutral-600">Tasks</h2>
      <p className="flex  gap-4">
        <input
          ref={task}
          type="text"
          id="title"
          required
          placeholder="add task"
          className={`h-16 resize-none overflow-hidden bg-neutral-200 rounded-md w-2/5 text-2xl text-neutral-800 px-2  border-b-neutral-400 border-b-4 focus:border-b-neutral-600 border-transparent focus:outline-none`}
        />
        <Button
          handleOnClick={() => onTaskClick(ProjectIndex, task.current.value)}
          children="Add Task"
          btnStyle="simple"
        />
      </p>
      <ol className="flex flex-col bg-neutral-200 rounded-sm px-4 py-8 mt-4 gap-6">
        {project.tasks.map((item, index) => {
          return (
            <p key={index} className="flex justify-between">
              <li className="text-xl text-neutral-800">{item}</li>
              <Button
                handleOnClick={() => onClearClick(ProjectIndex, index)}
                children="Clear"
                btnStyle="simple"
              />
            </p>
          );
        })}
      </ol>
    </div>
  );
}
