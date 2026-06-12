export default function Header() {
  return (
    <div
      className="p-2"
      style={{
        backgroundColor: "var(--indigo-700)",
        color: "var(--highlight-text-color)",
        borderRadius: "var(--border-radius)",
        padding: "3rem",
      }}
    >
      <h2 className="text-white">USERS CRUD</h2>
    </div>
  );
}
