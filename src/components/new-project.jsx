import Button from "./button";

import { useRef, useState } from "react";

import UserInput from "./user-input";
import Model from "./model";

export default function NewProject({ handleOnCancel, handleOnSave }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  const model = useRef();

  function handleSave(newProject) {
    if (
      title.current.value.trim() === "" ||
      description.current.value.trim() === "" ||
      date.current.value.trim() === ""
    ) {
      model.current.open();
      return;
    }
    handleOnSave(newProject);
  }

  return (
    <>
      <Model ref={model} />
      <div className="w-3/5 min-h-screen px-8 flex flex-col gap-8">
        <p className="flex justify-end gap-4">
          <Button
            handleOnClick={handleOnCancel}
            children="Cancel"
            bgColor={false}
          />
          <Button
            handleOnClick={() =>
              handleSave({
                title: `${title.current.value}`,
                description: `${description.current.value}`,
                date: `${date.current.value}`,
                tasks: [],
              })
            }
            children="Save"
            btnStyle="Bg"
          />
        </p>
        <UserInput
          ref={title}
          inputTag="textarea"
          label="title"
          helperText="enter title"
          inputPaddingY="py-4"
        />
        <UserInput
          ref={description}
          inputTag="textarea"
          label="description"
          helperText="enter description"
          inputHeight="h-32"
          inputPaddingY="py-1"
        />
        <UserInput
          ref={date}
          inputTag="input"
          label="due date"
          helperText="kaka"
          inputPaddingY="py-4"
        />
      </div>
    </>
  );
}
