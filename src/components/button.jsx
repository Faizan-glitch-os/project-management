export default function Button({ children, btnStyle, handleOnClick }) {
  let styles =
    "p-6 text-2xl text-neutral-600 rounded-xl hover:text-neutral-900";

  if (btnStyle === "Bg") {
    styles =
      "p-6 text-2xl bg-neutral-600 text-white rounded-xl hover:bg-neutral-700";
  } else if (btnStyle === "simple") {
    styles = "text-xl text-neutral-600 hover:text-neutral-800";
  }
  return (
    <button onClick={handleOnClick} className={styles}>
      {children}
    </button>
  );
}
