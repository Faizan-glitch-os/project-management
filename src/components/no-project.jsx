import EmptyProjectImg from "../assets/no-projects.png";

import Button from "./button";

export default function NoProject({ handleOnClick }) {
  return (
    <div className="w-3/5 min-h-screen flex flex-col items-center justify-center gap-4">
      <img
        src={EmptyProjectImg}
        alt="Image for empty project"
        className="w-24"
      />
      <h2 className="text-3xl text-slate-700 font-bold">No Project Seleted</h2>
      <p className="text-2xl text-center text-slate-900">
        Select a project or get started with a new one
      </p>
      <Button handleOnClick={handleOnClick} children="Create new project" />
    </div>
  );
}
