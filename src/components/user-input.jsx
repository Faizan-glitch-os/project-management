export default function UserInput({
  label,
  inputTag,
  helperText,
  inputHeight,
  inputPaddingY,
}) {
  return (
    <p className="flex flex-col item-start gap-1">
      <label
        htmlFor="title"
        className="font-bold uppercase text-2xl text-neutral-600"
      >
        {label}
      </label>
      {inputTag === "textarea" ? (
        <textarea
          id="title"
          required
          rows="1"
          placeholder={helperText}
          className={`${inputHeight} resize-none overflow-hidden bg-neutral-200 rounded-md w-full text-2xl text-neutral-800 px-2 ${inputPaddingY} border-b-neutral-400 border-b-4 focus:border-b-neutral-600 border-transparent focus:outline-none`}
        />
      ) : (
        <input
          type="date"
          id="title"
          required
          placeholder={helperText}
          className={`${inputHeight} resize-none overflow-hidden bg-neutral-200 rounded-md w-full text-2xl text-neutral-800 px-2 ${inputPaddingY} border-b-neutral-400 border-b-4 focus:border-b-neutral-600 border-transparent focus:outline-none`}
        />
      )}
    </p>
  );
}
