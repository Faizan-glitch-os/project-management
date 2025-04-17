export default function Button({ children, bgColor }) {
  let styles =
    "p-6 text-2xl text-neutral-600 rounded-xl hover:text-neutral-900";

  if (bgColor) {
    styles =
      "p-6 text-2xl bg-neutral-600 text-white hover:bg-neutral-700 rounded-xl";
  }
  return <button className={styles}>{children}</button>;
}
