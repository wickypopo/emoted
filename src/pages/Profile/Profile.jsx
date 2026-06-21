import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="dark">
      <main className="min-h-screen p-4 pt-10 flex flex-col gap-8 bg-linear-[30deg] from-bg-primary via-bg-secondary to-bg-primary text-label-primary">
        <h1 className="text-4xl font-semibold">Profile</h1>
        <Link
          to="/"
          className="text-center bg-label-primary text-bg-primary p-4 w-full squircle rounded-4xl text-xl font-medium"
        >
          Neu starten
        </Link>
      </main>
    </div>
  );
}
