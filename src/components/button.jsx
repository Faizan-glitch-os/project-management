export default function Button({ children }) {
  return (
    <button className="bg-neutral-600 p-6 text-2xl text-white rounded-xl hover:bg-neutral-700">
      {children}
    </button>
  );
}
