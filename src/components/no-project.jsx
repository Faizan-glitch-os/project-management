import EmptyProjectImg from "../assets/no-projects.png";

import Button from "./button";

export default function NoProject() {
  return (
    <>
      <img
        src={EmptyProjectImg}
        alt="Image for empty project"
        className="w-24"
      />
      <h2 className="text-3xl text-slate-700 font-bold">No Project Seleted</h2>
      <p className="text-2xl text-slate-900">
        Select a project or get started with a new one
      </p>
      <Button children="Create new project" />
    </>
  );
}
