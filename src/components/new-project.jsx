import Button from "./button";

import UserInput from "./user-input";

export default function NewProject({ handleOnClick }) {
  return (
    <div className="w-3/5 min-h-screen px-8 flex flex-col gap-8">
      <p className="flex justify-end gap-4">
        <Button
          handleOnClick={handleOnClick}
          children="Cancel"
          bgColor={false}
        />
        <Button children="Save" bgColor={true} />
      </p>
      <UserInput
        inputTag="textarea"
        label="title"
        helperText="enter title"
        inputPaddingY="py-4"
      />
      <UserInput
        inputTag="textarea"
        label="description"
        helperText="enter description"
        inputHeight="h-32"
        inputPaddingY="py-1"
      />
      <UserInput
        inputTag="input"
        label="due date"
        helperText="kaka"
        inputPaddingY="py-4"
      />
    </div>
  );
}
