import { Link } from "@tanstack/react-router";

export default function Sidebar() {
  return (
    <div className="flex items-center flex-col fixed h-screen w-40 mt-6 px-3">
      <div className="w-full mt-2 flex justify-center">
        <img
          src="https://tanstack.com/images/logos/splash-light.png"
          alt="logo"
          className="w-45"
        />
      </div>

      <div className="w-full mt-2 flex justify-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Dragon_Ball_Z_logo.svg"
          alt="logo"
          className="w-45"
        />
      </div>

      <h2 className="mt-5">Menu</h2>

      <div className="flex text-center flex-col mt-6 gap-2">
        <Link to="/characters" className="mb-4">
          Personagens
        </Link>

        <Link to="/planets">Planetas</Link>
      </div>
    </div>
  );
}
